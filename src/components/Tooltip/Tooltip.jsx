import { selectColumns } from "../../redux/boardByID/slice";
import css from "./Tooltip.module.css";
import { useDispatch, useSelector } from "react-redux";
import { Icon } from "../../icons/Icon";
import { changeColumnThunk } from "../../redux/cards/operations";
import { useEffect, useRef } from "react";

const Tooltip = ({ children, card, showTooltip, setShowTooltip }) => {
  const columns = useSelector(selectColumns);
  const filteredColumns = columns.filter((column) => {
    return column._id !== card.column_id;
  });
  const tooltipRef = useRef(null);
  useEffect(() => {
    if (!showTooltip) return;

    const handleClickOutside = (e) => {
      if (tooltipRef.current && !tooltipRef.current.contains(e.target)) {
        setShowTooltip(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showTooltip, setShowTooltip]);

  const dispatch = useDispatch();

  return (
    <div className={css.wrapper}>
      <div className={css.container} ref={tooltipRef}>
        {children}
        <div className={showTooltip ? css.open : css.tooltip}>
          <ul className={css.list}>
            {filteredColumns.map((column) => {
              return (
                <li key={column._id}>
                  <button
                    type="button"
                    className={css.btn}
                    onClick={() => {
                      dispatch(
                        changeColumnThunk({
                          _id: card._id,
                          cardsData: {
                            board_id: card.board_id,
                            column_id: column._id,
                            oldColumn_id: card.column_id,
                          },
                        }),
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
