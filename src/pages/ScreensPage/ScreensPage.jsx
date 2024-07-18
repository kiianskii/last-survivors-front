import { useDispatch, useSelector } from "react-redux";
import AddAnotherCard from "../../components/AddAnotherCard/AddAnotherCard";
import AddColumnBtn from "../../components/AddColumnBtn/AddColumnBtn";
import CardsList from "../../components/CardsList/CardsList";
import EditUserForm from "../../components/EditUserForm/EditUserForm";
import Modal from "../../components/Modal/Modal";
import { useToggle } from "../../hooks/useToggle";
import { selectColumns } from "../../redux/boardByID/slice";
import ColumnList from "../../components/ColumnList/ColumnList";
import { useParams } from "react-router-dom";

import { useEffect, useState } from "react";
import { fetchColumnsThunk } from "../../redux/boardByID/operations";
import { boardsSelector } from "../../redux/boards/slice";

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
  }, [dispatch, boardId]);

  const columns = useSelector(selectColumns);
  const classname = "class";
  return (
    <>
      {columns
        ? columns.map((column) => {
            return <ColumnList key={column._id} column={column} />;
          })
        : ""}
      <AddColumnBtn />
      <CardsList />
      <AddAnotherCard />
      <button onClick={openModal}>Update user</button>
      {isOpen && (
        <Modal title="Edit profile" closeModal={closeModal} classname={classname}>
          <EditUserForm closeModal={closeModal} />
        </Modal>
      )}
    </>
  );
}

export default ScreensPage;
