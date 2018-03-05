require('../styles/css/global.css');
import Placeholder from './cortex/placeholder.js';
// import axios from 'axios';
import moment from 'moment';
import CryptoJS from"crypto-js";
// import Logger from './cortex/logger.js';

class View {
  constructor() {
    this.placeholder = new Placeholder();
    this.productionEnv = process.env.NODE_ENV !== 'development';

    this.creativeContainer = window.document.getElementById(
    'creativeContainer');

    this.creativeContainerDebugger = window.document.getElementById(
    'creativeContainer-debugger');

    this.sportUrlMap = {
      mlb: "baseball/mlb",
      nfl: "football/nfl",
      nba: "basketball/nba",
      nhl: "hockey/nhl"
    }
  }

  randomInt(max) {
    return Math.floor(Math.random() * max);
  }

  generateSignature(key, secret) {
    return String(CryptoJS.SHA256(key + secret + Math.floor((new Date().getTime()) / 1000)));
  }

  getSport() {
    const sport = GLOBAL_VARS.sport;
    const supportedSports = ["mlb", "nfl", "nba"];

    let chosenSport = !sport || sport.length < 1 ? supportedSports[this.randomInt(3)] : sport[this.randomInt(sport.length)];
    if (supportedSports.indexOf(chosenSport.toLowerCase()) < 0) throw `Sport: ${sport} is not supported currently`;

    return chosenSport.toLowerCase();
  }

  getTeamId(sport) {
    if (!GLOBAL_VARS.team || GLOBAL_VARS.team.length < 1) return Promise.resolve(false);

    const chosenTeam = GLOBAL_VARS.team[this.randomInt(GLOBAL_VARS.team.length)];

    let key = GLOBAL_VARS.statsApiCreds[sport].key;
    let secret = GLOBAL_VARS.statsApiCreds[sport].secret;
    if (!key || key.length < 1 || !secret || secret.length < 1) throw `Please provide API Credentials for sport: ${sport}`;

    const url = `http://api.stats.com/v1/stats/${this.sportUrlMap[sport]}/teams/?languageId=1&accept=json&api_key=${key}&sig=${this.generateSignature(key, secret)}`
    return fetch(url, {mode: 'no-cors'})
    .then(() => {
      const mockdata = {"status":"OK","recordCount":32,"startTimestamp":"2018-03-05T20:13:42.5143905Z","endTimestamp":"2018-03-05T20:13:42.5456409Z","timeTaken":0.0312504,"apiResults":[{"sportId":2,"name":"Baseball","league":{"leagueId":7,"name":"Major League Baseball","abbreviation":"MLB","displayName":"Major League Baseball","season":{"season":2018,"name":"2018 MLB Season","isActive":true,"conferences":[{"conferenceId":6,"name":"National League","abbreviation":"NL","divisions":[{"divisionId":14,"name":"West Division","abbreviation":"West","teams":[{"venue":{"venueId":418,"name":"Coors Field","city":"Denver","state":{"stateId":6,"name":"Colorado","abbreviation":"CO"},"country":{"countryId":1,"name":"United States","abbreviation":"USA"}},"teamId":251,"location":"Colorado","nickname":"Rockies","abbreviation":"Col","country":{"countryId":1,"name":"United States","abbreviation":"USA"}},{"venue":{"venueId":421,"name":"Chase Field","city":"Phoenix","state":{"stateId":3,"name":"Arizona","abbreviation":"AZ"},"country":{"countryId":1,"name":"United States","abbreviation":"USA"}},"teamId":253,"location":"Arizona","nickname":"Diamondbacks","abbreviation":"Ari","country":{"countryId":1,"name":"United States","abbreviation":"USA"}},{"venue":{"venueId":410,"name":"Dodger Stadium","city":"Los Angeles","state":{"stateId":5,"name":"California","abbreviation":"CA"},"country":{"countryId":1,"name":"United States","abbreviation":"USA"}},"teamId":243,"location":"Los Angeles","nickname":"Dodgers","abbreviation":"LAD","country":{"countryId":1,"name":"United States","abbreviation":"USA"}},{"venue":{"venueId":3568,"name":"PETCO Park","city":"San Diego","state":{"stateId":5,"name":"California","abbreviation":"CA"},"country":{"countryId":1,"name":"United States","abbreviation":"USA"}},"teamId":249,"location":"San Diego","nickname":"Padres","abbreviation":"SD","country":{"countryId":1,"name":"United States","abbreviation":"USA"}},{"venue":{"venueId":434,"name":"AT&T Park","city":"San Francisco","state":{"stateId":5,"name":"California","abbreviation":"CA"},"country":{"countryId":1,"name":"United States","abbreviation":"USA"}},"teamId":250,"location":"San Francisco","nickname":"Giants","abbreviation":"SF","country":{"countryId":1,"name":"United States","abbreviation":"USA"}}]},{"divisionId":12,"name":"East Division","abbreviation":"East","teams":[{"venue":{"venueId":10257,"name":"Marlins Park","city":"Miami","state":{"stateId":9,"name":"Florida","abbreviation":"FL"},"country":{"countryId":1,"name":"United States","abbreviation":"USA"}},"teamId":252,"location":"Miami","nickname":"Marlins","abbreviation":"Mia","country":{"countryId":1,"name":"United States","abbreviation":"USA"}},{"venue":{"venueId":15505,"name":"SunTrust Park","city":"Atlanta","state":{"stateId":10,"name":"Georgia","abbreviation":"GA"},"country":{"countryId":1,"name":"United States","abbreviation":"USA"}},"teamId":239,"location":"Atlanta","nickname":"Braves","abbreviation":"Atl","country":{"countryId":1,"name":"United States","abbreviation":"USA"}},{"venue":{"venueId":6423,"name":"Nationals Park","city":"Washington","state":{"stateId":51,"name":"District of Columbia","abbreviation":"DC"},"country":{"countryId":1,"name":"United States","abbreviation":"USA"}},"teamId":244,"location":"Washington","nickname":"Nationals","abbreviation":"Was","country":{"countryId":1,"name":"United States","abbreviation":"USA"}},{"venue":{"venueId":7919,"name":"Citi Field","city":"Flushing","state":{"stateId":32,"name":"New York","abbreviation":"NY"},"country":{"countryId":1,"name":"United States","abbreviation":"USA"}},"teamId":245,"location":"New York","nickname":"Mets","abbreviation":"NYM","country":{"countryId":1,"name":"United States","abbreviation":"USA"}},{"venue":{"venueId":3569,"name":"Citizens Bank Park","city":"Philadelphia","state":{"stateId":38,"name":"Pennsylvania","abbreviation":"PA"},"country":{"countryId":1,"name":"United States","abbreviation":"USA"}},"teamId":246,"location":"Philadelphia","nickname":"Phillies","abbreviation":"Phi","country":{"countryId":1,"name":"United States","abbreviation":"USA"}}]},{"divisionId":13,"name":"Central Division","abbreviation":"Central","teams":[{"venue":{"venueId":437,"name":"Miller Park","city":"Milwaukee","state":{"stateId":49,"name":"Wisconsin","abbreviation":"WI"},"country":{"countryId":1,"name":"United States","abbreviation":"USA"}},"teamId":232,"location":"Milwaukee","nickname":"Brewers","abbreviation":"Mil","country":{"countryId":1,"name":"United States","abbreviation":"USA"}},{"venue":{"venueId":407,"name":"Wrigley Field","city":"Chicago","state":{"stateId":13,"name":"Illinois","abbreviation":"IL"},"country":{"countryId":1,"name":"United States","abbreviation":"USA"}},"teamId":240,"location":"Chicago","nickname":"Cubs","abbreviation":"ChC","country":{"countryId":1,"name":"United States","abbreviation":"USA"}},{"venue":{"venueId":3454,"name":"Great American Ball Park","city":"Cincinnati","state":{"stateId":35,"name":"Ohio","abbreviation":"OH"},"country":{"countryId":1,"name":"United States","abbreviation":"USA"}},"teamId":241,"location":"Cincinnati","nickname":"Reds","abbreviation":"Cin","country":{"countryId":1,"name":"United States","abbreviation":"USA"}},{"venue":{"venueId":438,"name":"PNC Park","city":"Pittsburgh","state":{"stateId":38,"name":"Pennsylvania","abbreviation":"PA"},"country":{"countryId":1,"name":"United States","abbreviation":"USA"}},"teamId":247,"location":"Pittsburgh","nickname":"Pirates","abbreviation":"Pit","country":{"countryId":1,"name":"United States","abbreviation":"USA"}},{"venue":{"venueId":4781,"name":"Busch Stadium","city":"St. Louis","state":{"stateId":25,"name":"Missouri","abbreviation":"MO"},"country":{"countryId":1,"name":"United States","abbreviation":"USA"}},"teamId":248,"location":"St. Louis","nickname":"Cardinals","abbreviation":"StL","country":{"countryId":1,"name":"United States","abbreviation":"USA"}}]}]},{"conferenceId":5,"name":"American League","abbreviation":"AL","divisions":[{"divisionId":12,"name":"East Division","abbreviation":"East","teams":[{"venue":{"venueId":422,"name":"Tropicana Field","city":"St. Petersburg","state":{"stateId":9,"name":"Florida","abbreviation":"FL"},"country":{"countryId":1,"name":"United States","abbreviation":"USA"}},"teamId":254,"location":"Tampa Bay","nickname":"Rays","abbreviation":"TB","country":{"countryId":1,"name":"United States","abbreviation":"USA"}},{"venue":{"venueId":392,"name":"Oriole Park at Camden Yards","city":"Baltimore","state":{"stateId":20,"name":"Maryland","abbreviation":"MD"},"country":{"countryId":1,"name":"United States","abbreviation":"USA"}},"teamId":225,"location":"Baltimore","nickname":"Orioles","abbreviation":"Bal","country":{"countryId":1,"name":"United States","abbreviation":"USA"}},{"venue":{"venueId":393,"name":"Fenway Park","city":"Boston","state":{"stateId":21,"name":"Massachusetts","abbreviation":"MA"},"country":{"countryId":1,"name":"United States","abbreviation":"USA"}},"teamId":226,"location":"Boston","nickname":"Red Sox","abbreviation":"Bos","country":{"countryId":1,"name":"United States","abbreviation":"USA"}},{"venue":{"venueId":7920,"name":"Yankee Stadium","city":"Bronx","state":{"stateId":32,"name":"New York","abbreviation":"NY"},"country":{"countryId":1,"name":"United States","abbreviation":"USA"}},"teamId":234,"location":"New York","nickname":"Yankees","abbreviation":"NYY","country":{"countryId":1,"name":"United States","abbreviation":"USA"}},{"venue":{"venueId":405,"name":"Rogers Centre","city":"Toronto","state":{"stateId":60,"name":"Ontario","abbreviation":"ON"},"country":{"countryId":2,"name":"Canada","abbreviation":"CAN"}},"teamId":238,"location":"Toronto","nickname":"Blue Jays","abbreviation":"Tor","country":{"countryId":2,"name":"Canada","abbreviation":"CAN"}}]},{"divisionId":14,"name":"West Division","abbreviation":"West","teams":[{"venue":{"venueId":394,"name":"Angel Stadium of Anaheim","city":"Anaheim","state":{"stateId":5,"name":"California","abbreviation":"CA"},"country":{"countryId":1,"name":"United States","abbreviation":"USA"}},"teamId":227,"location":"Los Angeles","nickname":"Angels","abbreviation":"LAA","country":{"countryId":1,"name":"United States","abbreviation":"USA"}},{"venue":{"venueId":402,"name":"Oakland-Alameda County Coliseum","city":"Oakland","state":{"stateId":5,"name":"California","abbreviation":"CA"},"country":{"countryId":1,"name":"United States","abbreviation":"USA"}},"teamId":235,"location":"Oakland","nickname":"Athletics","abbreviation":"Oak","country":{"countryId":1,"name":"United States","abbreviation":"USA"}},{"venue":{"venueId":432,"name":"Safeco Field","city":"Seattle","state":{"stateId":47,"name":"Washington","abbreviation":"WA"},"country":{"countryId":1,"name":"United States","abbreviation":"USA"}},"teamId":236,"location":"Seattle","nickname":"Mariners","abbreviation":"Sea","country":{"countryId":1,"name":"United States","abbreviation":"USA"}},{"venue":{"venueId":404,"name":"Globe Life Park in Arlington","city":"Arlington","state":{"stateId":43,"name":"Texas","abbreviation":"TX"},"country":{"countryId":1,"name":"United States","abbreviation":"USA"}},"teamId":237,"location":"Texas","nickname":"Rangers","abbreviation":"Tex","country":{"countryId":1,"name":"United States","abbreviation":"USA"}},{"venue":{"venueId":435,"name":"Minute Maid Park","city":"Houston","state":{"stateId":43,"name":"Texas","abbreviation":"TX"},"country":{"countryId":1,"name":"United States","abbreviation":"USA"}},"teamId":242,"location":"Houston","nickname":"Astros","abbreviation":"Hou","country":{"countryId":1,"name":"United States","abbreviation":"USA"}}]},{"divisionId":13,"name":"Central Division","abbreviation":"Central","teams":[{"venue":{"venueId":395,"name":"Guaranteed Rate Field","city":"Chicago","state":{"stateId":13,"name":"Illinois","abbreviation":"IL"},"country":{"countryId":1,"name":"United States","abbreviation":"USA"}},"teamId":228,"location":"Chicago","nickname":"White Sox","abbreviation":"CWS","country":{"countryId":1,"name":"United States","abbreviation":"USA"}},{"venue":{"venueId":396,"name":"Progressive Field","city":"Cleveland","state":{"stateId":35,"name":"Ohio","abbreviation":"OH"},"country":{"countryId":1,"name":"United States","abbreviation":"USA"}},"teamId":229,"location":"Cleveland","nickname":"Indians","abbreviation":"Cle","country":{"countryId":1,"name":"United States","abbreviation":"USA"}},{"venue":{"venueId":436,"name":"Comerica Park","city":"Detroit","state":{"stateId":22,"name":"Michigan","abbreviation":"MI"},"country":{"countryId":1,"name":"United States","abbreviation":"USA"}},"teamId":230,"location":"Detroit","nickname":"Tigers","abbreviation":"Det","country":{"countryId":1,"name":"United States","abbreviation":"USA"}},{"venue":{"venueId":398,"name":"Ewing M. Kauffman Stadium","city":"Kansas City","state":{"stateId":25,"name":"Missouri","abbreviation":"MO"},"country":{"countryId":1,"name":"United States","abbreviation":"USA"}},"teamId":231,"location":"Kansas City","nickname":"Royals","abbreviation":"KC","country":{"countryId":1,"name":"United States","abbreviation":"USA"}},{"venue":{"venueId":9024,"name":"Target Field","city":"Minneapolis","state":{"stateId":23,"name":"Minnesota","abbreviation":"MN"},"country":{"countryId":1,"name":"United States","abbreviation":"USA"}},"teamId":233,"location":"Minnesota","nickname":"Twins","abbreviation":"Min","country":{"countryId":1,"name":"United States","abbreviation":"USA"}}]}]}],"allstar":{"teams":[{"teamId":322,"location":"NL","nickname":"All-Stars","abbreviation":"NLS"},{"teamId":321,"location":"AL","nickname":"All-Stars","abbreviation":"ALS"}]}}}}]}
      // const conferences = response.apiResults[0].league.season.conferences;
      const conferences = mockdata.apiResults[0].league.season.conferences;
      for (var i = 0; i < conferences.length; i++) {
        const divisions = conferences[i].divisions
        for (var j = 0; j < divisions.length; j++) {
          const teams = divisions[j].teams;
          for (var k = 0; k < teams.length; k++) {
            if (teams[k].location.toLowerCase() === chosenTeam || teams[k].nickname.toLowerCase() === chosenTeam) {
              return teams[k].teamId;
            }
          }
        }
      }
      return Promise.reject(`Team: ${chosenTeam} not found for sport: ${sport}`);
    })
  }

  getUrl(sport, team) {
    let key = GLOBAL_VARS.statsApiCreds[sport].key;
    let secret = GLOBAL_VARS.statsApiCreds[sport].secret;

    if (!key || key.length < 1) throw `Please provide API Key for sport: ${sport}`;
    return `http://api.stats.com/v1/stats/${this.sportUrlMap[sport]}/teams/?accept=json&api_key=${key}&sig=${this.generateSignature(key, secret)}`
  }

  fetch(url) {
    if (!url) return Promise.reject("url wasn't specified");
    fetch(url, {
      method: "GET",
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
      },
      mode: "no-cors",
      withCredentials: true,
      credentials: 'same-origin',
    }).then(res => {
      console.log(res)
      // res.text().then(res2 => console.log('resss23', res2))
    })
  }

  getScheduleUrl(id, sport) {
    let key = GLOBAL_VARS.statsApiCreds[sport].key;
    let secret = GLOBAL_VARS.statsApiCreds[sport].secret;
    const date = moment().utcOffset(-5).format("YYYYMMDD");

    if (!key || key.length < 1) throw `Please provide API Key for sport: ${sport}`;

    if (!id) return `http://api.stats.com/v1/stats/${this.sportUrlMap[sport]}/events/?accept=json&api_key=${key}&sig=${this.generateSignature(key, secret)}`
    return `http://api.stats.com/v1/stats/${this.sportUrlMap[sport]}/scores/teams/${id}?date=${date}&accept=json&api_key=${key}&sig=${this.generateSignature(key, secret)}`
  }

  setData() {}

  /**
   * Render the placeholder or the main view.
   *
   * Every time the app receives a 'hidden' event this method will get called.
   *
   */
  render() {
    const sport = this.getSport();
    this.getTeamId(sport)
    .then(teamId => {
      console.log(teamId)
      const url = this.getScheduleUrl(teamId, sport);
      if (teamId) {
         if (GLOBAL_VARS.liveScore || GLOBAL_VARS.finalScore) {
            console.log('me')
         }
      }
    });

    // const url = this.getUrl(sport, team)

    // this.fetch(url)

    if (!window.document.getElementById(GLOBAL_VARS.placeholderID)) {
      this.placeholder.render();
    }

    // if (this.productionEnv) {}

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
  updateView() {}

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
    this.placeholder.hide();
  }
}

module.exports = View;
