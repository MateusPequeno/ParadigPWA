export const submitInserirParadAction = (data) => {
  console.log(data);
  let url = "http://localhost:4000/paradigmas";
  fetch(url, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
    });
};
