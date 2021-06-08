class MainApi {
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._headers = options.headers;
  }

  _getResponseData(res) {
    if (res.ok) return res.json()
    return Promise.reject(new Error(`Ошибка: ${res.status}`))
  }

  _createMovieData (movie) {
    let thumbnail = movie.image ? `https://api.nomoreparties.co${movie.image.formats.thumbnail.url}` : '';
    let image = movie.image ? `https://api.nomoreparties.co${movie.image.url}` : '';
     return  {
      country: String(movie.country),
      director: movie.director,
      duration: movie.duration,
      year: movie.year,
      description: movie.description,
      image: image,
      trailer: movie.trailerLink,
      thumbnail: thumbnail,
      movieId: movie.id,
      nameRU: movie.nameRU,
      nameEN: movie.nameEN || ' ',
    }
  }

  addMovie (movie) {
    return fetch(`${this._baseUrl}/movies`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      'credentials': 'include',
      body: JSON.stringify(this._createMovieData(movie))
    }).then(this._getResponseData)
  }

  removeMovie (movieId) {
    return fetch(`${this._baseUrl}/movies/${movieId}`, {
      method: 'DELETE',
      headers: {
        "Content-Type": "application/json"
      },
      'credentials': 'include'
    }).then(this._getResponseData)
  }

  getMovies() {
    return fetch(`${this._baseUrl}/movies`, {
      headers: this._headers,
      'credentials': 'include'
    })
      .then(this._getResponseData)
  }
}

const mainApi = new MainApi({
  baseUrl: 'http://api.movies.happymarvin.ru',
  headers: {
    'Content-Type': 'application/json'
  }
})

export default mainApi
