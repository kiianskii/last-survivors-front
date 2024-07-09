import css from "./BoardForm.module.css";

import BoardFormModal from "./BoardFormModal";
import { useToggle } from "../hooks/useToggle";
import { useDispatch } from "react-redux";
import { createBoard } from "../../../redux/boards/operations";
function BoardForm() {
  const { openModal, isOpen, closeModal } = useToggle();
  const dispatch = useDispatch();
  const handleCreateBoard = (formData) => {
    dispatch(createBoard(formData));
  };
  return (
    <>
      <h1 className={css.boards}>My boards</h1>
      <div className={css.create_board}>
        <p className={css.create}>Create a new board</p>
        <button onClick={openModal}>+</button>
        {isOpen && (
          <BoardFormModal onSubmit={handleCreateBoard} onClose={closeModal} />
        )}
      </div>
    </>
  );
}
export default BoardForm;
