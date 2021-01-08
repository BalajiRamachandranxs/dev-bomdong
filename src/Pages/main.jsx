import React, { useEffect, useState, useCallback } from "react";
import IssueList from "../Components/IssueList/IssueList.jsx";
import { handleFetch } from "../utills/index";
import "./Main.scss";

const Main = () => {
  const [repoData, setRepoData] = useState([]);
  const [inputData, setInputData] = useState([]);
  const searchData = repoData.filter((data) => data.name.toLowerCase().includes(inputData));

  const updateRepoData = (data) => {
    setRepoData(data);
  };

  const saveInputData = (e) => {
    const inputValue = e.target.value;
    setInputData(inputValue);
  };

  const registerRepo = (e) => {
    let existingData = JSON.parse(localStorage.getItem("allEntries"));
    if (existingData == null) existingData = [];

    let entry = repoData.filter((data) => data.name.includes(e.target.name));
    localStorage.setItem("entry", JSON.stringify(entry));
    existingData.push(entry);
    localStorage.setItem("allEntries", JSON.stringify(existingData));
    window.location.replace("/main");
    alert("Repository 등록이 완료되었습니다.");
  };

  useEffect(() => {
    handleFetch(updateRepoData);
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
                <button name={data.name} onClick={registerRepo}>
                  등록
                </button>
              </li>
            ))}
          </ul>
        </section>

        <section className="repo_register">
          <h1 className="repo_register_header">등록한 Repository Issue 모아보기</h1>
          <IssueList />
        </section>
      </div>
    </div>
  );
};

export default Main;
