const initialCards = [
  {
    name: "Yosemite Valley",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/yosemite.jpg",
  },
  {
    name: "Lake Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lake-louise.jpg",
  },
  {
    name: "Bald Mountains",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/latemar.jpg",
  },
  {
    name: "Vanoise National Park",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lago.jpg",
  },
];
let closeButton = document.querySelector(".modal__close");
let modalElement = document.querySelector(".modal_opened");
let editButton = document.querySelector(".bio__edit-button");
let saveButton = document.querySelector(".modal__button");
let nameInputField = document.querySelector(".modal__input-name");
let descriptionInputField = document.querySelector(".modal__input-description");
let bioNameField = document.querySelector(".bio__name");
let bioDescriptionField = document.querySelector(".bio__description");
nameInputField.value = "Jacques Cousteau";
descriptionInputField.value = "Explorer";

saveButton.addEventListener("click", function (e) {
  bioNameField.innerText = nameInputField.value;
  bioDescriptionField.innerText = descriptionInputField.value;
  e.preventDefault();
  modalElement.setAttribute("style", "display: none");
});

closeButton.addEventListener("click", function () {
  modalElement.setAttribute("style", "display: none");
});
editButton.addEventListener("click", function () {
  modalElement.setAttribute("style", "display: flex");
});
