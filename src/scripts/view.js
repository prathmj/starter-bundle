require('../styles/css/global.css');
import Placeholder from './cortex/placeholder.js';
import Logger from './cortex/logger.js';
import Tracker from './cortex/tracker.js';
import axios from 'axios';
import Moment from 'moment-timezone';
// import tz from ;
// import TEST_API_RESPONSE from './test-api-response.js'

class View {
  constructor() {
    this.placeholder = new Placeholder();
    this.rows = [];
    this.deviceId = '';
    this.productionEnv = process.env.NODE_ENV !== 'development';

    this.creativeContainer = window.document.getElementById(
		'creativeContainer');

    this.creativeContainerDebugger = window.document.getElementById(
    'creativeContainer-debugger');

    this.content = window.document.getElementById('content');

    this.timezone = GLOBAL_VARS.timezone;

    this.image = null;
  }

  fnRandomImage(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  getShowtimesAndTheater(theaters){
    for (var j = 0; j < theaters.length; j++){
      let movies = theaters[j].movies
      for (var i = 0; i < movies.length; i++) {
        if (movies[i].title == GLOBAL_VARS.film){
          return {showtimes: movies[i].showtimes, theater: theaters[j]}
        }
      }
    }
    return {error: "This Film is not playing in the 10 nearest theaters"}
  }

  renderCountdown(diff){
    let minutes = diff/60;
    let hrs = Math.floor(minutes/60);
    minutes = Math.round(minutes - (hrs*60))
    let countdown = String(minutes) + "min"
    if (hrs > 0)
      countdown =  String(hrs) + "hr " + countdown
    document.getElementById("timeToShow").innerHTML = countdown
  }

  renderShowtimes(showtime_data, creative){
    window.moment = Moment;
    showtime_data = this.getShowtimesAndTheater(showtime_data.theaters);
    let theater = showtime_data.theater;
    showtime_data = showtime_data.showtimes;
    let theater_div = document.getElementById("theaterName")
    theater_div.innerHTML = theater.name;
    theater_div.style.color = creative.color
    let current_time = Moment.tz(Moment(), this.timezone);
    let count = 0;
    if (showtime_data) {
      for (var i = 0; i < showtime_data.length; i++) {
        let screening = Moment.tz(showtime_data[i].screening, this.timezone);
        let screening_seconds = parseInt(screening.format("X"));1
        if ( screening > current_time ){
          count += 1
          if (count == 1){
            this.renderCountdown(screening_seconds - parseInt(current_time.format("X")));
          }
          let showtime_div = document.getElementById("time" + count)
          showtime_div.innerHTML = screening.format("h:mma");
          if (count > 1)
            showtime_div.style.color = creative.lightColor;
          if (count > 3)
            break;
        }
      }
    }
    if (count == 0)
      this.placeholder.render()
  }

  /**
   * Set the incoming data from Silo.
   *
   * This method will only get called when the app is no longer visible on the
   * screen. The Incoming data is expected to be a non-empty array of objects
   * as retreived from Silo.
   *
   * This method is a good place to manipulate the incoming data as needed.
   *
   * It is strongly recommended to preload/cache images or any other media
   * files. Consider creating the necessary invisible DOM elements in this
   * method. In the render() method you can make the needed elements visible.
   *
   * e.g.
   * setData(rows) {
   *   for (const row of rows) {
   *     const img = new window.Image();
   *     img.src = row.image_url;
   *     img.onerror = () => {
   *       // log error
   *     }
   *     img.className = 'invisible';
   *     this.container.appendChild(img);
   *     this.images.push(img);
   *   }
   * }
   *
   * _render() {
   *   const img = this._selectImg();
   *   img.className = 'visible';
   * }
   *
   *
   * @param {array} data The data rows.
   *
   */
  setData(data) {
    // Verify that the data matches Silo structure.
    this.rows = data;

    if (data && data.length > 0) {
      this.deviceId = data[0]._device_id;
    }
  }

  /**
   * Render the placeholder or the main view.
   *
   * Every time the app receives a 'hidden' event this method will get called.
   *
   */
  render() {
    Logger.log('Rendering a new view.');
    if (!window.document.getElementById(GLOBAL_VARS.placeholderID)) {
      this.placeholder.render();
    }

    if (this.productionEnv) {
      Tracker.track(this.deviceId, GLOBAL_VARS.campaign, 'tracked');
    }

    this._render();
  }

  /**
   * Update the view before displaying it on the screen.
   *
   * Every time the app receives a 'visible' event this method will get called.
   * This is the place to make changes to the view before it becomes visible
   * on the screen. For instance, if you want to display the current time
   * accurately, you should update the time data on this method.
   *
   * Prefer rendering the view in this._render() as much as possible as that
   * method will get called when the app is in the background. Only implement
   * this method when you need to perform some actions right before the view
   * becomes visible on the screen.
   *
   */
  updateView() {

      //this._render();

  }

  /**
   * Handles rendering of the main view.
   *
   * This method will get called every time the app receives a 'hidden' event
   * and we have data stored in this.rows. This is the place where you actually
   * render some content on the screen based on the incoming dynamic data.
   *
   * Current implementation simply iterates over rows and displays a single row
   * every time the app is visible on the screen.
   *
   * It is important to be as efficient as possible in this method. Try to
   * make as few DOM manipulations as possible. Reusing DOM elements is better
   * than recreating them every time this method is called.
   *
   */
  _render() {
    this.creativeContainer.style.display = 'block';
    if (this.rows === null || this.rows.length === 0) {
      return;
    }else{
      this.placeholder.hide();
    }

    Logger.log(`The view has ${this.rows.length} data rows.`);
    const row = this.rows;
    const lat = row[0].latitude;
    const lng = row[0].longitude;

    let { creativeAttributes } = GLOBAL_VARS;
    const objImageRange = {
        min: 0,
        max: creativeAttributes.length - 1
      };
    let creative = creativeAttributes[this.fnRandomImage(objImageRange.min, objImageRange.max)]
    this.image = creative.image;
    this.placeholder.setPlaceholderImage(creative.placeholder)

    this.content.style.backgroundImage = 'url(' + this.image + ')';
    for (var i = 1; i <= 4; i++) {
      document.getElementById("time" + i).innerHTML = "";
    }
    let instance = axios.create({
      headers: {
        'Authorization': 'Basic bGlua255YzpkM2E5NGQwNGU0ZWNiOGNlOGRhYTNjZjE2Y2FlYWY4NjFmYmEyMTk4',
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    })

    const apiEndPoint =  `https://9cyyylbjg1.execute-api.us-east-1.amazonaws.com/dev/?lat=${lat}&lng=${lng}`
    instance.get(apiEndPoint)
      .then ( (response) => {
        this.renderShowtimes(response.data, creative)
      })
      .catch( (err) => {
        this.placeholder.render()
        console.log(err)
      });

    }
}
module.exports = View;
