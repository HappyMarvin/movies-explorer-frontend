import './Movies.css';
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import MoviesMore from "../MoviesMore/MoviesMore";

function Movies() {
  return (
    <div className="movies">
      <SearchForm />
      <MoviesCardList />
      <MoviesMore />
    </div>
  );
}

export default Movies;