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

Create one instance of this class
in index.js and call its parent’s setEventListeners() method.cardElementImage.src = data.link;
//   cardElementImage.alt = data.name;
//   cardElementTitle.textContent = data.name;




export default class PopupWithImage extends Popup {
  constructor({ popUpSelector, handleFormSubmit }) {
    super({ popUpSelector });
    this._popForm = this._popElement.querySelector(".modal__form");
    this._handleFormSubmit = handleFormSubmit;
    this._inputEls = Array.from(
      this._popForm.querySelectorAll(".modal__input")
    );
  }
  open(data) {
     
    // set the image's src and alt
    // set the caption's textContent
    super.open();
  }
}
