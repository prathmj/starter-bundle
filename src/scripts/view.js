require('../styles/css/global.css');
import Placeholder from './cortex/placeholder.js';
// import axios from 'axios';
import jsonp from 'jsonp';
import moment from 'moment';
import CryptoJS from"crypto-js";
import getTemplate from './templates.js';
// import Logger from './cortex/logger.js';

function formatPeriod(n) {
  switch(n) {
    case "1":
      return "1ST";
    case "2":
      return "2ND";
    case "3":
      return "3RD";
    case "4":
    case "5":
    case "6":
    case "7":
    case "8":
    case "9":
      return `${n}TH`
    default:
      return "LIVE SCORE"
  }
}

function updateTimer(startDate, running) {
  const hours   = window.document.getElementById("js_hours");   //data.startDate[1]
  const minutes = window.document.getElementById("js_minutes"); //data.startDate[1]
  const seconds = window.document.getElementById("js_seconds"); //data.startDate[1]

  const then = moment.utc(startDate.full).utcOffset(-5);
  const now = moment().utcOffset(-5)
  if (now.isSameOrAfter(then)) {
    hours.innerText = 0;
    minutes.innerText = 0;
    seconds.innerText = 0;
    return;
  }
  
  const timeleft = moment.utc(moment(then.format('DD/MM/YYYY HH:mm:ss'),"DD/MM/YYYY HH:mm:ss").diff(moment(now.format('DD/MM/YYYY HH:mm:ss'),"DD/MM/YYYY HH:mm:ss"))).format("HH mm ss").split(' ')
  hours.innerText = timeleft[0];
  minutes.innerText = timeleft[1];
  seconds.innerText = timeleft[2];
  if (running) return;
  setInterval(() => {
    updateTimer(startDate, true)
  }, 1000)
}


class View {
  constructor() {
    this.placeholder = new Placeholder();
    this.productionEnv = process.env.NODE_ENV !== 'development';
    this.simulatedLatency = 1200;

    this.iframe = window.document.getElementById('myFrame');

    this.creativeContainerDebugger = window.document.getElementById(
    'creativeContainer-debugger');

    this.statsApiUrlMap = {
      MLB: "baseball/mlb",
      NFL: "football/nfl",
      NBA: "basketball/nba",
      NHL: "hockey/nhl"
    }

    this.statsApiStatusMap = {
      countdown: "1",
      liveScore: "2",
      finalScore: ["3", "4"]
    }
  }

  randomInt(max) {
    return Math.floor(Math.random() * max);
  }

  publicDataPassback() {
    return this.data ? this.data : false;
  }

  generateSignature(key, secret) {
    return String(CryptoJS.SHA256(key + secret + Math.floor((new Date().getTime()) / 1000)));
  }

  getSport() {
    const sports = GLOBAL_VARS.sports;
    const enabledSports = Object.values(sports)
      .map((sport, i) => (sport.enabled ? i : -1))
      .filter(s => (s > -1))

    const randomKey = enabledSports[this.randomInt(enabledSports.length)]
    const selectedSport = Object.keys(sports)[randomKey];

    this.data = {
      config: sports[selectedSport]
    };

    return selectedSport;
  }

  jsonpFetchPromise(url) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          jsonp(url, {}, function(err, data) {
            if (err) {
              console.log(err)
              reject(err)
            } else {
              resolve(data)
            }
          })
        }, this.simulatedLatency)

        setTimeout(() => {
          reject('timed out')
        }, this.simulatedLatency + 5000)
      })
  }

  getTeamId(sport) {
    const teams = GLOBAL_VARS.sports[sport].teams
    if (!teams || teams.length < 1) return Promise.resolve(false);

    const chosenTeam = teams[this.randomInt(teams.length)];

    let key = GLOBAL_VARS.statsApiCreds[sport].key;
    let secret = GLOBAL_VARS.statsApiCreds[sport].secret;
    if (!key || key.length < 1 || !secret || secret.length < 1) throw `Please provide API Credentials for sport: ${sport}`;

    const url = `http://api.stats.com/v1/stats/${this.statsApiUrlMap[sport]}/teams/?languageId=1&accept=jsonp&api_key=${key}&sig=${this.generateSignature(key, secret)}`
    return this.jsonpFetchPromise(url)
    .then(data => {
      // const mockdata = {"status":"OK","recordCount":32,"startTimestamp":"2018-03-05T20:13:42.5143905Z","endTimestamp":"2018-03-05T20:13:42.5456409Z","timeTaken":0.0312504,"apiResults":[{"sportId":2,"name":"Baseball","league":{"leagueId":7,"name":"Major League Baseball","abbreviation":"MLB","displayName":"Major League Baseball","season":{"season":2018,"name":"2018 MLB Season","isActive":true,"conferences":[{"conferenceId":6,"name":"National League","abbreviation":"NL","divisions":[{"divisionId":14,"name":"West Division","abbreviation":"West","teams":[{"venue":{"venueId":418,"name":"Coors Field","city":"Denver","state":{"stateId":6,"name":"Colorado","abbreviation":"CO"},"country":{"countryId":1,"name":"United States","abbreviation":"USA"}},"teamId":251,"location":"Colorado","nickname":"Rockies","abbreviation":"Col","country":{"countryId":1,"name":"United States","abbreviation":"USA"}},{"venue":{"venueId":421,"name":"Chase Field","city":"Phoenix","state":{"stateId":3,"name":"Arizona","abbreviation":"AZ"},"country":{"countryId":1,"name":"United States","abbreviation":"USA"}},"teamId":253,"location":"Arizona","nickname":"Diamondbacks","abbreviation":"Ari","country":{"countryId":1,"name":"United States","abbreviation":"USA"}},{"venue":{"venueId":410,"name":"Dodger Stadium","city":"Los Angeles","state":{"stateId":5,"name":"California","abbreviation":"CA"},"country":{"countryId":1,"name":"United States","abbreviation":"USA"}},"teamId":243,"location":"Los Angeles","nickname":"Dodgers","abbreviation":"LAD","country":{"countryId":1,"name":"United States","abbreviation":"USA"}},{"venue":{"venueId":3568,"name":"PETCO Park","city":"San Diego","state":{"stateId":5,"name":"California","abbreviation":"CA"},"country":{"countryId":1,"name":"United States","abbreviation":"USA"}},"teamId":249,"location":"San Diego","nickname":"Padres","abbreviation":"SD","country":{"countryId":1,"name":"United States","abbreviation":"USA"}},{"venue":{"venueId":434,"name":"AT&T Park","city":"San Francisco","state":{"stateId":5,"name":"California","abbreviation":"CA"},"country":{"countryId":1,"name":"United States","abbreviation":"USA"}},"teamId":250,"location":"San Francisco","nickname":"Giants","abbreviation":"SF","country":{"countryId":1,"name":"United States","abbreviation":"USA"}}]},{"divisionId":12,"name":"East Division","abbreviation":"East","teams":[{"venue":{"venueId":10257,"name":"Marlins Park","city":"Miami","state":{"stateId":9,"name":"Florida","abbreviation":"FL"},"country":{"countryId":1,"name":"United States","abbreviation":"USA"}},"teamId":252,"location":"Miami","nickname":"Marlins","abbreviation":"Mia","country":{"countryId":1,"name":"United States","abbreviation":"USA"}},{"venue":{"venueId":15505,"name":"SunTrust Park","city":"Atlanta","state":{"stateId":10,"name":"Georgia","abbreviation":"GA"},"country":{"countryId":1,"name":"United States","abbreviation":"USA"}},"teamId":239,"location":"Atlanta","nickname":"Braves","abbreviation":"Atl","country":{"countryId":1,"name":"United States","abbreviation":"USA"}},{"venue":{"venueId":6423,"name":"Nationals Park","city":"Washington","state":{"stateId":51,"name":"District of Columbia","abbreviation":"DC"},"country":{"countryId":1,"name":"United States","abbreviation":"USA"}},"teamId":244,"location":"Washington","nickname":"Nationals","abbreviation":"Was","country":{"countryId":1,"name":"United States","abbreviation":"USA"}},{"venue":{"venueId":7919,"name":"Citi Field","city":"Flushing","state":{"stateId":32,"name":"New York","abbreviation":"NY"},"country":{"countryId":1,"name":"United States","abbreviation":"USA"}},"teamId":245,"location":"New York","nickname":"Mets","abbreviation":"NYM","country":{"countryId":1,"name":"United States","abbreviation":"USA"}},{"venue":{"venueId":3569,"name":"Citizens Bank Park","city":"Philadelphia","state":{"stateId":38,"name":"Pennsylvania","abbreviation":"PA"},"country":{"countryId":1,"name":"United States","abbreviation":"USA"}},"teamId":246,"location":"Philadelphia","nickname":"Phillies","abbreviation":"Phi","country":{"countryId":1,"name":"United States","abbreviation":"USA"}}]},{"divisionId":13,"name":"Central Division","abbreviation":"Central","teams":[{"venue":{"venueId":437,"name":"Miller Park","city":"Milwaukee","state":{"stateId":49,"name":"Wisconsin","abbreviation":"WI"},"country":{"countryId":1,"name":"United States","abbreviation":"USA"}},"teamId":232,"location":"Milwaukee","nickname":"Brewers","abbreviation":"Mil","country":{"countryId":1,"name":"United States","abbreviation":"USA"}},{"venue":{"venueId":407,"name":"Wrigley Field","city":"Chicago","state":{"stateId":13,"name":"Illinois","abbreviation":"IL"},"country":{"countryId":1,"name":"United States","abbreviation":"USA"}},"teamId":240,"location":"Chicago","nickname":"Cubs","abbreviation":"ChC","country":{"countryId":1,"name":"United States","abbreviation":"USA"}},{"venue":{"venueId":3454,"name":"Great American Ball Park","city":"Cincinnati","state":{"stateId":35,"name":"Ohio","abbreviation":"OH"},"country":{"countryId":1,"name":"United States","abbreviation":"USA"}},"teamId":241,"location":"Cincinnati","nickname":"Reds","abbreviation":"Cin","country":{"countryId":1,"name":"United States","abbreviation":"USA"}},{"venue":{"venueId":438,"name":"PNC Park","city":"Pittsburgh","state":{"stateId":38,"name":"Pennsylvania","abbreviation":"PA"},"country":{"countryId":1,"name":"United States","abbreviation":"USA"}},"teamId":247,"location":"Pittsburgh","nickname":"Pirates","abbreviation":"Pit","country":{"countryId":1,"name":"United States","abbreviation":"USA"}},{"venue":{"venueId":4781,"name":"Busch Stadium","city":"St. Louis","state":{"stateId":25,"name":"Missouri","abbreviation":"MO"},"country":{"countryId":1,"name":"United States","abbreviation":"USA"}},"teamId":248,"location":"St. Louis","nickname":"Cardinals","abbreviation":"StL","country":{"countryId":1,"name":"United States","abbreviation":"USA"}}]}]},{"conferenceId":5,"name":"American League","abbreviation":"AL","divisions":[{"divisionId":12,"name":"East Division","abbreviation":"East","teams":[{"venue":{"venueId":422,"name":"Tropicana Field","city":"St. Petersburg","state":{"stateId":9,"name":"Florida","abbreviation":"FL"},"country":{"countryId":1,"name":"United States","abbreviation":"USA"}},"teamId":254,"location":"Tampa Bay","nickname":"Rays","abbreviation":"TB","country":{"countryId":1,"name":"United States","abbreviation":"USA"}},{"venue":{"venueId":392,"name":"Oriole Park at Camden Yards","city":"Baltimore","state":{"stateId":20,"name":"Maryland","abbreviation":"MD"},"country":{"countryId":1,"name":"United States","abbreviation":"USA"}},"teamId":225,"location":"Baltimore","nickname":"Orioles","abbreviation":"Bal","country":{"countryId":1,"name":"United States","abbreviation":"USA"}},{"venue":{"venueId":393,"name":"Fenway Park","city":"Boston","state":{"stateId":21,"name":"Massachusetts","abbreviation":"MA"},"country":{"countryId":1,"name":"United States","abbreviation":"USA"}},"teamId":226,"location":"Boston","nickname":"Red Sox","abbreviation":"Bos","country":{"countryId":1,"name":"United States","abbreviation":"USA"}},{"venue":{"venueId":7920,"name":"Yankee Stadium","city":"Bronx","state":{"stateId":32,"name":"New York","abbreviation":"NY"},"country":{"countryId":1,"name":"United States","abbreviation":"USA"}},"teamId":234,"location":"New York","nickname":"Yankees","abbreviation":"NYY","country":{"countryId":1,"name":"United States","abbreviation":"USA"}},{"venue":{"venueId":405,"name":"Rogers Centre","city":"Toronto","state":{"stateId":60,"name":"Ontario","abbreviation":"ON"},"country":{"countryId":2,"name":"Canada","abbreviation":"CAN"}},"teamId":238,"location":"Toronto","nickname":"Blue Jays","abbreviation":"Tor","country":{"countryId":2,"name":"Canada","abbreviation":"CAN"}}]},{"divisionId":14,"name":"West Division","abbreviation":"West","teams":[{"venue":{"venueId":394,"name":"Angel Stadium of Anaheim","city":"Anaheim","state":{"stateId":5,"name":"California","abbreviation":"CA"},"country":{"countryId":1,"name":"United States","abbreviation":"USA"}},"teamId":227,"location":"Los Angeles","nickname":"Angels","abbreviation":"LAA","country":{"countryId":1,"name":"United States","abbreviation":"USA"}},{"venue":{"venueId":402,"name":"Oakland-Alameda County Coliseum","city":"Oakland","state":{"stateId":5,"name":"California","abbreviation":"CA"},"country":{"countryId":1,"name":"United States","abbreviation":"USA"}},"teamId":235,"location":"Oakland","nickname":"Athletics","abbreviation":"Oak","country":{"countryId":1,"name":"United States","abbreviation":"USA"}},{"venue":{"venueId":432,"name":"Safeco Field","city":"Seattle","state":{"stateId":47,"name":"Washington","abbreviation":"WA"},"country":{"countryId":1,"name":"United States","abbreviation":"USA"}},"teamId":236,"location":"Seattle","nickname":"Mariners","abbreviation":"Sea","country":{"countryId":1,"name":"United States","abbreviation":"USA"}},{"venue":{"venueId":404,"name":"Globe Life Park in Arlington","city":"Arlington","state":{"stateId":43,"name":"Texas","abbreviation":"TX"},"country":{"countryId":1,"name":"United States","abbreviation":"USA"}},"teamId":237,"location":"Texas","nickname":"Rangers","abbreviation":"Tex","country":{"countryId":1,"name":"United States","abbreviation":"USA"}},{"venue":{"venueId":435,"name":"Minute Maid Park","city":"Houston","state":{"stateId":43,"name":"Texas","abbreviation":"TX"},"country":{"countryId":1,"name":"United States","abbreviation":"USA"}},"teamId":242,"location":"Houston","nickname":"Astros","abbreviation":"Hou","country":{"countryId":1,"name":"United States","abbreviation":"USA"}}]},{"divisionId":13,"name":"Central Division","abbreviation":"Central","teams":[{"venue":{"venueId":395,"name":"Guaranteed Rate Field","city":"Chicago","state":{"stateId":13,"name":"Illinois","abbreviation":"IL"},"country":{"countryId":1,"name":"United States","abbreviation":"USA"}},"teamId":228,"location":"Chicago","nickname":"White Sox","abbreviation":"CWS","country":{"countryId":1,"name":"United States","abbreviation":"USA"}},{"venue":{"venueId":396,"name":"Progressive Field","city":"Cleveland","state":{"stateId":35,"name":"Ohio","abbreviation":"OH"},"country":{"countryId":1,"name":"United States","abbreviation":"USA"}},"teamId":229,"location":"Cleveland","nickname":"Indians","abbreviation":"Cle","country":{"countryId":1,"name":"United States","abbreviation":"USA"}},{"venue":{"venueId":436,"name":"Comerica Park","city":"Detroit","state":{"stateId":22,"name":"Michigan","abbreviation":"MI"},"country":{"countryId":1,"name":"United States","abbreviation":"USA"}},"teamId":230,"location":"Detroit","nickname":"Tigers","abbreviation":"Det","country":{"countryId":1,"name":"United States","abbreviation":"USA"}},{"venue":{"venueId":398,"name":"Ewing M. Kauffman Stadium","city":"Kansas City","state":{"stateId":25,"name":"Missouri","abbreviation":"MO"},"country":{"countryId":1,"name":"United States","abbreviation":"USA"}},"teamId":231,"location":"Kansas City","nickname":"Royals","abbreviation":"KC","country":{"countryId":1,"name":"United States","abbreviation":"USA"}},{"venue":{"venueId":9024,"name":"Target Field","city":"Minneapolis","state":{"stateId":23,"name":"Minnesota","abbreviation":"MN"},"country":{"countryId":1,"name":"United States","abbreviation":"USA"}},"teamId":233,"location":"Minnesota","nickname":"Twins","abbreviation":"Min","country":{"countryId":1,"name":"United States","abbreviation":"USA"}}]}]}],"allstar":{"teams":[{"teamId":322,"location":"NL","nickname":"All-Stars","abbreviation":"NLS"},{"teamId":321,"location":"AL","nickname":"All-Stars","abbreviation":"ALS"}]}}}}]}
      // const conferences = mockdata.apiResults[0].league.season.conferences;
      const conferences = data.apiResults[0].league.season.conferences;
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

  getUrl(teamId, sport, standings) {
    let key = GLOBAL_VARS.statsApiCreds[sport].key;
    let secret = GLOBAL_VARS.statsApiCreds[sport].secret;
    const date = moment().utcOffset(-5).format("YYYYMMDD");

    if (!key || key.length < 1) throw `Please provide API Key for sport: ${sport}`;
    if (standings) return `http://api.stats.com/v1/stats/${this.statsApiUrlMap[sport]}/standings/?accept=jsonp&api_key=${key}&sig=${this.generateSignature(key, secret)}`
    if (!teamId) return `http://api.stats.com/v1/stats/${this.statsApiUrlMap[sport]}/events/?accept=jsonp&api_key=${key}&sig=${this.generateSignature(key, secret)}`
    return `http://api.stats.com/v1/stats/${this.statsApiUrlMap[sport]}/scores/teams/${teamId}?date=${date}&accept=jsonp&api_key=${key}&sig=${this.generateSignature(key, secret)}`
  }

  renderCurrentStandingsFallback() {
    if (this.attempted === true) {
      this.placeholder.show()
      return;
    }
    this.attempted = true;

    console.log('current standings rendered')
    const sport = GLOBAL_VARS.variations.standings.sport;
    this.data = {
      config: GLOBAL_VARS.sports[sport]
    }
    const url = this.getUrl(null, sport, true)
    this.jsonpFetchPromise(url)
    .then(res => {
      const selectedConference = GLOBAL_VARS.variations.standings.conference.toLowerCase();
      const conference = res.apiResults[0].league.season.eventType[0].conferences.find(c => {
        return c.name.toLowerCase().indexOf(selectedConference) > -1;
      });
      if (!conference) throw `Conference not found for sport: ${this.sport}`

      let teamsForStandings;

      const selectedDivision = GLOBAL_VARS.variations.standings.division.toLowerCase();
      if (!selectedDivision || selectedDivision.length === 0) {
        teamsForStandings = [].concat.apply([],conference.divisions.map(d => (d.teams)));
      } else {
        const division = conference.divisions.find(d => (d.name.toLowerCase().indexOf(selectedDivision) > -1));
        if (!division) throw `Division not found for sport: ${this.sport}`;
        teamsForStandings = division.teams;
      }

      const teamsOrderedByRank = teamsForStandings.sort((a, b) => (a.conference.rank) - Number(b.conference.rank));
      this.data = Object.assign({teams: teamsOrderedByRank}, this.data);

      this.renderTemplate('standings');
    }).catch(err => {
      console.log('Error during rendering process, check it: ', err);
    })
  }

  loadCss(type) {
    var link = document.createElement('link');
    link.setAttribute('rel', 'stylesheet');
    link.setAttribute('type', 'text/css');
    link.setAttribute('href', `styles/css/${type}.css`);
    document.getElementsByTagName('head')[0].appendChild(link);
  }

  getScore(team) {
    switch(this.sport) {
      case "NHL":
      case "NBA":
        return team.score;
      case "MLB":
        return team.linescoreTotals.runs;
      case "NFL":
        return "TODO";
    }
  }

  renderTemplate(type) {
    this.loadCss(type);

    window.document.body.innerHTML = getTemplate(type)
    window.document.body.style.backgroundImage = `url('./images/${this.data.config.backgroundImage}')`
    window.document.querySelector("#bannerContainer > img").src = `./images/${this.data.config.bannerImage}`

    if (type === 'countdown') {

      window.document.body.style.backgroundImage = `url('./images/${this.data.config.backgroundImage}')`
      window.document.querySelector("#bannerContainer > img").src = `./images/${this.data.config.bannerImage}`
      const teamOne = window.document.getElementById("js_teamOne"); //data.teams[0].nickname
      const teamTwo = window.document.getElementById("js_teamTwo"); //data.teams[1].nickname
      const venue   = window.document.getElementById("js_venue");   //data.venue.name

      teamOne.innerText = `${this.data.teams[0].location.toUpperCase()} ${this.data.teams[0].nickname.toUpperCase()}`;
      teamTwo.innerText = `${this.data.teams[1].location.toUpperCase()} ${this.data.teams[1].nickname.toUpperCase()}`;
      venue.innerText = this.data.venue.name.toUpperCase();
      updateTimer(this.data.startDate[1])

    } else if (type === 'final') {

      const teamOneName = window.document.getElementById("js_teamOneName"); //data.teams[0].nickname
      const teamTwoName = window.document.getElementById("js_teamTwoName"); //data.teams[1].nickname
      const teamOneScore = window.document.getElementById("js_teamOneScore"); //data.teams[0].nickScore
      const teamTwoScore = window.document.getElementById("js_teamTwoScore"); //data.teams[1].nickScore
      const venue   = window.document.getElementById("js_venue");   //data.venue.name
      const current = window.document.getElementById("js_period"); //data.eventStatus.inning || data.eventStatus.period

      teamOneName.innerText = `${this.data.teams[0].location.toUpperCase()} ${this.data.teams[0].nickname.toUpperCase()}`;
      teamTwoName.innerText = `${this.data.teams[1].location.toUpperCase()} ${this.data.teams[1].nickname.toUpperCase()}`;
      teamOneScore.innerText = this.getScore(this.data.teams[0])
      teamTwoScore.innerText = this.getScore(this.data.teams[1])

      venue.innerHTML = this.data.venue.name.toUpperCase();
      const period = this.data.eventStatus.inning ? `${this.data.eventStatus.inningDivision.toUpperCase()} ${formatPeriod(String(this.data.eventStatus.inning))}` : formatPeriod(String(this.data.eventStatus.period));
      current.innerText = period;
    }

    else if (type === 'liveScore') {
      console.log(this.data)
      const teamOneName = window.document.getElementById("js_teamOneName"); //data.teams[0].nickname
      const teamTwoName = window.document.getElementById("js_teamTwoName"); //data.teams[1].nickname
      const teamOneScore = window.document.getElementById("js_teamOneScore"); //data.teams[0].nickScore
      const teamTwoScore = window.document.getElementById("js_teamTwoScore"); //data.teams[1].nickScore
      const venue   = window.document.getElementById("js_venue");   //data.venue.name
      const current = window.document.getElementById("js_period"); //data.eventStatus.inning || data.eventStatus.period

      teamOneName.innerText = `${this.data.teams[0].location.toUpperCase()} ${this.data.teams[0].nickname.toUpperCase()}`;
      teamTwoName.innerText = `${this.data.teams[1].location.toUpperCase()} ${this.data.teams[1].nickname.toUpperCase()}`;


      teamOneScore.innerText = this.getScore(this.data.teams[0])
      teamTwoScore.innerText = this.getScore(this.data.teams[1])

      venue.innerHTML = this.data.venue.name.toUpperCase();
      const period = this.data.eventStatus.inning ? `${this.data.eventStatus.inningDivision.toUpperCase()} ${formatPeriod(String(this.data.eventStatus.inning))}` : formatPeriod(String(this.data.eventStatus.period));
      current.innerText = period;
    }

    else if (type === 'standings') {
      for (var i = 0; i < 5; i++) {
        const team = this.data.teams[i];

        window.document.querySelectorAll("#teamInfo > div")[i].querySelector("#js_teamName").innerText = `${team.location} ${team.nickname}`;
        window.document.querySelectorAll("#teamInfo > div")[i].querySelector("#js_teamRecord").innerText = `${team.record.wins} W - ${team.record.losses} L`;
      }
    }
  }

  setData(data) {
    this.data = data[0];
  }

  /**
   * Render the placeholder or the main view.
   *
   * Every time the app receives a 'hidden' event this method will get called.
   *
   */

  render() {
    this.sport = this.getSport();
    this.getTeamId(this.sport)
    .then(teamId => {
      const url = this.getUrl(teamId, this.sport);
      this.jsonpFetchPromise(url)
      .then(res => {
        const events = res.apiResults[0].league.season.eventType[0].events;
        const variations = Object.keys(GLOBAL_VARS.variations)
          .filter(v => GLOBAL_VARS.variations[v].enabled === true)
          .sort((a,b) => GLOBAL_VARS.variations[a].priority > GLOBAL_VARS.variations[b].priority)

        for (var i = 0; i < variations.length; i++) {
          const event = events.find(event => (this.statsApiStatusMap[variations[i]].indexOf(event.eventStatus.eventStatusId)) > -1);
          if (event) {
            this.data = Object.assign(event, this.data);
            this.renderTemplate(variations[i]);
            return;
          }
        }        

        this.renderCurrentStandingsFallback();
      })
      .catch(err => {
        console.log('error, falling back to current standings template: ', err);
        this.renderCurrentStandingsFallback();
      })
    })
    .catch(err => {
      console.log('Error during rendering process, check it: ', err)
    })

    if (!window.document.getElementById(GLOBAL_VARS.placeholderID)) {
      this.placeholder.render();
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
    this.placeholder.hide();
  }
}

module.exports = View;
