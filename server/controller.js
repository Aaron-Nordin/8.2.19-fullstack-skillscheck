module.exports ={
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
    }
}