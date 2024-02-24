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
let imageModalElement = document.querySelector("#image-modal");
let editButton = document.querySelector(".bio__edit-button");
let addButton = document.querySelector(".bio__add-button");
let saveButton = document.querySelector(".modal__button");
let formElement = document.querySelector(".modal__form");
let nameInputField = document.querySelector(".modal__input-name");
let descriptionInputField = document.querySelector(".modal__input-description");
let titleInputField = document.querySelector(".modal__input-title");
let linkInputField = document.querySelector(".modal__input-link");
let bioNameField = document.querySelector(".bio__name");
let bioDescriptionField = document.querySelector(".bio__description");
let cardList = document.querySelector(".cards__list");
let addCloseButton = addModalElement.querySelector("button");
let editCloseButton = editModalElement.querySelector("button");
let editFormElement = editModalElement.querySelector(".modal__form");
let addFormElement = addModalElement.querySelector(".modal__form");
let imageCloseButton = imageModalElement.querySelector(".modal__close");
console.log(imageCloseButton);
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
  addModalElement.classList.add("modal_opened");
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
let cardImages = document.querySelectorAll(".card__image");
let fullCard = document.querySelector(".modal__full-img");
let cardLocation = document.querySelector(".modal__location");
console.log(cardLocation);
cardImages.forEach((cardImage) => {
  cardImage.addEventListener("click", (e) => {
    imageModalElement.classList.add("modal_opened");
    fullCard.src = e.target.src;
    cardLocation.innerText = e.target.alt;
    console.log(cardLocation.innerText);
  });
});
imageCloseButton.addEventListener("click", () => {
  closeModal(imageModalElement);
});
