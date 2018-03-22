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

  // Stats API Configuration
  sports: {
    MLB: { 
      enabled: false,
      teams: [],
      bannerImage: 'spriteLogo.png',
      backgroundImage: 'mlb-background.png'
    },
    NBA: {
      enabled: false,
      teams: [],
      bannerImage: 'spriteLogo.png',
      backgroundImage: 'nba-background.png'
    },
    NHL: {
      enabled: true,
      teams: [],
      bannerImage: 'spriteLogo.png',
      backgroundImage: 'nhl-background.png'
    },
    NFL: {
      enabled: false,
      teams: [],
      bannerImage: 'spriteLogo.png',
      backgroundImage: 'placeholder.png'
    }
  },

  variations: {
    liveScore:  { enabled: true, priority: 1 }, 
    finalScore: { enabled: true, priority: 2 }, 
    countdown:  { enabled: true, priority: 3 },
    // Always last priority. Sport/Conference Required. Division optional.
    standings: {  sport: 'NHL', conference: 'Eastern', division: '' }
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
