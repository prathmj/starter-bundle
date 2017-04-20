import Logger from './logger.js';

class Placeholder {
  constructor() {
    this.hidden = false;
  }

  /**
   * Display a placeholder view.
   *
   * This method will get called when the app starts initially. It is expected
   * to render some meaningful view without relying on dynamic data.
   *
   * In this demo, we simply display a fullscreen placeholder image.
   *
   * The view generated will get hidden once the data arrives using the
   * Placeholder.hide() method.
   *
   * TODO: Implement this method according to your needs.
   */
  render() {
    Logger.log('Rendering the placeholder image.');

    const img = new window.Image();
    img.src = "images/placeholder.jpg";
    img.onerror = e => {
      console.error("Failed to load the placeholder image: ", e);
    };

    if (!this.placeholderDiv) {
      const div = window.document.createElement('div');
      div.id = GLOBAL_VARS.placeholderID;
      div.className = 'placeholder';
      div.appendChild(img);

      window.document.body.appendChild(div);
      this.placeholderDiv = window.document.getElementById(GLOBAL_VARS.placeholderID);
    }else if (this.placeholderDiv) {
      this.placeholderDiv.className = 'placeholder';
    }
  }

  /**
   * Hide the placeholder view.
   *
   * This method gets called when the app receives data and the placeholder
   * is no longer needed.
   *
   * TODO: Implement this method according to your needs.
   */
  hide() {
    if (this.hidden) {
      // View is already hidden, no need to update the DOM again.
      return;
    }

    Logger.log('Hiding the placeholder image.');
    this.placeholderDiv.className = 'placeholder invisible';
    this.hidden = true;
  }

  show() {
    if (!this.hidden) return;

    Logger.log('Showing the placeholder image.');
    this.placeholderDiv.className = 'placeholder';
    this.hidden = false;
  }
}

module.exports = Placeholder;
