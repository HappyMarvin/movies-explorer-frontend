import './SavedMovies.css';
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import MoviesMore from "../MoviesMore/MoviesMore";
import {useContext, useEffect, useState} from "react";
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import moviesApi from "../../utils/MoviesApi";


function SavedMovies({ removeLike }) {
  const [movies, setMovies] = useState([]);
  const currentUser = useContext(CurrentUserContext);
  const [searchQuery, setSearchQuery] = useState('');
  const [shortFilm, setShortFilm] = useState(false);
  const [emptyList, setEmptyList] = useState('Здесь ничего нет');
  const [filteredMovies, setFilteredMovies] = useState([]);

  const filterMovies = () => {
    let regex = new RegExp( searchQuery.split(' ').join( "|" ), "ig");
    setFilteredMovies(movies.filter(movie => {
      if (shortFilm && movie.duration > 40) return
      return regex.test(movie.nameRU) || regex.test(movie.nameEN)
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!searchQuery) return
    filterMovies();
    setEmptyList('Ничего не найдено');
  }

  useEffect(()=>{
    if (currentUser) {
      setMovies(currentUser.userMovies)
    }
  },[currentUser])

  useEffect(()=>{
    setFilteredMovies(movies);
  },[movies])

  return (
    <div className="saved-movies">
      <SearchForm
        handleSubmit={handleSubmit}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        shortFilm={shortFilm}
        setShortFilm={setShortFilm}
      />
      <MoviesCardList saved={true} moviesList={filteredMovies} removeLike={removeLike} />
    </div>
  );
}

export default SavedMovies
