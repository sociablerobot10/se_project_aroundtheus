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
function closeModal(modal) {
  modal.classList.remove("modal_opened");
}

function openModal(modal) {
  modal.classList.add("modal_opened");
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
  let nameOfPlace = titleInputField.value;
  let url = linkInputField.value;
  let createdCard = { name: nameOfPlace, link: url };
  initialCards.unshift(createdCard);
  closeModal(addModalElement);
  let newCard = initialCards[0];
  let cardEl = createCard(newCard);
  cardList.prepend(cardEl);
});
editCloseButton.addEventListener("click", function () {
  closeModal(editModalElement);
});
addCloseButton.addEventListener("click", function () {
  closeModal(addModalElement);
});
editProfileButton.addEventListener("click", function () {
  nameInputField.value = bioNameField.innerText;
  descriptionInputField.value = bioDescriptionField.innerText;
  openModal(editModalElement);
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

initialCards.forEach(function (data) {
  let cardEl = createCard(data);
  cardList.append(cardEl);
});

addProfileButton.addEventListener("click", function () {
  openModal(addModalElement);
});

let likeButtons = document.querySelectorAll(".card__heart-icon");
likeButtons.forEach((likeBtn) => {
  likeBtn.addEventListener("click", () => {
    likeBtn.classList.toggle("card__heart-icon_active");
  });
});
let trashIcons = document.querySelectorAll(".card__trash-icon");
trashIcons.forEach((trashIcon) => {
  trashIcon.addEventListener("click", function (e) {
    e.preventDefault();
    let currentTrashIcon = e.target;
    console.log(currentTrashIcon);
    currentTrashIcon.closest(".card").remove();
  });
});
const cardImages = document.querySelectorAll(".card__image");
const fullCard = document.querySelector(".modal__full-img");
const cardLocation = document.querySelector(".modal__location");
console.log(cardLocation);
cardImages.forEach((cardImage) => {
  cardImage.addEventListener("click", (e) => {
    openModal(imageModalElement);
    fullCard.src = e.target.src;
    cardLocation.innerText = e.target.alt;
    console.log(cardLocation.innerText);
  });
});
imageCloseButton.addEventListener("click", () => {
  closeModal(imageModalElement);
});
