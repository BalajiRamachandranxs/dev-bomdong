import React from "react";

const RepoBox = (props) => {
  const { name } = props;
  return (
    <div className="RepoBox">
      <p>{name}</p>
    </div>
  );
};

export default RepoBox;
