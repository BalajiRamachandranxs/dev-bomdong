export const USERNAME = "dev-bomdong";
export const URL = `https://api.github.com/users/${USERNAME}/repos`;

export const handleFetch = async (callback) => {
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
