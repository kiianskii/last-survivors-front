import { useToggle } from "../../hooks/useToggle";
import { Icon } from "../../icons/Icon";
import AddColumnForm from "../AddColumnForm/AddColumnForm";
import Modal from "../Modal/Modal";
import css from "./AddColumnBtn.module.css";


const AddColumnBtn = () => {
  const { openModal, closeModal, isOpen } = useToggle();
  return (
    <>
      
      
      <button type="button" className={css.button} onClick={openModal}>
        <div className={css.row}> 
          <Icon size={14} id="plus" className={css.icon} />
        </div>
        <p className={css.add_title}>Add another column</p>
      </button>
      {isOpen && (
        <Modal title="Add column" closeModal={closeModal}>
          <AddColumnForm closeModal={closeModal} />
        </Modal>
      )}
    </>
  );
};

export default AddColumnBtn;
