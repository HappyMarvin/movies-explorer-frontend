import './SearchForm.css';
import {useState} from "react";

function SearchForm({ handleSubmit, searchQuery, setSearchQuery, shortFilm, setShortFilm }) {

  const [isValid, setIsValid] = useState(false)

  function onSubmit (e) {
    e.preventDefault();
    handleSubmit(e);
  }

  function changeCheckbox () {
    setShortFilm(!shortFilm);
  }
  function handleChange (e) {
    setSearchQuery(e.target.value)
    setIsValid(e.target.value);
  }

  return (
    <form className="search-form" onSubmit={onSubmit}>
      <div className="search-form__input-wrapper">
        <div className="search-form__icon" />
        <input name={`movie`} type="text" className="search-form__input" placeholder={'Фильм'} value={searchQuery} onChange={handleChange}/>
        <button
          className={`search-form__submit ${!isValid ? 'search-form__submit_disabled' : ''}`}
          type={`submit`}
         disabled={!isValid ? 'disabled' : ''}
        />
      </div>
      <label htmlFor="search-form__checkbox" className="search-form__checkbox-label">
        <input id={`search-form__checkbox`} type="checkbox" className="search-form__check" checked={shortFilm} onChange={changeCheckbox} />
        <span className={`search-form__switch-film ${shortFilm ? 'search-form__switch-film_checked' : ''}`}>
          <span className={`search-form__switch-circle ${shortFilm ? 'search-form__switch-circle_checked' : ''}`}/>
        </span>
        <span className="search-form__switch-text">Короткометражки</span>
      </label>
    </form>
  );
}

export default SearchForm;
