import { useToggle } from "../../hooks/useToggle";
import Modal from "../Modal/Modal";

const AddAnotherCard = () => {
  const { openModal, closeModal, isOpen } = useToggle();
  return (
    <>
      <button type="button" onClick={openModal}>
        <div>icon</div> <p>Add another card</p>
      </button>
      {isOpen && <Modal closeModal={closeModal}>form</Modal>}
    </>
  );
};

export default AddAnotherCard;
