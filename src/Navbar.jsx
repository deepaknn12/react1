import React from 'react';

function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="menu">Menu</h2>
      <div className="nav-links">
        <h2>Location</h2>
        <h2>About</h2>
        <h2>Contact</h2>
      </div>
      <div className="login">
        <button>Login</button>
      </div>
    </nav>
  );
}

export default Navbar;
