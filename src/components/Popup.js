/* The Popup class is a generic class that opens and closes a popup. Create it according to the following requirements:

    The constructor accepts a single parameter, the popup selector.
    It has public methods called open() and close() to open and close the popup.
    The open() method should be called in the preexisting event handlers in index.js.
    It has a private method named _handleEscClose() that stores the logic for closing
    the popup by pressing the Esc key.
    It has a public method named setEventListeners() that adds a click event listener to the close icon of the popup. The modal window should also close when users click on the shaded area around the form.

You won’t instantiate your Popup class directly in index.js; instead, you’ll instantiate its children classes, as described below. */

export default class Popup {
  constructor({ popUpSelector }) {
    this._popElement = document.querySelector(popUpSelector);
  }
  open() {
    this._popElement.classList.add("modal_opened");
    console.log(this._popElement);
    this._popElement.addEventListener("keydown", this._handleEscClose);
    this._popElement.addEventListener("click", this._closeWithClick);
  }
  close() {
    this._popElement.classList.remove("modal_opened");
    document.removeEventListener("click", this._closeWithClick);
    document.removeEventListener("keydown", this._handleEscClose);
  }
  _handleEscClose = (event) => {
    if (event.key === "Escape") {
      this.close();
    }
  };
  _closeWithClick = (event) => {
    if (event.type === "mousedown") {
      this.close();
    }
  };

  setEventListeners() {
    const editCloseButton = editModalElement.querySelector("button");
    const addCloseButton = addModalElement.querySelector("button");
    const editProfileButton =
      this._popElement.querySelector(".bio__edit-button");
    const addProfileButton = this._popElement.querySelector(".bio__add-button");
    editCloseButton.addEventListener("click", function () {
      this.close();
    });
    addProfileButton.addEventListener("click", function () {
      this.open();

      addModalValidator.toggleButtonState();
    });

    addCloseButton.addEventListener("click", function () {
      this.close();
    });
  }
}

/*
    this._popElement.addEventListener("click", open);
    this._popElement.addEventListener("click", close);
    this._popElement.addEventListener("click", _handleEscClose);
  } */
