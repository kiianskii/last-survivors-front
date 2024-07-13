import { useDispatch } from "react-redux";
import { Icon } from "../../icons/Icon";
import { deleteCardThunk } from "../../redux/cards/operations";

const CardItem = ({ card }) => {
  const dispatch = useDispatch();
  return (
    <li>
      <h4>{card.title}</h4>
      <p>{card.description}</p>
      <div>
        <div>
          <p>Priority</p>
          <div></div>
          <p>{card.priority}</p>
        </div>
        <div>
          <p>Deadline</p>
          <div></div>
          <p>{card.deadline}</p>
        </div>
        <ul>
          <li></li>
          <li>
            <button type="button">
              <Icon size={16} id={"done"} />
            </button>
          </li>
          <li>
            <button type="button">
              <Icon size={16} id={"pencil"} />
            </button>
          </li>
          <li>
            <button
              type="button"
              onClick={() => {
                const payload = {
                  _id: card._id,
                  column_id: card.column_id,
                  board_id: card.board_id,
                };

                console.log(payload);
                dispatch(
                  deleteCardThunk({
                    _id: card._id,
                    column_id: card.column_id,
                    board_id: card.board_id,
                  })
                );
              }}
            >
              <Icon size={16} id={"trash"} />
            </button>
          </li>
        </ul>
      </div>
    </li>
  );
};

export default CardItem;
