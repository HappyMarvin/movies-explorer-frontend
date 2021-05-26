import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <h2 className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</h2>
      <div className="footer__inner">
        <p className="footer__copyright">© 2020</p>
        <ul className="footer__links">
          <li className="footer__item"><a href={'#'} className="footer__link">Яндекс.Практикум</a></li>
          <li className="footer__item"><a href={'#'} className="footer__link">Github</a></li>
          <li className="footer__item"><a href={'#'} className="footer__link">Facebook</a></li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;