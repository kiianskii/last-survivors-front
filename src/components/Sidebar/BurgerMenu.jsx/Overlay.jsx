import css from "./Overlay.module.css";

const Overlay = ({ isOpen, onClick }) => {
  return (
    <div
      className={`${css.overlay} ${isOpen ? css.open : ""}`}
      onClick={onClick}
    ></div>
  );
};
export default Overlay;
