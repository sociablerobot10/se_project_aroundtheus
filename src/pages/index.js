import PopupWithForm from "../components/PopupWithForm.js";
import Card from "../components/card.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import "./index.css";
import UserInfo from "../components/UserInfo.js";
import PopupWithImage from "../components/PopupWithImage.js";
import Api from "../components/API.js";
/* const initialCards = [
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
]; */

const cardTemplate =
  document.querySelector("#card-template").content.firstElementChild;
const editModalElement = document.querySelector("#edit-modal");
const addModalElement = document.querySelector("#add-modal");
const imageModalElement = document.querySelector("#image-modal");
const editProfileButton = document.querySelector(".bio__edit-button");
const addProfileButton = document.querySelector(".bio__add-button");
const nameInputField = document.querySelector(".modal__input-name");
const descriptionInputField = document.querySelector(
  ".modal__input-description"
);
const titleInputField = document.querySelector(".modal__input-title");
const linkInputField = document.querySelector(".modal__input-link");
const bioNameField = document.querySelector(".bio__name");
const bioDescriptionField = document.querySelector(".bio__description");
const cardList = document.querySelector(".cards__list");
const addCloseButton = addModalElement.querySelector("button");
const editCloseButton = editModalElement.querySelector("button");
const editFormElement = editModalElement.querySelector(".modal__form");
const addFormElement = addModalElement.querySelector(".modal__form");
const imageCloseButton = imageModalElement.querySelector(".modal__close");
const openedPopUp = "";
/* function closeModal(modal) {
  modal.classList.remove("modal_opened");
  document.removeEventListener("click", closeWithClick);
  document.removeEventListener("keydown", closeWithEscapeKey);
}

function openModal(modal) {
  modal.classList.add("modal_opened");
  document.addEventListener("keydown", closeWithEscapeKey);
  document.addEventListener("click", closeWithClick);
} */
/*formElement.addEventListener("submit", function (e) {
  e.preventDefault();
  bioNameField.innerText = nameInputField.value;
  bioDescriptionField.innerText = descriptionInputField.value;
  closeModal();
}); */
// editFormElement.addEventListener("submit", function (e) {
//   e.preventDefault();
//   /*   bioNameField.innerText = nameInputField.value;
//   bioDescriptionField.innerText = descriptionInputField.value; */

//   userOne.setUserInfo(nameInputField.value, descriptionInputField.value);
//   profilePopUp.close();
//   editModalValidator.toggleButtonState();
// });
function createCard(cardData) {
  const card = new Card(cardData, "#card-template", handleImageClick);
  const cardElement = card.getCardElement();
  return cardElement;
}
/* addFormElement.addEventListener("submit", function (e) {
  e.preventDefault();
  const nameOfPlace = titleInputField.value;
  const url = linkInputField.value;
  const createdCard = { name: nameOfPlace, link: url };
  // const newCard = new Card(createdCard, "#card-template", handleImageClick);
  // const htmlCard = newCard.getCardElement();
  const cardElement = createCard(createdCard);
  cardElements.addItem(cardElement);
  titleInputField.value = "";
  linkInputField.value = "";
  addModalValidator.toggleButtonState();
  addPopUp.close();
  // closeModal(addModalElement);
}); */
/* editCloseButton.addEventListener("click", function () {
  profilePopUp.close();
});
addCloseButton.addEventListener("click", function () {
  addPopUp.close();
}); */
editProfileButton.addEventListener("click", function () {
  /*   nameInputField.value = bioNameField.innerText;
  descriptionInputField.value = bioDescriptionField.innerText; */
  const userInfo = Object.values(userOne.getUserInfo());
  profilePopUp.setInputValues(userInfo);
  profilePopUp.open();
});
const userOne = new UserInfo(".bio__name", ".bio__description");

// function createCard(data) {
//   const cardElement = cardTemplate.cloneNode(true);
//   const cardElementTitle = cardElement.querySelector(".card__location");
//   const cardElementImage = cardElement.querySelector(".card__image");
//   cardElementImage.src = data.link;
//   cardElementImage.alt = data.name;
//   cardElementTitle.textContent = data.name;
//   const likeBtn = cardElement.querySelector(".card__heart-icon");
//   const trashIcon = cardElement.querySelector(".card__trash-icon");
//   likeBtn.addEventListener("click", () => {
//     likeBtn.classList.toggle("card__heart-icon_active");
//   });
//   trashIcon.addEventListener("click", function (e) {
//     e.preventDefault();
//     const currentTrashIcon = e.target;
//     currentTrashIcon.closest(".card").remove();
//   });

//   const fullCard = imageModalElement.querySelector(".modal__full-img");
//   const cardLocation = imageModalElement.querySelector(".modal__location");
//   cardElementImage.addEventListener("click", (e) => {
//     openModal(imageModalElement);
//     fullCard.src = e.target.src;
//     cardLocation.innerText = e.target.alt;
//     fullCard.alt = e.target.alt;
//   });
//   return cardElement;
// }

function handleImageClick(name, link) {
  imagePopUp.open(name, link);
}

/*initialCards.forEach(function (data) {
  let cardEl = createCard(data);
  cardList.append(cardEl);
});*/

/* initialCards.forEach(function (data) {
  const cardElement = createCard(data);
  cardList.append(cardElement);
}); */

addProfileButton.addEventListener("click", function () {
  addPopUp.open();

  addModalValidator.toggleButtonState();
});

/* cardImages.forEach((cardImage) => {
  cardImage.addEventListener("click", (e) => {
    openModal(imageModalElement);
    fullCard.src = e.target.src;
    cardLocation.innerText = e.target.alt;
    cardElementImage.alt = e.target.alt;
  });
}); */

function closeWithEscapeKey(event) {
  if (event.key === "Escape") {
    const openPopUp = document.querySelector(".modal_opened");
    closeModal(openPopUp);
  }
}

function closeWithClick(event) {
  if (event.target.classList.contains("modal")) {
    closeModal(event.target);
  }
}

const config = {
  formSelector: ".modal__form",
  inputSelector: ".modal__input",
  submitButtonSelector: ".modal__button",
  inactiveButtonClass: "modal__button_disabled",
  inputErrorClass: "modal__input_type_error",
  errorClass: "modal__error_visible",
};
const options = {
  baseURL: "https://around-api.en.tripleten-services.com/v1",
  headers: {
    authorization: "e13faefd-227e-472c-9a3d-b6e42316321b",
    "Content-Type": "application/json",
  },
};
const editModalValidator = new FormValidator(config, editModalElement);
const addModalValidator = new FormValidator(config, addModalElement);

editModalValidator.enableValidation();
addModalValidator.enableValidation();

function handleProfileSubmit(inputElsObj) {
  const inputKey = inputElsObj["title"];
  const inputValue = inputElsObj["description"];

  userOne.setUserInfo(inputKey, inputValue);
}
function handleAddCardSubmit(inputElsObj) {
  const name = inputElsObj["title"];
  const link = inputElsObj["img-link"];
  const cardEl = createCard({ name, link }); //{name: name, link: link}
  cardElements.addItem(cardEl);
}
const profilePopUp = new PopupWithForm({
  popUpSelector: "#edit-modal",
  handleFormSubmit: handleProfileSubmit,
});
profilePopUp.setEventListeners();
const addPopUp = new PopupWithForm({
  popUpSelector: "#add-modal",
  handleFormSubmit: handleAddCardSubmit,
});
addPopUp.setEventListeners();

const imagePopUp = new PopupWithImage("#image-modal");
const firstAPI = new Api(options);
const cardElements = new Section(
  {
    items: [],
    renderer(item) {
      const card = createCard(item);
      cardElements.addItem(card);
      return card;
    },
  },
  ".cards__list"
);

firstAPI.getInitialCards().then((cards) => {
  cardElements.setItems(cards);
  cardElements.renderItems();
  console.log("hello");
});