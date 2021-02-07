import React, { useEffect, useState } from "react";
import IssueList from "../Components/IssueList/IssueList.jsx";
import RepoList from "../Components/RepoList.jsx/RepoList.jsx";
import { handleFetch, REPO_URL, ISSUE_URL } from "../utills/index";
import "./Main.scss";

const Main = () => {
  const [repoData, setRepoData] = useState([]);
  const [inputData, setInputData] = useState([]);
  let existingName = JSON.parse(localStorage.getItem("name"));
  const searchData = repoData.filter(data => data.name.includes(inputData));
  const [issueData, setIssueData] = useState([]);
  const [repoName, setRepoName] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(5);
  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFisrtPost = indexOfLastPost - postPerPage;
  const currentPosts = issueData.slice(indexOfFisrtPost, indexOfLastPost);

  const pagination = pageNum => setCurrentPage(pageNum);

  const updateRepoData = data => {
    setRepoData(data);
  };

  const saveInputData = e => {
    const input_value = e.target.value;
    setInputData(input_value);
  };

  const updateIssueData = data => {
    let existingData = JSON.parse(localStorage.getItem("data"));
    if (existingData == null) {
      existingData = [];
    }

    if (existingData && existingName.length < 5) {
      for (let i = 0; i < data.length; i++) {
        existingData.push(data[i]);
      }
      localStorage.setItem("data", JSON.stringify(existingData));
      window.location.replace("/");
    }
  };

  const saveRepoName = e => {
    if (existingName == null) {
      existingName = [];
    }

    if (existingName && existingName.length < 4) {
      existingName.push(e.target.name);
      alert("Repository 등록이 완료되었습니다.");
      localStorage.setItem("name", JSON.stringify(existingName));
    } else if (existingName.length >= 4) {
      alert("Repository는 4개까지 등록이 가능합니다.");
    }
  };

  const registerIssue = e => {
    const repo_name = e.target.name;
    const URL = `${ISSUE_URL}/${repo_name}/issues`;

    if (existingName && existingName.includes(e.target.name)) {
      return alert("동일한 Repository는 등록이 불가합니다.");
    }
    saveRepoName(e);
    handleFetch(URL, updateIssueData);
  };

  // localstorage에 데이터 추가
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

  // localstorage에서의 데이터 변경
  const deleteIssue = e => {
    const newData = issueData.filter(
      data => e.target.name !== data.repository_url.split("/").reverse()[0]
    );
    setIssueData(newData);
    localStorage.setItem("data", JSON.stringify(newData));
  };

  const deleteRepo = e => {
    const newData = repoName.filter(data => data !== e.target.name);
    setRepoName(newData);
    localStorage.setItem("name", JSON.stringify(newData));
    deleteIssue(e);
  };

  useEffect(() => {
    handleFetch(REPO_URL, updateRepoData);
  }, []);

  useEffect(() => {
    getStorage();
  }, []);

  useEffect(() => {
    getRepoName();
  }, []);

  return (
    <div className="Main">
      <header>GitHub Issue Board</header>

      <div className="main_body">
        <section className="repo_all">
          <h1 className="repo_all_header">나의 Repository</h1>
          <input
            className="repo_all_input"
            placeholder="Repository 검색하기"
            onChange={saveInputData}
          />
          <RepoList searchData={searchData} registerIssue={registerIssue} />
        </section>

        <section className="repo_register">
          <h1 className="repo_register_header">등록한 Repository</h1>
          <IssueList
            repoName={repoName}
            issueData={issueData}
            currentPosts={currentPosts}
            postPerPage={postPerPage}
            currentPage={currentPage}
            pagination={pagination}
            deleteRepo={deleteRepo}
          />
        </section>
      </div>
    </div>
  );
};

export default Main;
