import { useSelector } from "react-redux";
import { selectCards } from "../../redux/cards/slice";
import CardItem from "../CardItem/CardItem";

const CardsList = () => {
  const cards = useSelector(selectCards);
  return (
    <ul>
      {cards.map((card) => {
        return <CardItem key={card._id} card={card} />;
      })}
    </ul>
  );
};

export default CardsList;
