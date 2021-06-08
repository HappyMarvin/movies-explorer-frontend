import './Movies.css';
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import {useContext, useEffect, useState} from "react";
import moviesApi from "../../utils/MoviesApi";
import EmptyMovieList from "../EmptyMovieList/EmptyMovieList";
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function Movies({ addLike, removeLike }) {
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [shortFilm, setShortFilm] = useState(false);
  const [emptyList, setEmptyList] = useState('Ввидите запрос');
  const [submit,setSubmit] = useState(false);
  const currentUser = useContext(CurrentUserContext);


  const filterMovies = () => {
    let regex = new RegExp( searchQuery.split(' ').join( "|" ), "ig");
    setFilteredMovies(movies.filter(movie => {
      if (shortFilm && movie.duration > 40) return
      return regex.test(movie.nameRU) || regex.test(movie.nameEN)
    }))
  }

  useEffect(()=>{
    if (localStorage.getItem('filteredMovies')) {
      setFilteredMovies(JSON.parse(localStorage.getItem('filteredMovies')));
    }
  },[])

  useEffect(() => {
    if (movies.length) {
      filterMovies();
    }
  }, [movies, submit])

  useEffect(()=> {
    localStorage.setItem('filteredMovies', JSON.stringify(filteredMovies));
  }, [filteredMovies])

  const handleSubmit = () => {
    if(!searchQuery) return
    if (!movies.length) {
      moviesApi.getMovies()
        .then(data => {
          setMovies(data);
        })
    } else {
      setSubmit(!submit);
    }
    setEmptyList('Ничего не найдено');
  }


  return (
    <div className="movies">
      <SearchForm
        handleSubmit={handleSubmit}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        shortFilm={shortFilm}
        setShortFilm={setShortFilm}
      />
      {filteredMovies.length
        ?
        <MoviesCardList moviesList={filteredMovies} addLike={addLike} removeLike={removeLike} />
        :
        <EmptyMovieList text={emptyList} moviesList={currentUser.userMovies} />
      }
    </div>
  );
}

export default Movies;
