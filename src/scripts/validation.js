/* const showInputError = function (formEl, inputEl, options) {
  const errorEl = formEl.querySelector(`#${inputEl.id}-error`);
  inputEl.classList.add(options.inputErrorClass);

  errorEl.textContent = inputEl.validationMessage;
  errorEl.classList.add(options.errorClass);
};
const hideInputError = function (formEl, inputEl, options) {
  const errorEl = formEl.querySelector(`#${inputEl.id}-error`);
  inputEl.classList.remove(options.inputErrorClass);
  errorEl.textContent = " ";
  errorEl.classList.remove(options.errorClass);
};

const checkInputValidity = function (formEl, inputEl, options) {
  if (!inputEl.validity.valid) {
    showInputError(formEl, inputEl, options);
    console.log("hello im hereeedfsfd");
  } else {
    hideInputError(formEl, inputEl, options);
  }
};
const toggleButtonState = function (inputEls, submitButton, options) {
  let isInValid = false;
  console.log("hello tt");
  inputEls.forEach((inputEl) => {
    if (!inputEl.validity.valid) {
      isInValid = true;
    }
  });
  if (isInValid) {
    submitButton.classList.add(options.inactiveButtonClass);
    submitButton.disabled = true;
  } else {
    submitButton.classList.remove(options.inactiveButtonClass);
    submitButton.disabled = false;
  }
};

const setEventListeners = function (formEl, options) {
  const inputEls = Array.from(formEl.querySelectorAll(options.inputSelector));
  const submitButton = formEl.querySelector(options.submitButtonSelector);
  inputEls.forEach((inputEl) => {
    inputEl.addEventListener("input", (e) => {
      checkInputValidity(formEl, inputEl, options);
      toggleButtonState(inputEls, submitButton, options);
    });
  });
};
const enableValidation = function (options) {
  const formEls = Array.from(document.querySelectorAll(options.formSelector));
  formEls.forEach((formEl) => {
    formEl.addEventListener("submit", (e) => {
      e.preventDefault();
    });
    setEventListeners(formEl, options);
  });
};

const config = {
  formSelector: ".modal__form",
  inputSelector: ".modal__input",
  submitButtonSelector: ".modal__button",
  inactiveButtonClass: "modal__button_disabled",
  inputErrorClass: "modal__input_type_error",
  errorClass: "modal__error_visible",
};
enableValidation(config);
*/
