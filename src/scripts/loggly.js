import Logger from './cortex/logger.js';
import loggly from 'loggly';

class Loggly {
  constructor() {
    this.lifecycles_without_reset = 1;
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
      this.loggly.log(method, (err) => {
        if (err) {
          Logger.log(err)
        }
      })
      return;
    }

    if (method === 'setData' || method === 'render') {
      this.lifecycle_id = Date.now();
    }
    
    let { lifecycle_id, lifecycles_without_reset, device_id } = this;
    let params = Object.assign({
      method,
      lifecycle_id,
      lifecycles_without_reset,
      device_id
    }, args)

    this.loggly.log(params, (err) => {
      if (err) {
        Logger.log(err)
      }
    })

    if (method === 'updateView') {
      this.lifecycles_without_reset++;
    }
  }
}

export default Loggly;
