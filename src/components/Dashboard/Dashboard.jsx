import { useSelector } from "react-redux";
import { boardsSelector } from "../../redux/boards/slice";
import { useNavigate } from "react-router-dom";
import { useToggle } from "../../hooks/useToggle";
import Modal from "../Modal/Modal";
import AddBoardForm from "../Sidebar/AddBoardForm/AddBoardForm";
import css from "./Dashboard.module.css";

function Dashboard() {
  const boards = useSelector(boardsSelector);
  const navigate = useNavigate();
  if (boards.length > 0) {
    navigate(`/${boards[0]._id}`);
  }
  const { isOpen, closeModal, openModal } = useToggle();

  return (
    <div>
      <h3>
        Before starting your project, it is essential{" "}
        <button className={css.btn} onClick={openModal}>
          to create a board
        </button>{" "}
        to visualize and track all the necessary tasks and milestones. This
        board serves as a powerful tool to organize the workflow and ensure
        effective collaboration among team members.
      </h3>
      {isOpen && (
        <Modal
          title="New board"
          closeModal={closeModal}
          classname={css.modal_class}
        >
          <AddBoardForm closeModal={closeModal} />
        </Modal>
      )}
    </div>
  );
}

export default Dashboard;