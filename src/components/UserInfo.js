export default class UserInfo {
  constructor(nameSelector, jobSelector, avatarSelector) {
    this._userName = document.querySelector(nameSelector);
    this._userJob = document.querySelector(jobSelector);
  }
  getUserInfo() {
    return {
      name: this._userName.textContent,
      job: this._userJob.textContent,
    };
  }
  setUserInfo(name, job) {
    this._userName.textContent = name;
    this._userJob.textContent = job;
  }
}
/*
The UserInfo class is responsible for rendering information
 about the user on the page. This class should:
Have a public method named getUserInfo(),
 which returns an object containing information about the user.
 This method will be handy
 for cases when it's necessary to display the user data in the open form.
Have a public method named setUserInfo(),
which takes new user data and adds it to the page.
This method should be used after successful submission of the profile form.
Create an instance of the UserInfo class in index.js and use its methods as described. */
