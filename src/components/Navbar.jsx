import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/food">Order Food</Link>
      </div>
      <div className="navbar-right">
        <Link to="/login">Login</Link>
      </div>
    </nav>
  );
};

export default Navbar;
