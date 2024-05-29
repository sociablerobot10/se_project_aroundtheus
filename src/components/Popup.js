
export default class Popup {
  constructor({ popUpSelector }) {
    this._popElement = document.querySelector(popUpSelector);
    this._closeButton = this._popElement.querySelector(".modal__close");
  }
  open() {
    this._popElement.classList.add("modal_opened");
    console.log(this._popElement);
    this._popElement.addEventListener("keydown", this._handleEscClose);
    this._popElement.addEventListener("click", this._closeWithClick);
  }
  close() {
    this._popElement.classList.remove("modal_opened");
    console.log("close");
    document.addEventListener("click", this._closeWithClick);
    document.addEventListener("keydown", this._handleEscClose);
    console.log("close");
  }
  _handleEscClose = (event) => {
    if (event.key === "Escape") {
      this.close();
    }
  };
  _closeWithClick = (event) => {
    if (
      event.target.classList.contains("modal__close") ||
      event.target.classList.contains("modal")
    ) {
      this.close();
    }
  };

  setEventListeners() {
    // const editCloseButton = editModalElement.querySelector("button");
    // const addCloseButton = addModalElement.querySelector("button");
    /*   this._popElement.addEventListener("click", (event) => {
      this._closeWithClick(event);
    });
    this._popElement.addEventListener("click", (event) => {
      this._handleEscClose(event);
    }); */

    this._closeButton.addEventListener("click", () => {
      this.close();
    });
    // this._closeButton.addEventListener("click", function () {

    //   addModalValidator.toggleButtonState();
    // })
  }
}

/*
    this._popElement.addEventListener("click", open);
    this._popElement.addEventListener("click", close);
    this._popElement.addEventListener("click", _handleEscClose);
  } */
