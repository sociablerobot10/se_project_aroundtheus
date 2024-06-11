import Popup from "./Popup.js";

export default class PopupWithConfirmation extends Popup {
  constructor({ popUpSelector, handleFormSubmit, loadingButtonText }) {
    super({ popUpSelector });
    this._loadingButtonText = loadingButtonText;
    this._popForm = this._popElement.querySelector(".modal__form");
    this._submitButton = this._popForm.querySelector(".modal__button");
    this._buttonText = this._submitButton.textContent;
    this._handleFormSubmit = handleFormSubmit;
  }

  setSubmitHandler(handler) {
    this._handleFormSubmit = handler;
  }

  setEventListeners() {
    this._popForm.addEventListener("submit", (e) => {
      e.preventDefault();
      this._handleFormSubmit();
    });
  }
  showLoading() {
    this._submitButton.textContent = this._loadingButtonText;
  }

  hideLoading() {
    this._submitButton.textContent = this._buttonText;
  }
}
