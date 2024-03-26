export default class Card {
  constructor(data, cardSelector, handleImageClick) {
    this._data = data; //this._data.name

    this._cardSelector = cardSelector;
    this._handleImageClick = handleImageClick;
  }
  _setEventListeners() {
    // ...
    this._cardImageElement.addEventListener("click", () => {
      this._handleImageClick(this);
    });
  }
}
