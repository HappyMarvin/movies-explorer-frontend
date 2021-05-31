import './NotFound.css';
import {Link} from "react-router-dom";

function NotFound() {
  return (
    <div className="not-found">
      <div className="not-found__error">
        404
        <p className="not-found__text">Страница не найдена</p>
        <div className="not-found__link-wrapper">
          <Link className="not-found__link" to={`/`}>Назад</Link>
        </div>
      </div>
    </div>
  );
}

export default NotFound