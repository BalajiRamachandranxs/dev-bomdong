import React from "react";
import "./Paging.scss";
import Pagination from "react-js-pagination";

const Paging = props => {
  const { postPerPage, pagination, currentPage, issueData } = props;
  const count = issueData.length;
  const totalPageCount = Math.ceil(issueData.length / postPerPage);

  return (
    <Pagination
      activePage={currentPage}
      itemsCountPerPage={postPerPage}
      totalItemsCount={count}
      pageRangeDisplayed={totalPageCount}
      prevPageText={"‹"}
      nextPageText={"›"}
      onChange={pagination}
    />
  );
};

export default Paging;
