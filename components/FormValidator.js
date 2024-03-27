export default class FormValidator {
  constructor(options, formEl) {
    this._options = options;
    this._formEl = formEl;
  }

  _showInputError(inputEl) {
    this._errorEl = this._formEl.querySelector(`#${inputEl.id}-error`);
    inputEl.classList.add(this._options.inputErrorClass);

    this._errorEl.textContent = this._inputEl.validationMessage;
    this._errorEl.classList.add(this._options.errorClass);
  }
  _hideInputError(inputEl) {
    this._errorEl = this._formEl.querySelector(`#${inputEl.id}-error`);
    this._inputEl.classList.remove(this._options.inputErrorClass);
    this._errorEl.textContent = " ";
    this._errorEl.classList.remove(this._options.errorClass);
  }

  _checkInputValidity(inputEl) {
    if (!inputEl.validity.valid) {
      showInputError(this._formEl, this._inputEl, this._options);
    } else {
      hideInputError(this._formEl, this._inputEl, this._options);
    }
  }
  _toggleButtonState(inputEls, submitButton) {
    let isInValid = false;
    console.log("hello tt");
    this._inputEls.forEach((inputEl) => {
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

  _setEventListeners() {
    this._inputEls = Array.from(
      this._formEl.querySelectorAll(this._options.inputSelector)
    );
    this._submitButton = this._formEl.querySelector(
      this._options.submitButtonSelector
    );
    this._inputEls.forEach((inputEl) => {
      inputEl.addEventListener("input", (e) => {
        checkInputValidity(this._formEl, inputEl, this._options);
        toggleButtonState(this._inputEls, this._submitButton, this._options);
      });
    });
  }
  _enableValidation() {
    const formEls = Array.from(
      document.querySelectorAll(this._options.formSelector)
    );
    formEls.forEach((formEl) => {
      formEl.addEventListener("submit", (e) => {
        e.preventDefault();
      });
      setEventListeners(formEl, this._options);
    });
  }
}
