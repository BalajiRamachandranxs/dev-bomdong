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
      <main>
        <div className="repoAll">
          <p>나의 Repository</p>
          <input placeholder="Repository 검색하기" onChange={saveInputData} />
          <ul>
            {searchData.map((data) => (
              <li>
                {data.name}
                <button name={data.name} onClick={registerRepo}>
                  등록하기
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="repoRegister">
          <p>등록한 Repository Issue 모아보기</p>
          <IssueList />
        </div>
      </main>
    </div>
  );
};

export default Main;
