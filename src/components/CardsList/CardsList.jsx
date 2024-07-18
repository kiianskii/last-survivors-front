import CardItem from "../CardItem/CardItem";
import css from "./CardsList.module.css";

const CardsList = ({ cards }) => {
  return (
    <ul className={css.card_list}>
      {cards.map((card) => {
        return <CardItem key={card._id} card={card} />;
      })}
    </ul>
  );
};

export default CardsList;
