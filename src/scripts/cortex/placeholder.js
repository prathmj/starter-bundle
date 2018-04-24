import Logger from './logger.js';

class Placeholder {
  constructor() {
    this.hidden = false;
    this.placeholderID = GLOBAL_VARS.placeholderID;
    this._preRender()
    this.imagePath = "images/placeholder1.jpg";
    // this.setPlaceholderImage(this.imagePath)
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
   */
  render() {
    Logger.log('Rendering the placeholder image.');

    if (!this.img){
      this.img = this._setDefaultImg(this.imagePath)
    }
    this.img.onerror = e => {
      console.error("Failed to load the placeholder image: ", e);
    };

    if (!this.placeholderDiv){
      const div = window.document.createElement('div');
      div.id = this.placeholderID;
      div.innerHTML = "";
      div.className = 'placeholder';
      window.document.body.appendChild(div);
      this.placeholderDiv = window.document.getElementById(this.placeholderID);
    }

    this.placeholderDiv.innerHTML = "";
    this.placeholderDiv.appendChild(this.img);
    this.show()
  }

  /**
   * Hide the placeholder view.
   *
   * This method gets called when the app receives data and the placeholder
   * is no longer needed.
   *
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

  _preRender() {
    this.images = [];
    GLOBAL_VARS.creativeAttributes.forEach((obj, index) => {
      const { placeholder } = obj;
      const img = new window.Image();
      img.onload = () => {
        this.images.push(img);
        if (index === 0) {
          this.setPlaceholderImage(placeholder)
        }
      }
      img.src = placeholder;
     })

  }

  setPlaceholderImage(imagePath) {
    const filteredImages = this.images.filter(img => img.src.indexOf(imagePath) > -1)
    this.img = filteredImages.length > 0 ?  filteredImages[0] : this._setDefaultImg(imagePath);
  }

  _setDefaultImg(imagePath) {
    const img = new window.Image();
    img.src = imagePath;
    return img;
  }
}

module.exports = Placeholder;
