import { useEffect, useState } from "react";
import './../style/components/_nav.scss'
import { useNavigate } from "react-router-dom";

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

  const navigate = useNavigate();

  const navigateToSignin = () => {
    navigate('/signin');
  };

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img
        alt="Netflix Logo"
        className="nav__logo"
        src="https://res.cloudinary.com/dew1za4wz/image/upload/v1670898666/plants/React/Netflix_2015_logo.svg_pffsfl.png"
      />

      <button className="nav__signin" onClick={ navigateToSignin }>Sign In</button>

      <img
        alt="Netflix Profile"
        className="nav__avatar"
        src="https://res.cloudinary.com/dew1za4wz/image/upload/v1670898666/plants/React/366be133850498.56ba69ac36858_ds0g7x.png"
      />
    </div>
  );
};

export default Nav;
