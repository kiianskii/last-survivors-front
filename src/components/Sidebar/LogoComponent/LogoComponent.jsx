import css from "./LogoComponent.module.css";
function LogoComponent() {
  return (
    <div className={css.logo}>
      {/* <svg> </svg> */}
      <h1 className={css.pro}>Task Pro</h1>
    </div>
  );
}

export default LogoComponent;
