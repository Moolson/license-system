const connection = require("../database/database");

function addlicense(req, res){
    connection.query(`INSERT INTO licenses(license, type, owner, expires) VALUES('${req.body.license}', '${req.body.licensetype}', '${req.body.owner}', '${req.body.expires}')`, function(err, result){
        if(err) throw err;
        if(!req.body.licensetype || !req.body.owner || !req.body.expires){
          return res.json({error: "brak jakiegoś pola"})
        } 
        res.json({licenseid: req.body.license})
    })
}
module.exports = addlicense