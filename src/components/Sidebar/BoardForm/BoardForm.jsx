import css from "./BoardForm.module.css";

import BoardFormModal from "./BoardFormModal";
import { useToggle } from "../hooks/useToggle";
import { useDispatch, useSelector } from "react-redux";
import {
  createBoard,
  deleteBoard,
  editBoard,
} from "../../../redux/boards/operations";
import { boardsSelector } from "../../../redux/boards/slice";

import sprite from "../../../icons/sprite.svg";
import { Icon } from "../../../icons/Icon";

function BoardForm() {
  const { openModal, isOpen, closeModal } = useToggle();
  const dispatch = useDispatch();
  const boards = useSelector(boardsSelector);

  const handleCreateBoard = (formData) => {
    dispatch(createBoard(formData));
    closeModal();
  };

  const handleEditBoard = (formData) => {
    dispatch(editBoard(formData));
  };

  const handleDeleteBoard = (id) => {
    dispatch(deleteBoard(id));
  };
  const openEditModal = (board) => {
    openModal();
    handleEditBoard(board);
  };

  return (
    <>
      <h1 className={css.boards}>My boards</h1>
      <div className={css.create_board}>
        <p className={css.create}>Create a new board</p>
        <button onClick={openModal} className={css.button_plus}>
          <Icon size={20} id="plus" className={css.plus} />
        </button>
        {isOpen && (
          <BoardFormModal
            onSubmit={handleCreateBoard}
            onClose={closeModal}
            initialState={{
              name: "",
              icon_name: "icon1",
              background_url: "none",
            }}
          />
        )}
      </div>

      {boards && boards.length > 0 ? (
        boards.map((board) => (
          <div key={board._id} className={css.board_item}>
            <Icon size={18} id={board.icon_name} className={css.icons} />
            <p className={css.create_p}>{board.name}</p>

            <ul className={css.button_icon}>
              <li>
                <button
                  className={css.button_e}
                  onClick={() => openEditModal(board)}
                >
                  <Icon size={16} id="pencil" className={css.pen_icon} />
                </button>
              </li>

              <li>
                <button
                  className={css.button_e}
                  onClick={() => handleDeleteBoard(board._id)}
                >
                  <Icon size={16} id="trash" className={css.pen_icon} />
                </button>
              </li>
            </ul>
          </div>
        ))
      ) : (
        <p>...</p>
      )}
    </>
  );
}
export default BoardForm;
