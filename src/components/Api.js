class API {
  constructor(options) {
    this._baseUrl = options.baseURL;
    this._headers = options.headers;
  }
  _processResponse = (res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Error: ${res.status}`);
  };
  getInitialCards() {
    return fetch(`${this._baseUrl}/cards`, {
      headers: this._headers,
    }).then(this._processResponse);
  }
  getUserInfo() {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: this._headers,
    }).then(this._processResponse);
  }

  handleBioDescriptionChange(aboutDescription, userName) {
    return fetch(`${this._baseUrl}/users/me/`, {
      headers: this._headers,
      method: "PATCH",
      body: JSON.stringify({
        about: aboutDescription,
        name: userName,
      }),
    }).then(this._processResponse);
  }
  handleLike(cardId) {
    return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
      headers: this._headers,
      method: "PUT",
    }).then(this._processResponse);
  }
  handleUnlike(cardId) {
    return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
      headers: this._headers,
      method: "DELETE",
    }).then(this._processResponse);
  }
  handleBioImageChange(imageLink) {
    return fetch(`${this._baseUrl}/users/me/avatar`, {
      headers: this._headers,
      method: "PATCH",
      body: JSON.stringify({
        avatar: imageLink,
      }),
    }).then(this._processResponse);
  }

  deleteCard(cardId) {
    return fetch(`${this._baseUrl}/cards/${cardId}`, {
      headers: this._headers,
      method: "DELETE",
    }).then(this._processResponse);
  }

  postNewCard(name, link) {
    return fetch(`${this._baseUrl}/cards`, {
      headers: this._headers,
      method: "POST",
      body: JSON.stringify({
        name,
        link,
      }),
    }).then(this._processResponse);
  }
  getCardsAndUserInfo() {
    return Promise.all([this.getUserInfo(), this.getInitialCards()]);
  }
}

export default API;
