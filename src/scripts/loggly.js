import Logger from './cortex/logger.js';
import loggly from 'loggly';

class Loggly {
  constructor() {
    this.lifecycles_without_reset = 0;
    this.lifecycle_id = Date.now();
    this.device_id = 'unknown';

    this.loggly = loggly.createClient({
      token: GLOBAL_VARS.logglyToken,
      subdomain: GLOBAL_VARS.logglySubdomain,
      auth: {
        username: GLOBAL_VARS.logglyUsernames,
        password: GLOBAL_VARS.logglyPasswords
      },
      json: true,
      tags: [GLOBAL_VARS.logglyTag]
    });
  }

  setDevice(id) {
    this.device_id = id;
  }

  log(method, args) {
    if (typeof method === 'object') {
      this.params = method;
    } else {
      if (method === 'setData' || method === 'render') {
        this.lifecycle_id = Date.now();
      } else if (method === 'updateView') {
      this.lifecycles_without_reset++;
    }
      let { lifecycle_id, lifecycles_without_reset, device_id } = this;
      this.params = {
        method,
        lifecycle_id,
        lifecycles_without_reset,
        device_id,
        ...args
      }
    }

    this.loggly.log(this.params, (err) => {
      if (err) {
        Logger.log(err)
      }
    })    
  }
}

export default Loggly;
