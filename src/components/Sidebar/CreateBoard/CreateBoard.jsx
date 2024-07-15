import { useToggle } from "../../../hooks/useToggle";
import { Icon } from "../../../icons/Icon";
import Modal from "../../Modal/Modal";
import AddBoardForm from "../AddBoardForm/AddBoardForm";
import css from "./CreateBoard.module.css";

const CreateBoard = () => {
  const { isOpen, closeModal, openModal } = useToggle();
  return (
    <>
      <h1 className={css.my_boards}>My boards</h1>
      <div className={css.create_board}>
        <p className={css.text_create}>Create a new board</p>
        <button onClick={openModal} className={css.button_plus}>
          <Icon size={20} id="plus" className={css.plus} />
        </button>
        {isOpen && (
          <Modal title="New board" closeModal={closeModal}>
            <AddBoardForm closeModal={closeModal} />
          </Modal>
        )}
      </div>
    </>
  );
};

export default CreateBoard;
