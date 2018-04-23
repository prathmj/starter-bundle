/********************************************************/
/*------GLOBAL_VARS-------------------------------------*/
/* These variables can be accessed anywhere in the      */
/* application using the GLOBAL_VARS object.            */
/* NOTE: If not using SILO data, set datasetId to null. */
/********************************************************/

module.exports = {
  appName: JSON.stringify(require('./package.json').name),
  campaign: 'LinkNYC Starter Bundle',
  datasetID: 'com.intersection.linknyc.locationdata',
  logglyToken: '__replace__',
  logglyUsername: '__replace__',
  logglyPassword: '__replace__',
  logglyTag: '__replace__',
  logglySubdomain: '__replace__',
  placeholderID: 'placeholder',
  images: ['images/avengers1.jpg', 'images/avengers2.jpg', 'images/avengers3.jpg', 'images/avengers4.jpg', 'images/avengers5.jpg'],
  timezone: 'America/New_York',
  film: 'A Quiet Place' //"Avengers: Infinity War"
};
