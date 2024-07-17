import AddAnotherCard from "../AddAnotherCard/AddAnotherCard";
import CardItem from "../CardItem/CardItem";
import ColumnItem from "../ColumnItem/ColumnItem";
import s from "./ColumnList.module.css";

function ColumnList({ column }) {
  const cards = column.cards;
  return (
    <div className={s.wrapper}>
      <ColumnItem column={column} />
      {cards?.map((card) => {
        return <CardItem key={card._id} card={card} />;
      })}
      <AddAnotherCard column={column} />
    </div>
  );
}

export default ColumnList;
