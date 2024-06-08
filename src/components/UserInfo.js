export default class UserInfo {
  constructor(nameSelector, jobSelector, avatarSelector) {
    this._userName = document.querySelector(nameSelector);
    this._userJob = document.querySelector(jobSelector);
    this._userAvatar = document.querySelector(avatarSelector);
  }
  getUserInfo() {
    return {
      name: this._userName.textContent,
      job: this._userJob.textContent,
      avatar: this._userAvatar.src,
    };
  }
  setUserInfo(name, job) {
    this._userName.textContent = name;
    this._userJob.textContent = job;
  }
  setAvatar(avatar) {
    this._userAvatar.src = avatar;
  }
}
