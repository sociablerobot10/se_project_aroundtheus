import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor({ popUpSelector, handleFormSubmit, loadingButtonText }) {
    super({ popUpSelector });
    this._loadingButtonText = loadingButtonText;
    this._popForm = this._popElement.querySelector(".modal__form");
    this._handleFormSubmit = handleFormSubmit;
    this._submitButton = this._popForm.querySelector(".modal__button");
    this._buttonText = this._submitButton.textContent;
    //this._saveButton = this._popElement.querySelector(".modal__button");
    this._inputEls = Array.from(
      this._popForm.querySelectorAll(".modal__input")
    );
  }
  _getInputValues() {
    const inputElsObj = {};
    this._inputEls.forEach((input) => {
      const key = input.name;
      const value = input.value;
      inputElsObj[key] = value;
    });
    return inputElsObj;
    //  select all input elements from dom and return an object with the name of the input and it's value upon submission
  }
  setInputValues(arr) {
    for (let i = 0; i < this._inputEls.length; i++) {
      this._inputEls[i].value = arr[i];
    }
  }
  setEventListeners() {
    this._popForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const inputValues = this._getInputValues();
      this._handleFormSubmit(inputValues);
    });
  }
  showLoading() {
    this._submitButton.textContent = this._loadingButtonText;
  }

  hideLoading() {
    this._submitButton.textContent = this._buttonText;
  }
  close() {
    this._popForm.reset();
    super.close();
  }
}
