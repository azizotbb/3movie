import React from "react";
import ReactPaginate from "react-paginate";

export default function Pagination({ getPageMovie, numOfPage }) {
  const handlePageClick = (data) => {
    getPageMovie(data.selected + 1);
  };

  const pageCount = numOfPage;
  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel="next >"
      onPageChange={handlePageClick}
      pageRangeDisplayed={2}
      marginPagesDisplayed={2}
      pageCount={pageCount}
      previousLabel="< previous"
      renderOnZeroPageCount={null}
      containerClassName="pagination justify-content-center py-3 "
      nextClassName="border-paginate "
      pageClassName="page-item  "
      previousClassName=" border-paginate"
      nextLinkClassName="page-link"
      pageLinkClassName=" page-link "
      previousLinkClassName="page-link"
      breakClassName="page-item"
      breakLinkClassName="page-link "
    />
  );
}
