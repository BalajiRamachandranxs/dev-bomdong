import React, { useEffect, useState } from "react";
import RepoBox from "../Components/repobox";
import { handleFetch } from "../utills/index";

const Main = () => {
  const [repoData, setRepoData] = useState([]);

  const updateRepoData = (data) => {
    setRepoData(data);
  };

  useEffect(() => {
    handleFetch(updateRepoData);
  }, []);

  return repoData.map((obj) => <RepoBox name={obj.name} />);
};

export default Main;
