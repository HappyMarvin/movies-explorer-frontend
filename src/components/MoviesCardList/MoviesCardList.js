import './MoviesCardList.css';
import MoviesCard from "../MoviesCard/MoviesCard";
import MoviesMore from "../MoviesMore/MoviesMore";
import {useEffect, useState} from "react";

function MoviesCardList({ saved, moviesList, addLike, removeLike }) {
  const [renderList, setRenderList] = useState([]);
  const [numberCards, setNumberCards] = useState(0);
  const [moviesListLen, setMoviesListLen] = useState(0);

  function checkSize () {
    if (window.innerWidth <= 768 && window.innerWidth > 480) {
      setNumberCards(8)
    } else if (window.innerWidth <= 480) {
      setNumberCards(5)
    } else {
      setNumberCards(12)
    }
  }

  window.addEventListener('resize', function(event){
    setTimeout(checkSize, 200)
  });

  useEffect(()=>{
    if (moviesList) {
      checkSize();
      setRenderList(moviesList.slice(0, numberCards))
    }
  },[])

  useEffect(()=>{
    if (moviesList) setRenderList(moviesList.slice(0, numberCards))
  },[numberCards])

  function handleMore() {
    setRenderList(renderList.concat(moviesList.slice(renderList.length, renderList.length+numberCards)))
  }

  useEffect(()=> {
    if (moviesList) {
      setMoviesListLen(moviesList.length)
      setRenderList(moviesList.slice(0, numberCards))
    }
  },[moviesList])

  return (
    <>
      <ul className="movies-card-list">
        {renderList.map(movie =>
          <MoviesCard saved={saved} movie={movie} key={movie.id || movie._id} addLike={addLike} removeLike={removeLike} />)}
      </ul>
      {renderList.length < moviesListLen
        ?
        <MoviesMore handleMore={handleMore} />
      :
        ''
      }
    </>
  );
}

export default MoviesCardList;
