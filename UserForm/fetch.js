const getBtn = document.getElementById("get-btn");
const postBtn = document.getElementById("post-btn");

const sendHttpReq = (method, url, data) => {
  return fetch(url, {
    method,
    body: JSON.stringify(data),
    headers: data ? { "content-type": "application/json" } : {},
  }).then((res) => {
    return res.json();
  });
};

const getData = () => {
  sendHttpReq("GET", "https://reqres.in/api/users").then((resData) => {
    console.log(resData.data);
  });
};

const sendData = () => {
  sendHttpReq("POST", "https://reqres.in/api/register", {
    email: "eve.holt@reqres.in",
    password: "pistol",
  }).then((resData) => {
    console.log(resData);
  });
};

getBtn.addEventListener("click", getData);
postBtn.addEventListener("click", sendData);
