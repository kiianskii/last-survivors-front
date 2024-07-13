import { useToggle } from "../../hooks/useToggle";
import { Icon } from "../../icons/Icon";
import AddCardForm from "../AddCardForm/AddCardForm";
import Modal from "../Modal/Modal";
import css from "./AddAnotherCard.module.css";

const AddAnotherCard = () => {
  const { openModal, closeModal, isOpen } = useToggle();
  return (
    <>
      <button type="button" onClick={openModal}>
        <div>
          <Icon size={14} id="plus" className={css.icon} />
        </div>
        <p>Add another card</p>
      </button>
      {isOpen && (
        <Modal title="Add card" closeModal={closeModal}>
          <AddCardForm closeModal={closeModal} />
        </Modal>
      )}
    </>
  );
};

export default AddAnotherCard;
