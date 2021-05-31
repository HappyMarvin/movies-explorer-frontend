import './SignLink.css';
import {Link} from "react-router-dom";

function SignLink ({ preText, text, link }) {
  return (
    <p className="sign-link">
      {preText + ' '}
      <Link to={link} className={`sign-link__link`}>{text}</Link>
    </p>
  )
}

export default SignLink