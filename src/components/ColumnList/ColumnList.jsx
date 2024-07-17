import AddAnotherCard from "../AddAnotherCard/AddAnotherCard";
import CardsList from "../CardsList/CardsList";
import ColumnItem from "../ColumnItem/ColumnItem";
import s from "./ColumnList.module.css";

function ColumnList({ column }) {
  const cards = column.cards;
  return (
    <div className={s.wrapper}>
      <ColumnItem column={column} />
      <CardsList cards={cards} />
      <AddAnotherCard column={column} />
    </div>
  );
}

export default ColumnList;
