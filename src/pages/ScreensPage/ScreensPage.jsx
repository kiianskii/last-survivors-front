import AddAnotherCard from "../../components/AddAnotherCard/AddAnotherCard";
import AddColumnBtn from "../../components/AddColumnBtn/AddColumnBtn";
import CardsList from "../../components/CardsList/CardsList";
import EditUserForm from "../../components/EditUserForm/EditUserForm";
import Modal from "../../components/Modal/Modal";
import { useToggle } from "../../hooks/useToggle";

function ScreensPage() {
  const { openModal, closeModal, isOpen } = useToggle();
  return (
    <>
      <CardsList />
      <AddAnotherCard />
      <AddColumnBtn />
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
