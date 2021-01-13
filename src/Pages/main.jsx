import React, { useEffect, useState } from "react";
import IssueList from "../Components/IssueList/IssueList.jsx";
import { handleFetch, REPO_URL, ISSUE_URL } from "../utills/index";
import "./Main.scss";

const Main = () => {
  const [repoData, setRepoData] = useState([]);
  const [inputData, setInputData] = useState([]);
  const searchData = repoData.filter((data) => data.name.includes(inputData));

  const updateRepoData = (data) => {
    setRepoData(data);
  };

  const saveInputData = (e) => {
    const input_value = e.target.value;
    setInputData(input_value);
  };

  const updateIssueData = (data) => {
    let existingData = JSON.parse(localStorage.getItem("data"));
    if (existingData == null) {
      existingData = [];
    }

    if (existingData && existingData.length < 4) {
      existingData.push(data[0]);
      localStorage.setItem("data", JSON.stringify(existingData));
      alert("Repository 등록이 완료되었습니다.");
    } else {
      return alert("Repository 등록은 4개까지만 가능합니다.");
    }
  };

  const registerIssue = (e) => {
    const repo_name = e.target.name;
    const URL = `${ISSUE_URL}/${repo_name}/issues`;
    handleFetch(URL, updateIssueData);
  };

  useEffect(() => {
    handleFetch(REPO_URL, updateRepoData);
  }, []);

  return (
    <div className="Main">
      <header>GitHub Issue Board</header>

      <div className="main_body">
        <section className="repo_all">
          <h1 className="repo_all_header">나의 Repository</h1>
          <input className="repo_all_input" placeholder="Repository 검색하기" onChange={saveInputData} />
          <ul>
            {searchData.map((data) => (
              <li>
                {data.name}
                <button name={data.name} onClick={registerIssue}>
                  등록
                </button>
              </li>
            ))}
          </ul>
        </section>

        <section className="repo_register">
          <h1 className="repo_register_header">등록한 Repository</h1>
          <IssueList />
        </section>
      </div>
    </div>
  );
};

export default Main;
