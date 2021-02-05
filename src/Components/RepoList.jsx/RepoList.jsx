import React from "react";
import "./RepoList.scss";

const RepoList = props => {
  const { searchData, registerIssue } = props;
  return (
    <ul className="repo_myrepo">
      {searchData.map(data => (
        <li className="repo_search">
          {data.name}
          <button
            className="repo_search_btn"
            name={data.name}
            onClick={registerIssue}
          >
            등록
          </button>
        </li>
      ))}
    </ul>
  );
};

export default RepoList;
