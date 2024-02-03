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
let modalElement = document.querySelector("#edit-modal");
let editButton = document.querySelector(".bio__edit-button");
let saveButton = document.querySelector(".modal__button");
let formElement = document.querySelector(".modal__form");
let nameInputField = document.querySelector(".modal__input-name");
let descriptionInputField = document.querySelector(".modal__input-description");
let bioNameField = document.querySelector(".bio__name");
let bioDescriptionField = document.querySelector(".bio__description");
nameInputField.value = bioNameField.innerText;
descriptionInputField.value = bioDescriptionField.innerText;
let cardList = document.querySelector(".cards__list");

function closeModal() {
  modalElement.classList.remove("modal_opened");
}
formElement.addEventListener("submit", function (e) {
  e.preventDefault();
  bioNameField.innerText = nameInputField.value;
  bioDescriptionField.innerText = descriptionInputField.value;
  closeModal();
});

closeButton.addEventListener("click", closeModal);

editButton.addEventListener("click", function () {
  modalElement.classList.add("modal_opened");
});

function createCard(data) {
  let cardElement = cardTemplate.cloneNode(true);
  let cardElementTitle = cardElement.querySelector(".card__location");
  let cardElementImage = cardElement.querySelector(".card__image");
  cardElementImage.src = data.link;
  cardElementImage.alt = data.name;
  cardElementTitle.textContent = data.name;
  return cardElement;
}
function addCardToPage(cardElement) {
  cardList.append(cardElement);
}
for (data of initialCards) {
  let cardEl = createCard(data);
  cardList.append(cardEl);
}
