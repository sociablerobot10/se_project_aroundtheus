import Popup from "./Popup.js";

export default class PopupWithConfirmation extends Popup {
  constructor({ popUpSelector, handleFormSubmit }) {
    super({ popUpSelector });
    this._popForm = this._popElement.querySelector(".modal__form");
    this._handleFormSubmit = handleFormSubmit;
  }

  setSubmitHandler(handler) {
    this._handleFormSubmit = handler;
  }

  setEventListeners() {
    this._popForm.addEventListener("submit", (e) => {
      e.preventDefault();
      this._handleFormSubmit();
      this.close();
    });
  }
}
