import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popUpSelector) {
    // #modal-image
    super({ popUpSelector });
    this._popUpSelector = popUpSelector;
    this.popUpImage = this._popElement.querySelector(".modal__full-img");
    this.popUpCaption = this._popElement.querySelector(".modal__location");
    //element that holds the image
    //element that holds the caption
  }
  open(name, link) {
    this.popUpImage.src = link;
    this.popUpCaption.textContent = name;
    this.popUpImage.alt = name;
    super.open();
  }
}
