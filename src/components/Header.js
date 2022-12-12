import React from "react";
import { Link } from "react-router-dom";
class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <div className="header-logo">
          <Link to={"/"}>
            <img
              className="img-logo"
              src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png"
            />
          </Link>
        </div>
        <div className="header-right">
          <a>Login</a>
        </div>
      </div>
    );
  }
}
export default Header;
