const getBtn = document.getElementById("get-btn");
const postBtn = document.getElementById("post-btn");

const sendHttpReq = async (method, url, data) => {
  const res = await fetch(url, {
    method,
    body: JSON.stringify(data),
    headers: data ? { "content-type": "application/json" } : {},
  });
  if (res.status >= 400) {
    return res.json().then((errResData) => {
      const error = new Error("Something went wrong");
      error.data = errResData;
      throw error;
    });
  }
  return await res.json();
};

const getData = () => {
  sendHttpReq("GET", "https://reqres.in/api/users").then((resData) => {
    console.log(resData.data);
  });
};

const sendData = () => {
  sendHttpReq("POST", "https://reqres.in/api/register", {
    email: "eve.holt@reqres.in",
    // password: "pistol",
  })
    .then((resData) => {
      console.log(resData);
    })
    .catch((err) => {
      console.log(err);
    });
};

getBtn.addEventListener("click", getData);
postBtn.addEventListener("click", sendData);
