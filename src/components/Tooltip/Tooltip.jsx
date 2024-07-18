import { selectColumns } from "../../redux/boardByID/slice";
import css from "./Tooltip.module.css";
import { useSelector } from "react-redux";
import { Icon } from "../../icons/Icon";

const Tooltip = ({ children, card, showTooltip }) => {
  const columns = useSelector(selectColumns);
  const filteredColumns = columns.filter(
    (column) => column._id !== card.column_id
  );

  return (
    <div className={css.container}>
      {children}
      <div className={showTooltip ? css.open : css.tooltip}>
        <ul>
          {filteredColumns.map((column) => {
            return (
              <li key={column._id}>
                <button>
                  {column.title}
                  <Icon
                    size={16}
                    id={"done"}
                    className={`${css.icon} ${css.icon_border}`}
                  />
                </button>
              </li>
            );
          })}
        </ul>
        <div className={css.arrow}></div>
      </div>
    </div>
  );
};

export default Tooltip;
