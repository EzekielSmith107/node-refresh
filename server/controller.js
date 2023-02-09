const monsters = require("./db.json");

module.exports = {
  // generateMonster: (req, res) => {
  //   const message = "All good!";
  //   console
  //     .log(monsters)
  //     .then(() => {
  //       console.log(message);
  //       res.sendStatus(200);
  //     })
  //     .catch((err) => console.log(err));
  // },

  generateMonster: (req, res) => {
    console.log(monsters);
    res.status(200).send(monsters);
  },
};
