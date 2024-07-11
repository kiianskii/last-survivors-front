const CardItem = ({ card }) => {
  return (
    <li>
      <h4>{card.title}</h4>
      <p>{card.description}</p>
      <div>
        <div>
          <p>Priority</p>
          <div></div>
          <p>{card.priority}</p>
        </div>
        <div>
          <p>Deadline</p>
          <div></div>
          <p>{card.deadline}</p>
        </div>
        <ul>
          <li></li>
          <li>
            <button>icon1</button>
          </li>
          <li>
            <button>icon2</button>
          </li>
          <li>
            <button>icon3</button>
          </li>
        </ul>
      </div>
    </li>
  );
};

export default CardItem;
