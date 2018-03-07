/********************************************************/
/*------GLOBAL_VARS-------------------------------------*/
/* These variables can be accessed anywhere in the      */
/* application using the GLOBAL_VARS object.            */
/* NOTE: If not using SILO data, set datasetId to null. */
/********************************************************/

module.exports = {
  appName: JSON.stringify(require('./package.json').name),
  campaign: 'Stats Creative Template',
  datasetID: '',
  logglyToken: '__replace__',
  logglyUsername: '__replace__',
  logglyPassword: '__replace__',
  logglyTag: '__replace__',
  logglySubdomain: '__replace__',
  placeholderID: 'placeholder',

  // Stats Configuration
  sport: ['mlb', 'nba', 'nhl'], //  MLB, NBA, NFL, NHL. One or more, leave blank for all.
  team: [], // One or more, picks random team if blank. Sport must be specified.
  variations: {
    liveScore: {
      active: true,
      backgroundImage: 'liveScore-background.png'
    }, 
    finalScore: {
      active: true,
      backgroundImage: 'finalScore-background.png'
    }, 
    countdown: {
      active: true,
      backgroundImage: 'countdown-background.png'
    },
    // currentStandings: true // Lowest priority.
  },
  statsApiCreds: { // Required for each sport
    mlb: {
      key:"fz4xufyakejkdf9g3f3pssa2",
      secret: "C2ugTnH649"
    },
    nfl: {
      key:"uxg4k9fhuy7ux9bh8kvzzfhj",
      secret: "7wC3EJxM8X"
    },
    nba: {
      key:"98ja97ezdv9q9ukuy4ffve62",
      secret: "UH5Jr5DVnB"
    },
    nhl: {
      key:"tvf5na4ds49vb5jppu6uuk6e",
      secret: "UE85hprB2w"
    }
  }
};
