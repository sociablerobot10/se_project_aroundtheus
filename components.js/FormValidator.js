class FormValidator {
  constructor(options, formEl) {
    this._options = options;
    this._formEl = formEl;
  }

  _showInputError(inputEl) {
    const errorEl = this._formEl.querySelector(`#${inputEl.id}-error`);
    inputEl.classList.add(this._options.inputErrorClass);

    errorEl.textContent = inputEl.validationMessage;
    errorEl.classList.add(this._options.errorClass);
  }
  _hideInputError(inputEl) {
    const errorEl = this._formEl.querySelector(`#${inputEl.id}-error`);
    inputEl.classList.remove(this._options.inputErrorClass);
    errorEl.textContent = " ";
    errorEl.classList.remove(this._options.errorClass);
  }

  _checkInputValidity(inputEl) {
    if (!inputEl.validity.valid) {
      showInputError(this._formEl, inputEl, this._options);
    } else {
      hideInputError(this._formEl, inputEl, this._options);
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

  setEventListeners(formEl, options) {
    const inputEls = Array.from(
      this._formEl.querySelectorAll(this._options.inputSelector)
    );
    const submitButton = this._formEl.querySelector(
      this._options.submitButtonSelector
    );
    inputEls.forEach((inputEl) => {
      inputEl.addEventListener("input", (e) => {
        checkInputValidity(this._formEl, inputEl, this._options);
        toggleButtonState(inputEls, submitButton, this._options);
      });
    });
  }
  enableValidation() {
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

  _setEventListeners() {
    // ...
    this._cardImageElement.addEventListener("click", () => {
      this._handleImageClick(this);
    });
  }
}
