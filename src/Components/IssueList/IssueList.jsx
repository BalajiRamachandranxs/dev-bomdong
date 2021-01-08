import React, { useEffect, useState } from "react";

const IssueList = (props) => {
  const [registerData, setRegisterData] = useState([]);

  const getStorage = () => {
    if (typeof Storage !== "undefined") {
      const data = JSON.parse(localStorage.getItem("allEntries"));
      const oneData = data.reduce((first, second) => {
        return first.concat(second);
      }, []);
      setRegisterData(oneData);
    }
  };

  useEffect(() => {
    getStorage();
  }, []);

  return (
    <div className="RepoList">
      {registerData &&
        registerData.map((data) => {
          return (
            <ul>
              <li>{data.name}</li>
            </ul>
          );
        })}
    </div>
  );
};

export default IssueList;
