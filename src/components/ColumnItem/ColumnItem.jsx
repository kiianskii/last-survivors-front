import { useDispatch } from "react-redux";
import { Icon } from "../../icons/Icon";
import css from "./ColumnItem.module.css";
import { deleteColumnThunk } from "../../redux/boardByID/operations";
import { useToggle } from "../../hooks/useToggle";
import Modal from "../Modal/Modal";
import EditColumnForm from "../EditColumnForm/EditColumnForm";

function ColumnItem({ column }) {
  const dispatch = useDispatch();
  const { openModal, closeModal, isOpen } = useToggle();

  const credentials = {
    id: column._id,
  };

  return (
    <div className={css.column_wrapper}>
      <h2 className={css.title}>{column.title}</h2>
      <ul className={css.wrap}>
        <li className={css.icon_list_item}>
          <button className={css.icon_btn} type="button" onClick={openModal}>
            <Icon size={16} id={"pencil"} className={css.icon} />
          </button>
          {isOpen && (
            <Modal title="Edit column" closeModal={closeModal}>
              <EditColumnForm closeModal={closeModal} column={column} />
            </Modal>
          )}
        </li>
        <li className={css.icon_list_item}>
          <button
            type="button"
            className={css.icon_btn}
            onClick={() => {
              dispatch(deleteColumnThunk(credentials));
            }}
          >
            <Icon size={16} id={"trash"} className={css.icon} />
          </button>
        </li>
      </ul>
    </div>
  );
}

export default ColumnItem;
