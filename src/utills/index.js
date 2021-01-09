export const USERNAME = "dev-bomdong";
export const REPO_URL = `https://api.github.com/users/${USERNAME}/repos`;
export const ISSUE_URL = `https://api.github.com/repos/${USERNAME}`;

export const handleFetch = async (URL, callback) => {
  const headers = {
    Accept: "application/vnd.github.v3_json",
    Authorization: "secrets.TOKEN",
  };

  fetch(URL, {
    method: "GET",
    headers: headers,
  })
    .then((res) => res.json())
    .then((data) => callback(data));
};

export const handleIssueFetch = async (URL, callback1) => {
  const headers = {
    Accept: "application/vnd.github.v3_json",
    Authorization: "secrets.TOKEN",
  };

  fetch(URL, {
    method: "GET",
    headers: headers,
  })
    .then((res) => res.json())
    .then((data) => callback1(data));
};
