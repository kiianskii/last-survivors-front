import { NavLink } from "react-router-dom";
import s from "./WelcomePage.module.css";
import { Icon } from "../../icons/Icon";
import { useState, useEffect } from "react";
import welcomeImage from "../../img/user.png"
function WelcomePage() {
  const [size, setSize] = useState(window.innerWidth);
  const handleResize = () => {
    setSize(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className={s.container}>
      <img src={welcomeImage} alt="Welcome" className={s.welcome_image} />
      <div className={s.logo}>
        <Icon size={size > 768 ? 48 : 40} id="logo" />
        <h1 className={s.task}>Task Pro</h1>
      </div>
      <p className={s.title}>
        Supercharge your productivity and take control of your tasks with Task
        Pro - Don&apos;t wait, start achieving your goals now!
      </p>
      <ul>
        <li>
          <NavLink to="/register" className={s.linkContainer}>
            <div className={s.link}>Registration</div>
          </NavLink>
        </li>
        <li>
          <NavLink to="/login" className={s.linkContainer}>
            <div className={s.link}>Log In</div>
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default WelcomePage;
