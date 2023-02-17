const monsterContainer = document.getElementById("monster-container");

function generateMonster() {
  axios.get("http://localhost:4000/api/monster/").then((res) => {
    console.log(res.data);
    createProfile(res.data);
  });
}

function createProfile(data) {
  const monsterCard = document.createElement("div");
  monsterCard.classList.add("monster-card");

  console.log(data.name);
  console.log(data.imageUrl);
  monsterCard.innerHTML = `<img alt=${data.name} src=${data.imageUrl} />
  <p class='monster-name'>${data.name}</p>`;

  if (monsterContainer.hasChildNodes) {
    monsterContainer.removeChild(monsterContainer.firstChild);
    monsterContainer.appendChild(monsterCard);
  } else {
    monsterContainer.appendChild(monsterCard);
  }
}

const magicButton = document.getElementById("magic-button");

magicButton.addEventListener("click", generateMonster);
