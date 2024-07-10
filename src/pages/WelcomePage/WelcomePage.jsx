import React from "react";
import { NavLink } from "react-router-dom";
import s from "./WelcomePage.module.css";

function WelcomePage() {
  return (
    <div className={s.container}>
      <h1 className={s.task}>Task Pro</h1>
      <p className={s.title}>
        Supercharge your productivity and take control of your tasks with Task
        Pro - Don't wait, start achieving your goals now!
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
