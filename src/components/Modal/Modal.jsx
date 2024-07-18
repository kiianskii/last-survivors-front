import { useCallback, useEffect } from "react";

import s from "./Modal.module.css";
import { Icon } from "../../icons/Icon";
const Modal = ({ children, title = "Default modal", closeModal , classname }) => {
  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === "Escape") {
        closeModal();
      }
    },
    [closeModal]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [closeModal, handleKeyDown]);

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
    <div className={s.wrapper} onClick={handleBackdropClick}>
      <div className={`${s.content} ${classname}`}>
        <>
          <h2 className={s.title}>{title}</h2>
        </>
        <button onClick={closeModal} className={s.closeBtn}>
          <Icon size={18} id={"close"} className={s.icon_close} />
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
