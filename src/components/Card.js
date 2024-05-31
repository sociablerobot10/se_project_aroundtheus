export default class Card {
  constructor(
    data,
    cardTemplateSelector,
    handleImageClick,
    handleTrashIconClick,
    handleHeartIconClick
  ) {
    this._data = data; //this._data.name
    this.id = data._id;
    this.isLiked = data.isLiked;
    this._cardTemplate =
      document.querySelector(cardTemplateSelector).content.firstElementChild; // const card = new Card(cardDtat, #card-template, handleImageClick)
    this._handleImageClick = handleImageClick;
    this._handleTrashIconClick = handleTrashIconClick;
    this._handleHeartIconClick = handleHeartIconClick;
  }

  handleRemove() {
    this._cardElement.remove();
  }
  handleLike(e) {
    console.log(this._cardElement);
    this._cardElement
      .querySelector(".card__heart-icon")
      .classList.toggle("card__heart-icon_active");
  }

  _setEventListeners() {
    this._likeBtn = this._cardElement.querySelector(".card__heart-icon");

    this._trashIcon = this._cardElement.querySelector(".card__trash-icon");
    this._likeBtn.addEventListener("click", () => {
      this._handleHeartIconClick(this);
    });

    this._trashIcon.addEventListener("click", () => {
      this._handleTrashIconClick(this); //this represents the instance of the Card
    });
    this._cardElementImage.addEventListener("click", (e) => {
      this._handleImageClick(this._data.name, this._data.url);
    });
  }

  getCardElement() {
    this._cardElement = this._cardTemplate.cloneNode(true);
    this._cardElementTitle = this._cardElement.querySelector(".card__location");
    this._cardElementImage = this._cardElement.querySelector(".card__image");
    this._cardElementImage.src = this._data.link;
    this._cardElementImage.alt = this._data.name;
    this._cardElementTitle.textContent = this._data.name;

    this._imageModalElement = document.querySelector("#image-modal");
    this._fullCard = this._imageModalElement.querySelector(".modal__full-img");
    this._cardLocation =
      this._imageModalElement.querySelector(".modal__location");
    this._setEventListeners();
    /*this._cardElementImage.addEventListener("click", (e) => {
      openModal(this._imageModalElement);
      this._fullCard.src = e.target.src;
      this._cardLocation.innerText = e.target.alt;
      this._fullCard.alt = e.target.alt;
    });*/

    return this._cardElement;
  }
}
