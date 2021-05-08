import './Header.css';

function Header({ isMain }) {
  return (
    <div className="Header">
      {isMain}
    </div>
  );
}

export default Header