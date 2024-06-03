import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor({ popUpSelector, handleFormSubmit }) {
    super({ popUpSelector });
    this._popForm = this._popElement.querySelector(".modal__form");
    this._handleFormSubmit = handleFormSubmit;
    this._saveButton = this._popElement.querySelector(".modal__button");
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
    this._saveButton.addEventListener("click", () => {
      const inputValues = this._getInputValues();
      this._handleFormSubmit(inputValues);
      console.log(inputValues["img-link"]);
    });
    this._popForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const inputValues = this._getInputValues();
      this._handleFormSubmit(inputValues);
      this.close();
    });
  }

  close() {
    this._popForm.reset();
    super.close();
  }
}
