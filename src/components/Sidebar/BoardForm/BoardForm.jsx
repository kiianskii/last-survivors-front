import css from "./BoardForm.module.css";

import BoardFormModal from "./BoardFormModal";
import { useToggle } from "../hooks/useToggle";
import { useDispatch, useSelector } from "react-redux";
import {
  createBoard,
  deleteBoard,
  editBoard,
} from "../../../redux/boards/operations";

function BoardForm() {
  const { openModal, isOpen, closeModal, initialState } = useToggle();
  const dispatch = useDispatch();
  const boards = useSelector((state) => state.boards?.boards || []);

  const handleCreateBoard = (formData) => {
    dispatch(createBoard(formData));
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
        <button onClick={openModal}>+</button>
        {isOpen && (
          <BoardFormModal
            onSubmit={handleCreateBoard}
            onClose={closeModal}
            initialState={
              initialState || { title: "", icon: "icon1", background: "none" }
            }
          />
        )}

        <div>
          {boards.map((board) => (
            <div key={board.id} className="board-item">
              <p>{board.title}</p>
              <button onClick={() => openEditModal(board)}>Edit</button>
              <button onClick={() => handleDeleteBoard(board.id)}>
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
export default BoardForm;
