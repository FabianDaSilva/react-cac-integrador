import { useEffect, useState } from "react";
import "./../style/components/_nav.scss";

const Nav = () => {
  const [show, handleshow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 100 ? handleshow(true) : handleshow(false);
    });

    return () => {
      window.removeEventListener("scroll", null);
    };
  }, []);

  const user = sessionStorage.getItem("user");

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img
        alt="Netflix Logo"
        className="nav__logo"
        src="https://res.cloudinary.com/dew1za4wz/image/upload/v1670898666/plants/React/Netflix_2015_logo.svg_pffsfl.png"
      />

      <div className="nav__avatar">
        {user[0].toUpperCase()}
      </div>
    </div>
  );
};

export default Nav;
