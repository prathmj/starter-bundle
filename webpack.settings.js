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
  film: 'A Quiet Place', //"Avengers: Infinity War"
  creativeAttributes: [
    {
      image: 'images/avengers1.jpg',
      color: '#4FB844',
      lightColor: '#90F386',
      placeholder: 'images/placeholder1.jpg'
    },
    {
      image: 'images/avengers2.jpg',
      color: '#4481BD',
      lightColor: '#7DB9F3',
      placeholder: 'images/placeholder2.jpg'
    },
    {
      image: 'images/avengers3.jpg',
      color: '#F8B62C',
      lightColor: '#FAD382',
      placeholder: 'images/placeholder3.jpg'
    },
    {
      image: 'images/avengers4.jpg',
      color: '#976EC0',
      lightColor: '#CCAAED',
      placeholder: 'images/placeholder4.jpg'
    },
    {
      image: 'images/avengers5.jpg',
      color: '#EE392B',
      lightColor: '#F3877D',
      placeholder: 'images/placeholder5.jpg'
    }
  ]
};
