export const submitAlterarAction = (data) => {
  console.log(data);
  let url = "http://localhost:4000/linguagens/:_id ";
  fetch(url, {
    method: "PUT",
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
