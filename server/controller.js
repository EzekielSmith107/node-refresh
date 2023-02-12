const monsters = require("./db.json");

module.exports = {
  generateMonster: (req, res) => {
    let monsterIndex = Math.floor(Math.random() * monsters.length);
    let monster = monsters[monsterIndex];
    res.status(200).send(monster);
  },
};
