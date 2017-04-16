/* global GLOBAL_VARS */
/* eslint-disable max-len */

class Logger {
  static log(msg, ...args) {
    if (args && args.length > 0) {
      console.log(`${GLOBAL_VARS.appName}-${new Date().getTime()}: ${msg}`, ...args);
    } else {
      console.log(`${GLOBAL_VARS.appName}-${new Date().getTime()}: ${msg}`);
    }
  }
}

module.exports = Logger;
