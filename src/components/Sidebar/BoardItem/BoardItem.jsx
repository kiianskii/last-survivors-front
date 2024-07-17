import { useDispatch, useSelector } from "react-redux";
import { Icon } from "../../../icons/Icon";
import css from "./BoardItem.module.css";
import { deleteBoard } from "../../../redux/boards/operations";
import Modal from "../../Modal/Modal";
import EditBoardForm from "../EditBoardForm/EditBoardForm";
import { useToggle } from "../../../hooks/useToggle";
import { NavLink, useNavigate } from "react-router-dom";
import { boardsSelector } from "../../../redux/boards/slice";

const BoardItem = ({ board }) => {
  const { openModal, isOpen, closeModal } = useToggle();

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const boards = useSelector(boardsSelector);
  return (
    <li className={css.board_item}>
      <Icon size={18} id={board.icon_name} className={css.icons} />
      <NavLink to={`/${board._id}`}>
        <h1 className={css.board_name}>{board.name}</h1>
      </NavLink>

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
            onClick={() => {
              dispatch(deleteBoard({ _id: board._id }));
              navigate(`/${boards[0]._id}`);
            }}
          >
            <Icon size={16} id="trash" className={css.pen_icon} />
          </button>
        </li>
      </ul>
    </li>
  );
};
export default BoardItem;
