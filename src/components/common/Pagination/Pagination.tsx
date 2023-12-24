import React, { FC, useState } from "react";
import s from "./Pagination.module.css";

type PaginationPropsType = {
  totalUsersCount: number;
  pageSize: number;
  currentPage: number;
  changePageNumber: (pageNumber: number) => void;
  portionSize?: number;
};

export const Pagination: FC<PaginationPropsType> = ({
  totalUsersCount,
  pageSize,
  changePageNumber,
  currentPage,
  portionSize = 10,
}) => {
  const [portionNumber, setPortionNumber] = useState(1);
  const pagesCount = Math.ceil(totalUsersCount / pageSize);

  let portionEndNumber = 0;
  let portionStartNumber = 0;
  let portionsCount = 0;

  if (pagesCount <= portionSize) {
    portionStartNumber = 1;
    portionEndNumber = pagesCount;
  } else {
    portionsCount = Math.ceil(pagesCount / portionSize);
    portionEndNumber = portionsCount === portionNumber ? pagesCount : portionNumber * portionSize;
    portionStartNumber = portionNumber * portionSize - (portionSize - 1);
  }
  const pagesToShow = [];
  for (let i = portionStartNumber; i <= portionEndNumber; i++) {
    pagesToShow.push(i);
  }

  const choosePrevPortion = () => {
    setPortionNumber((prevState) => prevState - 1);
  };

  const chooseNextPortion = () => {
    setPortionNumber((prevState) => prevState + 1);
  };

  return (
    <div>
      {portionStartNumber > 1 && <button onClick={choosePrevPortion}>prev</button>}
      {pagesToShow.map((p) => {
        return (
          <span key={p} className={currentPage === p ? s.selectedPage : s.page} onClick={() => changePageNumber(p)}>
            {p}
          </span>
        );
      })}
      {portionsCount !== portionNumber && <button onClick={chooseNextPortion}>next</button>}
    </div>
  );
};
