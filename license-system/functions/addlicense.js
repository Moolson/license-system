const connection = require("../database/database");

function addlicense(req, res){
  const license = req.body.license;
  const licensetype = req.body.licensetype
  const owner = req.body.owner
  const expires = req.body.expires
    connection.query(`INSERT INTO licenses(license, type, owner, expires) VALUES(?, ?, ?, ?)`, [license, licensetype, owner, expires], function(err, result){
        if(err) throw err;
        if(!req.body.licensetype || !req.body.owner || !req.body.expires){
          return res.json({error: "brak jakiegoś pola"})
        } 
        res.json({licenseid: req.body.license})
    })
}
module.exports = addlicense
