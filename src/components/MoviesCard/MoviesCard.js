import './MoviesCard.css';
import noImage from '../../images/cover.jpg';
import {useContext, useEffect, useState} from "react";
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function MoviesCard({ saved, movie, addLike, removeLike }) {
  const currentUser = useContext(CurrentUserContext);
  const [owner, setOwner] = useState(false);
  const [movieObjectId, setMovieObjectId] = useState(-1);

  function checkOwner () {
    if (currentUser.userMovies) {
      let isOwnerMovie = currentUser.userMovies.find((userMovie)=>{

        return userMovie.movieId === movie.id
      })
      if (isOwnerMovie) {
        setMovieObjectId(isOwnerMovie._id);
        setOwner(true)
      }
      else {
        setOwner(false)
      }
    }
  }

  useEffect(()=>{
    if (!saved) {
      checkOwner();
    } else {
      setMovieObjectId(movie._id);
    }
  },[currentUser])

  const switchLike = () => {
    if (owner || saved) {
      removeLike(movieObjectId)
    } else {
      addLike(movie)
    }
  }

  function getImage () {
    if (movie.image && movie.image.url) {
      return `https://api.nomoreparties.co${movie.image.url}`
    } else if (movie.image) {
      return movie.image
    }
    return noImage
  }

  let cover = getImage();
  function getTimeFromMins(mins) {
    let time = ''
    let hours = Math.trunc(mins/60);
    let minutes = mins % 60;
    if (hours) time += hours + 'ч';
    time += minutes + 'м';
    return time
  };
  return (
    <li className="movies-card">
      <div className="movies__image-wrapper">
        <div className="movies__image-inner">
          <img src={cover} alt="" className="movies-card__image"/>
        </div>
      </div>
      <div className="movies-card__title-wrapper">
        <h3 className="movies-card__title">{movie.nameRU}</h3>
        {saved ?
          <button className="movies-card__like-del" onClick={switchLike}>+</button>
          :
          <button
            className={`movies-card__like ${owner ? 'movies-card__like_active' : ''}`}
            onClick={switchLike} />
        }
      </div>
      <p className="movies-card__duration">{getTimeFromMins(movie.duration)}</p>
    </li>
  );
}

export default MoviesCard;
