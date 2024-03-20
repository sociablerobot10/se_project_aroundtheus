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
const openedPopUp = "";
function closeModal(modal) {
  modal.classList.remove("modal_opened");
  document.removeEventListener("click", closeWithClick);
  document.removeEventListener("keydown", closeWithEscapeKey);
}

function openModal(modal) {
  modal.classList.add("modal_opened");
  document.addEventListener("keydown", closeWithEscapeKey);
  document.addEventListener("click", closeWithClick);
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
  const nameOfPlace = titleInputField.value;
  const url = linkInputField.value;
  const createdCard = { name: nameOfPlace, link: url };
  const newCard = createCard(createdCard);
  cardList.prepend(newCard);
  titleInputField.value = "";
  linkInputField.value = "";
  closeModal(addModalElement);
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
  const cardElement = cardTemplate.cloneNode(true);
  const cardElementTitle = cardElement.querySelector(".card__location");
  const cardElementImage = cardElement.querySelector(".card__image");
  cardElementImage.src = data.link;
  cardElementImage.alt = data.name;
  cardElementTitle.textContent = data.name;
  const likeBtn = cardElement.querySelector(".card__heart-icon");
  const trashIcon = cardElement.querySelector(".card__trash-icon");
  likeBtn.addEventListener("click", () => {
    likeBtn.classList.toggle("card__heart-icon_active");
  });
  trashIcon.addEventListener("click", function (e) {
    e.preventDefault();
    const currentTrashIcon = e.target;
    currentTrashIcon.closest(".card").remove();
  });

  const fullCard = imageModalElement.querySelector(".modal__full-img");
  const cardLocation = imageModalElement.querySelector(".modal__location");
  cardElementImage.addEventListener("click", (e) => {
    openModal(imageModalElement);
    fullCard.src = e.target.src;
    cardLocation.innerText = e.target.alt;
    fullCard.alt = e.target.alt;
  });
  return cardElement;
}

initialCards.forEach(function (data) {
  let cardEl = createCard(data);
  cardList.append(cardEl);
});

addProfileButton.addEventListener("click", function () {
  openModal(addModalElement);
});

/* cardImages.forEach((cardImage) => {
  cardImage.addEventListener("click", (e) => {
    openModal(imageModalElement);
    fullCard.src = e.target.src;
    cardLocation.innerText = e.target.alt;
    cardElementImage.alt = e.target.alt;
  });
}); */
imageCloseButton.addEventListener("click", () => {
  closeModal(imageModalElement);
});

console.log(imageModalElement.classList);
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
