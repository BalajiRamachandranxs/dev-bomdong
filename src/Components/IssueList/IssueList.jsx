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
  }, [issueData]);

  return (
    <div className="IssueList">
      {!issueData.length ? (
        <div>등록된 Repository가 없습니다</div>
      ) : (
        issueData.map((data) => {
          return data ? (
            <div>
              <button>삭제하기</button>
              <ul className="repo_list">
                <li>{data.title}</li>
                <li>{data.body}</li>
                <li>{data.url}</li>
              </ul>
            </div>
          ) : (
            <div>
              <button>삭제하기</button>
              <div>저장된 Issue가 없습니다.</div>
            </div>
          );
        })
      )}
    </div>
  );
};

export default IssueList;
