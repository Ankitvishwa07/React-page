import { NavLink } from "react-router-dom";
import { GiWorld } from "react-icons/gi";

const Header = () => {
  return (
    <header>
      <div className="container white">
        <div className="grid-two-col white">
          <div className="flex">
            <div>
              <GiWorld className="react-icon"/>
            </div>
            <NavLink to="/">
              <h1>WorldAtlas</h1>
            </NavLink>
          </div>
          <div>
            <div className="flex-end cursor white ">
              <NavLink to="/">
                <p>Home</p>
              </NavLink>

              <NavLink to="/about">
                <p>About</p>
              </NavLink>

              <NavLink to="/country">
                <p>Country</p>
              </NavLink>
              <NavLink to="/contact">
                <p>Contact</p>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
