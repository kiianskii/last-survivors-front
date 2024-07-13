import { useDispatch } from "react-redux";
import { Icon } from "../../icons/Icon";
import { deleteCardThunk } from "../../redux/cards/operations";
import css from "./CardItem.module.css";
import clsx from "clsx";

const CardItem = ({ card }) => {
  const dispatch = useDispatch();

  return (
    <li
      className={clsx(
        css.card,
        card.priority === "High" && css.high_border,
        card.priority === "Medium" && css.medium_border,
        card.priority === "Low" && css.low_border,
        card.priority === "Without" && css.without_border
      )}
    >
      <h4 className={css.card_title}>{card.title}</h4>
      <p className={css.card_desc}>{card.description}</p>
      <div className={css.card_wrapper}>
        <div className={css.inner_wrapper}>
          <div className={css.card_box}>
            <p className={css.box_title}>Priority</p>
            <div className={css.priority_box}>
              <div
                className={clsx(
                  css.priority_circle,
                  card.priority === "High" && css.high,
                  card.priority === "Medium" && css.medium,
                  card.priority === "Low" && css.low,
                  card.priority === "Without" && css.without
                )}
              ></div>
              <p className={css.box_text}>{card.priority}</p>
            </div>
          </div>
          <div className={css.card_box}>
            <p className={css.box_title}>Deadline</p>
            <p className={css.box_text}>{card.deadline}</p>
          </div>
        </div>
        <ul className={css.icons_list}>
          <li></li>
          <li className={css.icon_list_item}>
            <button className={css.icon_btn} type="button">
              <Icon size={16} id={"done"} className={css.icon} />
            </button>
          </li>
          <li className={css.icon_list_item}>
            <button className={css.icon_btn} type="button">
              <Icon size={16} id={"pencil"} className={css.icon} />
            </button>
          </li>
          <li className={css.icon_list_item}>
            <button
              type="button"
              className={css.icon_btn}
              onClick={() => {
                dispatch(deleteCardThunk({ id: card._id }));
              }}
            >
              <Icon size={16} id={"trash"} className={css.icon} />
            </button>
          </li>
        </ul>
      </div>
    </li>
  );
};

export default CardItem;
