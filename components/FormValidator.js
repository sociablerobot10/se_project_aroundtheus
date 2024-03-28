export default class FormValidator {
  constructor(options, formEl) {
    this._options = options;
    this._formEl = formEl;
  }

  _showInputError(inputEl) {
    this._errorEl = this._formEl.querySelector(`#${inputEl.id}-error`);
    inputEl.classList.add(this._options.inputErrorClass);

    this._errorEl.textContent = inputEl.validationMessage;
    this._errorEl.classList.add(this._options.errorClass);
  }
  _hideInputError(inputEl) {
    this._errorEl = this._formEl.querySelector(`#${inputEl.id}-error`);
    inputEl.classList.remove(this._options.inputErrorClass);
    this._errorEl.textContent = " ";
    this._errorEl.classList.remove(this._options.errorClass);
  }

  _checkInputValidity(inputEl) {
    if (!inputEl.validity.valid) {
      this._showInputError(inputEl);
    } else {
      this._hideInputError(inputEl);
    }
  }
  toggleButtonState(inputEls, submitButton) {
    let isInValid = false;
    console.log("hello tt");
    inputEls.forEach((inputEl) => {
      if (!inputEl.validity.valid) {
        isInValid = true;
      }
    });
    if (isInValid) {
      submitButton.classList.add(this._options.inactiveButtonClass);
      submitButton.disabled = true;
    } else {
      submitButton.classList.remove(this._options.inactiveButtonClass);
      submitButton.disabled = false;
    }
  }

  _setEventListeners(formEl, options) {
    this._inputEls = Array.from(
      this._formEl.querySelectorAll(this._options.inputSelector)
    );
    this._submitButton = this._formEl.querySelector(
      this._options.submitButtonSelector
    );
    this._inputEls.forEach((inputEl) => {
      inputEl.addEventListener("input", (e) => {
        this._checkInputValidity(inputEl);
        this.toggleButtonState(this._inputEls, this._submitButton);
      });
    });
  }
  enableValidation(options) {
    this.formEls = Array.from(
      document.querySelectorAll(this._options.formSelector)
    );
    this.formEls.forEach((formEl) => {
      formEl.addEventListener("submit", (e) => {
        e.preventDefault();
      });
      this._setEventListeners(formEl, this._options);
    });
  }
}
