import CardItem from "../CardItem/CardItem";
import ColumnItem from "../ColumnItem/ColumnItem";
import s from "./ColumnList.module.css";

function ColumnList(column) {
  const cards = column.cards;
  return (
    <div className={s.wrapper}>
      <ColumnItem title={column.title} />
      {cards?.map((card) => {
        return <CardItem key={card._id} card={card} />;
      })}
    </div>
  );
}

export default ColumnList;
