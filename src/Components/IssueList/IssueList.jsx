import React, { useEffect, useState } from "react";
import "./IssueList.scss";

const IssueList = (props) => {
  const { repoName, issueData, deleteData } = props;

  return (
    <div className="IssueList">
      <div className="repo_list">
        {!repoName.length ? (
          <p>등록된 Repository가 없습니다</p>
        ) : (
          repoName.map((repo) => {
            return (
              <ul className="repo_name_box">
                <li>
                  <button className="repo_name_btn" name={repo} onClick={deleteData}>
                    X
                  </button>
                  <span>{repo}</span>
                </li>
              </ul>
            );
          })
        )}
      </div>

      <div>
        {!issueData.length ? (
          <p>등록된 Issue가 없습니다</p>
        ) : (
          <ul>
            {issueData.map((data) => {
              return (
                data && (
                  <li className="issue_list">
                    <span>{data.repository_url.split("/").reverse()[0]}</span>
                    <span>{data.title}</span>
                  </li>
                )
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
};

export default IssueList;
