const sendData = (destination, dataForSend) => {
  console.log(dataForSend);
  return fetch(destination, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(dataForSend),
  })
    .then((response) => console.log(response))
    .catch((error) => console.log(error));
};

const getData = (sourse) => {
  return fetch(sourse, {
    method: "GET",
  })
    .then((response) => response.json())
    .then((data) => {
      sendData("https://jsonplaceholder.typicode.com/posts", data);
    })
    .catch((error) => console.log(error));
};

getData("db.json");
