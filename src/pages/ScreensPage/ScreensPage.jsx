import { useSelector } from "react-redux";
import AddAnotherCard from "../../components/AddAnotherCard/AddAnotherCard";
import AddColumnBtn from "../../components/AddColumnBtn/AddColumnBtn";
import CardsList from "../../components/CardsList/CardsList";
import EditUserForm from "../../components/EditUserForm/EditUserForm";
import Modal from "../../components/Modal/Modal";
import { useToggle } from "../../hooks/useToggle";
import { selectColumns } from "../../redux/boardByID/slice";
import ColumnList from "../../components/ColumnList/ColumnList";

function ScreensPage() {
  const { openModal, closeModal, isOpen } = useToggle();

  const columns = useSelector(selectColumns);

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
        <Modal title="Edit profile" closeModal={closeModal}>
          <EditUserForm closeModal={closeModal} />
        </Modal>
      )}
    </>
  );
}

export default ScreensPage;
