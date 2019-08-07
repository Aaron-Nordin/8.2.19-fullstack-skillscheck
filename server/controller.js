module.exports = {
  getHouses: (req, res) => {
    const dbInstance = req.app.get("db");
    dbInstance
      .get_houses()
      .then(allHouses => {
        res.status(200).send(allHouses);
      })
      .catch(err => {
        res.sendStatus(500);
      });
  },

  addHouse: async (req, res) => {
    const { name, address, city, state, zip } = req.body;
    let db = req.app.get("db");
    let house = await db.add_house([name, address, city, state, zip]);
    res.status(201).send(house);
  },

  deleteHouse: async (req, res) => {
    console.log(req.params.id)
    const { id } = req.params;
    let db = req.app.get("db");
    let house = await db.delete_house({id});
    res.status(200).send(house);
  }
};
