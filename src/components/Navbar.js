import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar">
      <h1>Timed Out</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/locations">Locaitons</Link>
      </div>
    </nav>
  );
};

export default NavBar;
