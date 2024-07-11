import { useToggle } from "../../hooks/useToggle";
import AddCardForm from "../AddCardForm/AddCardForm";
import Modal from "../Modal/Modal";

const AddAnotherCard = () => {
  const { openModal, closeModal, isOpen } = useToggle();
  return (
    <>
      <button type="button" onClick={openModal}>
        <div>icon</div> <p>Add another card</p>
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
