import './MoviesCard.css';
import cover from '../../images/cover.jpg'

function MoviesCard({ saved }) {
  return (
    <li className="movies-card">
      <img src={cover} alt="" className="movies-card__image"/>
      <div className="movies-card__title-wrapper">
        <h3 className="movies-card__title">33 слова о дизайне</h3>
        {saved ?
          <button className="movies-card__like-del">+</button>
          :
          <button className="movies-card__like movies-card__like_active" />
        }
      </div>
      <p className="movies-card__duration">1ч42м</p>
    </li>
  );
}

export default MoviesCard;