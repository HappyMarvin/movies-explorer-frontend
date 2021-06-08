import './MoviesMore.css';

function MoviesMore ({ handleMore }) {
  return (
    <div className="movies-more">
      <button className="movies-more__button" onClick={handleMore}>Ещё</button>
    </div>
  )
}

export default MoviesMore;
