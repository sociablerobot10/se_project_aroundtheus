import Popup from "./Popup.js";
/* The PopupWithImage class should
be a child class of Popup.

This class will need to override
the parent’s open() method. The open() method of the
 PopupWithImage class will need to accept the name
 and link of the card as arguments and
 add an image to
 the popup and the corresponding image src
  attribute along with a caption for the image.
  This method should be called in your image click handler in index.js.

Here’s an example of what the method declaration might look
 like:
 */
// data should be an object containing the name and link

//   cardElementImage.alt = data.name;
//   cardElementTitle.textContent = data.name;

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
