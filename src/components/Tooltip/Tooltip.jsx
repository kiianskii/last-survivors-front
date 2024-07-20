import { selectColumns } from "../../redux/boardByID/slice";
import css from "./Tooltip.module.css";
import { useDispatch, useSelector } from "react-redux";
import { Icon } from "../../icons/Icon";
import { changeColumnThunk } from "../../redux/cards/operations";

const Tooltip = ({ children, card, showTooltip, handleBackdropClick }) => {
  const columns = useSelector(selectColumns);
  const filteredColumns = columns.filter((column) => {
    // console.log(column._id);
    // console.log(card.column_id);
    return column._id !== card.column_id;
  });
  const dispatch = useDispatch();

  return (
    <div className={css.wrapper}>
      <div className={css.container}>
        {children}
        <div className={showTooltip ? css.open : css.tooltip}>
          <ul>
            {filteredColumns.map((column) => {
              return (
                <li key={column._id}>
                  <button
                    type="button"
                    onClick={() => {
                      dispatch(
                        changeColumnThunk({
                          _id: card._id,
                          cardsData: {
                            board_id: card.board_id,
                            column_id: column._id,
                            oldColumn_id: card.column_id,
                          },
                        })
                      );
                    }}
                  >
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
    </div>
  );
};

export default Tooltip;
