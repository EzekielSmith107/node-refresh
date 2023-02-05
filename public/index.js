const generateMonster = () => {
  axios
    .get("http://localhost:4000/api/monster")
    .then((res) => {
      console.log(res);
    })
    .catch((err) => console.log(err));
};
