import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <h2 className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</h2>
      <div className="footer__inner">
        <p className="footer__copyright">© 2020</p>
        <ul className="footer__links">
          <li className="footer__item">
            <a href={'https://praktikum.yandex.ru/'}
               className="footer__link"
               target={`_blank`}
            >Яндекс.Практикум</a>
          </li>
          <li className="footer__item">
            <a href={'https://github.com/HappyMarvin'}
               className="footer__link"
               target={`_blank`}
            >Github</a>
          </li>
          <li className="footer__item">
            <a href={'https://www.facebook.com/profile.php?id=100015790030100'}
               className="footer__link"
               target={`_blank`}
            >Facebook</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;