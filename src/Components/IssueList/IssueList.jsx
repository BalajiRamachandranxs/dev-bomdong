import React, { useEffect, useState } from "react";
import "./IssueList.scss";
const IssueList = (props) => {
  const [issueData, setIssueData] = useState([]);
  const getStorage = () => {
    if (localStorage.getItem("data")) {
      const data = JSON.parse(localStorage.getItem("data"));
      // const oneData = data.reduce((firstData, secondData) => {
      //   return firstData.concat(secondData);
      // }, []);
      setIssueData(data);
    }
  };

  useEffect(() => {
    getStorage();
  }, []);

  return (
    <div className="IssueList">
      {!issueData.length ? (
        <div>등록된 Repository가 없습니다</div>
      ) : (
        issueData.map((data) => {
          return (
            data && (
              <ul className="repo_list">
                <li>{data.title}</li>
                <li>{data.body}</li>
                <li>{data.url}</li>
              </ul>
            )
          );
        })
      )}
    </div>
  );
};

export default IssueList;
