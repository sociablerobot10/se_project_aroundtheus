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
  _checkFormValidity = () =>
    this._inputEls.every((input) => input.validity.valid);

  toggleButtonState() {
    // let isInValid = false;
    // console.log("hello tt");
    // this._inputEls.forEach((inputEl) => {
    //   if (!inputEl.validity.valid) {
    //     isInValid = true;
    //   }
    // });

    const isFormValid = this._checkFormValidity();

    if (!isFormValid) {
      this._submitButton.classList.add(this._options.inactiveButtonClass);
      this._submitButton.disabled = true;
    } else {
      this._submitButton.classList.remove(this._options.inactiveButtonClass);
      this._submitButton.disabled = false;
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
        this._checkInputValidity(inputEl);
        this.toggleButtonState();
      });
    });
  }
  enableValidation() {
    //     this.formEls = Array.from(
    //       document.querySelectorAll(this._options.formSelector)
    //     );
    //     this.formEls.forEach((formEl) => {
    //       formEl.addEventListener("submit", (e) => {
    //         e.preventDefault();
    //       });
    //       this._setEventListeners(formEl, this._options);
    //     });
    //   }
    //

    this._formEl.addEventListener("submit", (e) => {
      e.preventDefault();
    });
    this._setEventListeners();
  }
}
