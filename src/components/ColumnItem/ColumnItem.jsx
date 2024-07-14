import { Icon } from "../../icons/Icon";
import css from "./ColumnItem.module.css";

function ColumnItem() {
  return (
    <div className={css.column_wrapper}>
      <h2>ColumnItem</h2>
      <ul>
        <li className={css.icon_list_item}>
          <button className={css.icon_btn} type="button">
            <Icon size={16} id={"pencil"} className={css.icon} />
          </button>
        </li>
        <li className={css.icon_list_item}>
          <button type="button" className={css.icon_btn}>
            <Icon size={16} id={"trash"} className={css.icon} />
          </button>
        </li>
      </ul>
    </div>
  );
}

export default ColumnItem;
