import Icons from "./sprite.svg";

export const Icon = ({ id, size, className }) => {
  return (
    <svg width={size} height={size} className={className}>
      <use href={Icons + "#icon-" + id}></use>
    </svg>
  );
};

export default Icons;

//Щоб використати іконки потрібно імпортувати даний файл до себе у компонент: import { Icon } from "../../img/Icon";

//Пізніше добавляємо у потрібному місті: <Icon size={17.1} id="logo-mob" />
// В id="" прописуємо назву іконки без вставки "icon-", тільки нп. "home", "exit" і тд.
// У size прописуємо відповідні розміри
// У className звичайно прописуємо класи
