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
  sports: {
    MLB: { enabled: false, teams: [] },
    NBA: { enabled: true, teams: [] },
    NHL: { enabled: true, teams: [] },
    NFL: { enabled: false, teams: [] }
  },
  variations: {
    liveScore: {
      enabled: true,
      backgroundImage: 'liveScore-background.png'
    }, 
    finalScore: {
      enabled: true,
      backgroundImage: 'finalScore-background.png'
    }, 
    countdown: {
      enabled: true,
      backgroundImage: 'countdown-background.png'
    },
    // currentStandings: true // Lowest priority.
  },

  // Credentials
  statsApiCreds: {
    MLB: {
      key:"fz4xufyakejkdf9g3f3pssa2",
      secret: "C2ugTnH649"
    },
    NFL: {
      key:"uxg4k9fhuy7ux9bh8kvzzfhj",
      secret: "7wC3EJxM8X"
    },
    NBA: {
      key:"98ja97ezdv9q9ukuy4ffve62",
      secret: "UH5Jr5DVnB"
    },
    NHL: {
      key:"tvf5na4ds49vb5jppu6uuk6e",
      secret: "UE85hprB2w"
    }
  }
};
