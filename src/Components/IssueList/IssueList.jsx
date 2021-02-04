import React from "react";
import "./IssueList.scss";

const IssueList = props => {
  const { repoName, issueData, deleteRepo } = props;

  return (
    <div className="IssueList">
      <div className="repo_list">
        {!repoName.length ? (
          <p className="repo_none">등록된 Repository가 없습니다.</p>
        ) : (
          repoName.map(repo => {
            return (
              <ul className="all_repo_name">
                <li className="repo_name_list">
                  <button
                    className="repo_name_btn"
                    name={repo}
                    onClick={deleteRepo}
                  >
                    x
                  </button>
                  <span className="repo_name">{repo}</span>
                </li>
              </ul>
            );
          })
        )}
      </div>

      <div className="issue_box">
        <h1 className="issue_header">나의 Issue</h1>
        <div className="issue_all">
          {!issueData.length ? (
            <p className="issue_none">등록된 Issue가 없습니다.</p>
          ) : (
            <ul>
              {issueData.map(data => {
                return (
                  data && (
                    <li className="issue_list">
                      <span className="issue_repo">
                        {data.repository_url.split("/").reverse()[0]}
                      </span>
                      <span
                        className="issue_title"
                        onClick={() => window.open(data.html_url, "_blank")}
                      >
                        {data.title}
                      </span>
                    </li>
                  )
                );
              })}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default IssueList;
