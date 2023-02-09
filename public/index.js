function generateMonster() {
  axios.get("http://localhost:4000/api/monster/").then((res) => {
    console.log(res);
  });
}

const magicButton = document.getElementById("magic-button");

magicButton.addEventListener("click", generateMonster);
