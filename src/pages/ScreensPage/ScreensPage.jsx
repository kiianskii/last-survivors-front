import { useDispatch, useSelector } from "react-redux";
import AddColumnBtn from "../../components/AddColumnBtn/AddColumnBtn";
import EditUserForm from "../../components/EditUserForm/EditUserForm";
import Modal from "../../components/Modal/Modal";
import { useToggle } from "../../hooks/useToggle";
import { selectColumns } from "../../redux/boardByID/slice";
import ColumnList from "../../components/ColumnList/ColumnList";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchColumnsThunk } from "../../redux/boardByID/operations";
import { boardsSelector } from "../../redux/boards/slice";
import s from "./ScreensPage.module.css";

function ScreensPage() {
  const { openModal, closeModal, isOpen } = useToggle();
  const boards = useSelector(boardsSelector);
  const dispatch = useDispatch();
  const { boardId } = useParams();

  const [board, setBoardId] = useState(null);

  useEffect(() => {
    if (boards.length > 0) {
      setBoardId(boardId);
    }
  }, [boards, boardId]);

  useEffect(() => {
    if (board) {
      dispatch(fetchColumnsThunk(boardId));
    }
  }, [dispatch, boardId, board]);

  const columns = useSelector(selectColumns);
  const classname = "class";
  return (
    <div>
      <div className={s.wrapper}>
        {columns
          ? columns.map((column) => {
              return <ColumnList key={column._id} column={column} />;
            })
          : ""}
        <AddColumnBtn />
      </div>
      <button onClick={openModal}>Update user</button>
      {isOpen && (
        <Modal title="Edit profile" closeModal={closeModal} classname={classname}>
          <EditUserForm closeModal={closeModal} />
        </Modal>
      )}
    </div>
  );
}

export default ScreensPage;

