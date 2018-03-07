import View from './view.js';
import Data from './cortex/data.js';
import Simulator from './cortex/simulator.js';
import Logger from './cortex/logger.js';
import {READY_EVENT} from './cortex/events.js';

/**
 * Starts the app in simulation mode.
 *
 * This function will get called only when the NODE_ENV variable is set to
 * 'development'.
 *
 * In simulation mode, the app is expected to run on non-production environments.
 * The Simulator will dispatch all necessary events. It will also
 * periodically dispatch the data stored in './test-data.js'. You can update
 * the event dispatch times in './data.js'.
 *
 */
function simulateCortexEnvironment() {
  const simulator = new Simulator();
  simulator.run();
}

/**
 * App starting point.
 *
 * Creates the View and Data instances. Enters the simulation mode in dev
 * environment.
 *
 */
function main() {
  const view = new View();
  view.render();

  window.dataPassback = (cb) => {
    cb(view.publicDataPassback())
  }

  window.addEventListener(READY_EVENT, () => {
    Logger.log('Received the cortex-ready event.');

    const data = new Data(GLOBAL_VARS.datasetID, view);
    data.init();
  });

  if (process.env.NODE_ENV === 'development') {
    simulateCortexEnvironment();
  }
}

module.exports = main();
