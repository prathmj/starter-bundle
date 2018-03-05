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
  sport: ["mlb"], //  MLB, NBA, NFL. One or more, leave blank for all.
  team: ["miami"], // One or more, picks random team if blank. Sport must be specified.
  variations: {
    liveScore: true, // If available. If team is not specified, picks a random live game. Highest priority.
    finalScore: true, // Show final score, only available if there was a game the same day. 2nd priority.
    countdown: true, // If there is a game within the next day for the specified team(s), display a countdown. 3rd priority.
    currentStandings: true // Lowest priority.
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
