import { jwtDecode } from "jwt-decode";

export default class AuthHelperMethods {
  constructor(domain) {
    this.domain = "http://localhost:5000";
  }

  login = (username, password) => {
    return this.fetch("http://localhost:5000/api/admin-login", {
      method: "POST",
      body: JSON.stringify({
        admin,
        password,
      }),
    }).then((response) => {
      if (response.authorized) {
        this.setToken(response.token);
        localStorage.setItem("admin", username);
      }
      return Promise.resolve(response);
    });
  };

  loggedIn = () => {
    const token = this.getToken();
    return !!token && !this.isTokenExpired(token);
  };

  isTokenExpired = (token) => {
    try {
      const decodedToken = jwtDecode(token);
      if (decodedToken.exp < Date.now() / 1000) {
        console.log("Expired web token, login again.");
        this.logout();
        return true;
      } else {
        return false;
      }
    } catch (err) {
      console.log("expired check failed! Line 42: AuthService.js");
      return false;
    }
  };

  setToken = (idToken) => {
    localStorage.setItem("id_token", idToken);
  };

  getToken = () => {
    return localStorage.getItem("id_token");
  };

  logout = () => {
    console.log("LOGOUT");
    const logout_user = localStorage.getItem("username");
    this.fetch("http://localhost:5000/api/logout", {});
    localStorage.removeItem("admin");
  };

  getConfirm = () => {
    let answer = jwtDecode(this.getToken());
    return answer;
  };

  fetch = (url, options) => {
    const headers = {
      Accept: "application/json",
      "Content-Type": "application/json",
    };

    if (this.loggedIn()) {
      headers["Authorization"] = "Bearer " + this.getToken();
    }

    return fetch(url, {
      headers,
      ...options,
    })
      .then(this._checkStatus)
      .then((response) => response.json());
  };

  _checkStatus = (response) => {
    // raises an error in case response status is not a success
    if (response.status >= 200 && response.status < 300) {
      // Success status lies between 200 to 300
      return response;
    } else {
      var error = new Error(response.statusText);
      error.response = response;
      throw error;
    }
  };
}
