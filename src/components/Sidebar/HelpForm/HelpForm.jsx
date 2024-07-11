import css from "./HelpForm.module.css";
import needHelp from "../../../img/mobile/plant.png";
import sprite from "../../../icons/sprite.svg";
import { useState } from "react";

const HelpForm = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <div className={css.help_wrapper}>
      <img className={css.kaktus} src={needHelp} alt="plant image" />
      <p className={css.help_text}>
        If you need help with <span className={css.span_text}>TaskPro</span>,
        check out our support resources or reach out to our customer support
        team.
      </p>
      <button className={css.help_link}>
        <svg className={css.help_icon} width="20px" height="20px">
          <use href={sprite + "#icon-help"}></use>
        </svg>
        <span className={css.need_text}>Need help?</span>
      </button>
    </div>
  );
};

export default HelpForm;
