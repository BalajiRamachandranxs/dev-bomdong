import React, { useEffect, useState } from "react";
import "./IssueList.scss";

const IssueList = (props) => {
  const [issueData, setIssueData] = useState([]);
  const [repoName, setRepoName] = useState([]);

  const getStorage = () => {
    if (localStorage.getItem("data")) {
      const data = JSON.parse(localStorage.getItem("data"));
      setIssueData(data);
    }
  };

  const getRepoName = () => {
    if (localStorage.getItem("name")) {
      const data = JSON.parse(localStorage.getItem("name"));
      setRepoName(data);
    }
  };

  useEffect(() => {
    getStorage();
  }, []);

  useEffect(() => {
    getRepoName();
  }, []);

  return (
    <div className="IssueList">
      <div className="repo_list">
        {repoName.map((repo) => {
          return (
            <div className="repo_name_box">
              <button className="repo_name_btn">X</button>
              <p className="repo_name">{repo}</p>
            </div>
          );
        })}
      </div>

      <div>
        {!issueData.length ? (
          <p>등록된 Repository가 없습니다</p>
        ) : (
          issueData.map((data) => {
            return data ? (
              <div className="issue_list">
                <p>{data.title}</p>
                {/* <li>{data.url}</li> */}
              </div>
            ) : (
              <p className="issue_none">저장된 Issue가 없습니다.</p>
            );
          })
        )}
      </div>
    </div>
  );
};

export default IssueList;
