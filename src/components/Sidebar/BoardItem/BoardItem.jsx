import { useDispatch } from "react-redux";
import { Icon } from "../../../icons/Icon";
import css from "./BoardItem.module.css";
import { deleteBoard } from "../../../redux/boards/operations";
import Modal from "../../Modal/Modal";
import EditBoardForm from "../EditBoardForm/EditBoardForm";
import { useToggle } from "../../../hooks/useToggle";

const BoardItem = ({ board }) => {
  const { openModal, isOpen, closeModal } = useToggle();

  const dispatch = useDispatch();
  return (
    <div className={css.board_item}>
      <Icon size={18} id={board.icon_name} className={css.icons} />
      <h1 className={css.board_name}>{board.name}</h1>
      <ul className={css.button_icon}>
        <li>
          <button className={css.button_e} type="button" onClick={openModal}>
            <Icon size={16} id="pencil" className={css.pen_icon} />
          </button>
          {isOpen && (
            <Modal title="Edit board" closeModal={closeModal}>
              <EditBoardForm closeModal={closeModal} board={board} />
            </Modal>
          )}
        </li>

        <li>
          <button
            type="button"
            className={css.button_e}
            onClick={() => dispatch(deleteBoard({ _id: board._id }))}
          >
            <Icon size={16} id="trash" className={css.pen_icon} />
          </button>
        </li>
      </ul>
    </div>
  );
};
export default BoardItem;
