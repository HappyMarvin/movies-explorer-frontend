import './SearchForm.css';
import {useState} from "react";

function SearchForm() {
  const [shortFilm, setShortFilm] = useState(false);

  function changeCheckbox () {
    setShortFilm(!shortFilm);
  }

  return (
    <form className="search-form">
      <div className="search-form__input-wrapper">
        <div className="search-form__icon" />
        <input type="text" className="search-form__input" placeholder={'Фильм'}/>
        <button className="search-form__submit" type={`submit`} />
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