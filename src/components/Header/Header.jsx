import { Component } from "react";
import { NavLink } from "react-router-dom";
import Container from "../Container/Container";

class Header extends Component {
  render() {
    return (
      <header className="header">
        <Container>
          <nav className="siteNav">
            <NavLink
              exact
              to="/"
              activeClassName={"active"}
              className="navLink"
            >
              Home
            </NavLink>
            <NavLink
              to="/movies"
              activeClassName={"active"}
              className="navLink"
            >
              Movies
            </NavLink>
          </nav>
        </Container>
      </header>
    );
  }
}
export default Header;
