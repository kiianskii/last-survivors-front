import { useSelector } from "react-redux";
import { boardsSelector } from "../../../redux/boards/slice";
import BoardItem from "../BoardItem/BoardItem";
import css from "./BoardList.module.css";

const BoardList = () => {
  const boards = useSelector(boardsSelector);
  return (
    <ul className={css.board_list}>
      {boards.map((board) => {
        return <BoardItem key={board._id} board={board} />;
      })}
    </ul>
  );
};
export default BoardList;
