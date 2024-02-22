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
let editModalElement = document.querySelector("#edit-modal");
let addModalElement = document.querySelector("#add-modal");
let editButton = document.querySelector(".bio__edit-button");
let addButton = document.querySelector(".bio__add-button");
let saveButton = document.querySelector(".modal__button");
let formElement = document.querySelector(".modal__form");
let nameInputField = document.querySelector(".modal__input-name");
let descriptionInputField = document.querySelector(".modal__input-description");
let titleInputField = document.querySelector(".modal__input-title");
let linkInputField = document.querySelector(".modal__input-description");
let bioNameField = document.querySelector(".bio__name");
let bioDescriptionField = document.querySelector(".bio__description");
let cardList = document.querySelector(".cards__list");
let addCloseButton = addModalElement.querySelector("button");
let editCloseButton = editModalElement.querySelector("button");
console.log(editCloseButton);
let editFormElement = editModalElement.querySelector(".modal__form");
let addFormElement = addModalElement.querySelector(".modal__form");
console.log("addCloseButton", addCloseButton);
function closeModal(modal) {
  modal.classList.remove("modal_opened");
}
/*formElement.addEventListener("submit", function (e) {
  e.preventDefault();
  bioNameField.innerText = nameInputField.value;
  bioDescriptionField.innerText = descriptionInputField.value;
  closeModal();
}); */
editFormElement.addEventListener("submit", function (e) {
  e.preventDefault();
  bioNameField.innerText = nameInputField.value;
  bioDescriptionField.innerText = descriptionInputField.value;
  closeModal(editModalElement);
});
addFormElement.addEventListener("submit", function (e) {
  e.preventDefault();

  closeModal(addModalElement);
});
editCloseButton.addEventListener("click", function () {
  closeModal(editModalElement);
});
addCloseButton.addEventListener("click", function () {
  closeModal(addModalElement);
});
editButton.addEventListener("click", function () {
  nameInputField.value = bioNameField.innerText;
  descriptionInputField.value = bioDescriptionField.innerText;
  editModalElement.classList.add("modal_opened");
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

/* for (data of initialCards) {
  let cardEl = createCard(data);
  cardList.append(cardEl);
} */

initialCards.forEach(function (data) {
  let cardEl = createCard(data);
  cardList.append(cardEl);
});
addButton.addEventListener("click", function () {
  let nameOfPlace = titleInputFieldInputField.value;
  let url = linkInputFieldInputField.value;
  let createdCard = { name: nameOfPlace, link: url };
  initialCards.unshift(createdCard);
  console.log(initialCards);
  addModalElement.classList.add("modal_opened");
});
