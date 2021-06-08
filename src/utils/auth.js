
class Auth {
  constructor(baseURL) {
    this.baseURL = baseURL;
  }

  _getResponseData(res) {

    if (res.ok) return res.json()
    return res.json().then(res => Promise.reject(new Error(res.message || res.error)))
  }

  register (email, password) {
    return fetch(`${this.baseURL}/signup`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        password,
        email
      })
    }).then(this._getResponseData)
  }

  login (email, password) {
    return fetch(`${this.baseURL}/signin`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      'credentials': 'include',
      body: JSON.stringify({
        password,
        email
      })
    }).then(this._getResponseData)
  }

  addUser (email, password, name) {
    return fetch(`${this.baseURL}/signup`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      'credentials': 'include',
      body: JSON.stringify({
        password,
        email,
        name
      })
    }).then(this._getResponseData)
  }

  updateUser (email, name) {
    return fetch(`${this.baseURL}/users/me`, {
      method: 'PATCH',
      headers: {
        "Content-Type": "application/json"
      },
      'credentials': 'include',
      body: JSON.stringify({
        name,
        email
      })
    }).then(this._getResponseData)
  }


  getUserData () {
    return fetch(`${this.baseURL}/users/me`, {
      headers: {
        "Content-Type": "application/json",
      },
      'credentials': 'include'
    })
      .then(this._getResponseData)
  }

  logOut () {
    return fetch(`${this.baseURL}/signout`, {
      headers: {
        "Content-Type": "application/json",
      },
      'credentials': 'include'
    })
      .then(this._getResponseData)
  }
}

const auth = new Auth("http://api.movies.happymarvin.ru");

export default  auth
