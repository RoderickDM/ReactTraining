import React from "react";
import Logo from "../svg/Logo";

const Header = () => {
  return (
    <>
      <header className="flex justify-between p-2">
        <div className="w-fit">
          <Logo />
        </div>
        <div className="flex items-center gap-3">
          <ul className="leading-snug">
            <li>Rhico</li>
            <li>
              <small>Developer</small>
            </li>
          </ul>
          <img
            src="https://via.placeholder.com/50x50"
            alt=""
            className="rounded-full object-cover object-center"
          />
        </div>
      </header>
    </>
  );
};

export default Header;
