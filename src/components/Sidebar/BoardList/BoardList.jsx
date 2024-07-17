import { useSelector } from "react-redux";
import { boardsSelector } from "../../../redux/boards/slice";
import BoardItem from "../BoardItem/BoardItem";

const BoardList = () => {
  const boards = useSelector(boardsSelector);
  return (
    <div>
      {boards.map((board) => {
        return <BoardItem key={board._id} board={board} />;
      })}
    </div>
  );
};
export default BoardList;
