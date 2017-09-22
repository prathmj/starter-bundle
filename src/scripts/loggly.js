/* eslint-disable*/
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

  _setParams(method, args) {
    let { lifecycle_id, lifecycles_without_reset, device_id } = this;
    this.params = Object.assign({
      method,
      lifecycle_id,
      lifecycles_without_reset,
      device_id
    }, args)
  }

  setDevice(id) {
    this.device_id = id;
  }

  log(method, args) {
    let _method = typeof method === 'object' ? 'custom' : method;
    switch (_method) {
      case 'custom':
        this.params = method;
        break;
      case 'setData' || 'render':
        this.lifecycle_id = Date.now();
        this._setParams(method, args)
        break;
      case 'updateView':
        this.lifecycles_without_reset++;
        this._setParams(method, args)
        break;
      default:
        return;
    }

    this.loggly.log(this.params, (err) => {
      if (err) {
        Logger.log(err)
      }
    })    
  }
}

export default Loggly;
