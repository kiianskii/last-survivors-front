import { useDispatch, useSelector } from "react-redux";
import AddColumnBtn from "../../components/AddColumnBtn/AddColumnBtn";
import { selectColumns } from "../../redux/boardByID/slice";
import ColumnList from "../../components/ColumnList/ColumnList";

import { useEffect, useState } from "react";
import { fetchColumnsThunk } from "../../redux/boardByID/operations";
import { boardsSelector } from "../../redux/boards/slice";
import s from "./ScreensPage.module.css";
import { useParams } from "react-router-dom";

function ScreensPage() {
  const boards = useSelector(boardsSelector);
  const dispatch = useDispatch();
  const { boardId } = useParams();

  const [board, setBoardId] = useState(null);

  const index = boards.findIndex((board) => board._id === boardId);

  useEffect(() => {
    if (boards.length > 0) {
      setBoardId(boardId);
    }
  }, [boards, boardId]);

  useEffect(() => {
    if (board) {
      dispatch(fetchColumnsThunk(boardId));
    }
  }, [dispatch, boardId, board]);

  const columns = useSelector(selectColumns);

  // const filter = {
  //   board_id: "66983076e09faa82544602e9",
  //   credentials: { priority: "High" },
  // };

  return (
    <div className={s.wrap}>
      <h2 className={s.title}>{boards[index]?.name}</h2>
      <div className={s.wrapper}>
        {columns
          ? columns.map((column) => {
              return <ColumnList key={column._id} column={column} />;
            })
          : ""}
        <AddColumnBtn />
        {/* <button
          className={s.btn}
          onClick={() => {
            dispatch(filterColumnThunk(filter));
          }}
        >
          Send Filter
        </button>
        <button
          className={s.btn}
          onClick={() => {
            dispatch(fetchColumnsThunk(boardId));
          }}
        >
          Reset Filter
        </button> */}
      </div>
    </div>
  );
}

export default ScreensPage;
