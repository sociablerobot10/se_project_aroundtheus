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

let cardTemplate =
  document.querySelector("#card-template").content.firstElementChild;

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

function closeModal() {
  modalElement.setAttribute("style", "display: none");
}
saveButton.addEventListener("click", function (e) {
  bioNameField.innerText = nameInputField.value;
  bioDescriptionField.innerText = descriptionInputField.value;
  closeModal();
  e.preventDefault();
});

closeButton.addEventListener("click", closeModal);
editButton.addEventListener("click", function () {
  modalElement.setAttribute("style", "display: flex");
});

function getCardElement(data) {
  let cardElementTitle = document.querySelector(".card__location");
  let cardElementImage = document.querySelector(".card__image");
  let cardElement = cardTemplate.cloneNode(true);
  console.log(cardElementTitle);
}
getCardElement(initialCards);
/*Declare a getCardElement() function with one parameter named data. You’ll be passing objects of the array to it. The function should:

     clone the template element with all its content and store it in a cardElement variable
    access the card title and image and store them in variables
    set the path to the image to the link field of the object
    set the image alt text to the name field of the object
    set the card title to the name field of the object, too
    return the ready HTML element with the filled-in data */
