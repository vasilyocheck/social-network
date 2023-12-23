import React, { FC } from "react";
import s from "./Pagination.module.css";

type PaginationPropsType = {
  totalUsersCount: number;
  pageSize: number;
  currentPage: number;
  changePageNumber: (pageNumber: number) => void;
};

export const Pagination: FC<PaginationPropsType> = ({ totalUsersCount, pageSize, changePageNumber, currentPage }) => {
  const pagesCount = Math.ceil(totalUsersCount / pageSize);
  const pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  return (
    <div>
      {pages.map((p) => {
        return (
          <span key={p} className={currentPage === p ? s.selectedPage : s.page} onClick={() => changePageNumber(p)}>
            {p}
          </span>
        );
      })}
    </div>
  );
};
