const monsters = require("./db.json");

module.exports = {
  generateMonster: (req, res) => {
    const message = "All good!"
      .then(() => {
        console.log(message);
        res.sendStatus(200);
      })
      .catch((err) => console.log(err));
  },
};
