import './Logo.css';
import {Link} from "react-router-dom";

function Logo({ mixes }) {
  return (
    <Link to={'./'} className={`logo ${mixes || ''}`}/>
  );
};

export default Logo;