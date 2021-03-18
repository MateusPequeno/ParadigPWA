export const submitDeleteParadAction = (data) => {
  console.log(data);
  let url = "http://localhost:4000/paradigmas/:_id ";
  fetch(url, {
    method: "DELETE",
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
