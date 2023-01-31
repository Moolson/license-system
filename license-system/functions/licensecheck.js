const connection = require('../database/database');
function checkifexpires(result, check){
    let expires
    let works
    if(check) {
        if(Date.now() > result[0].expires) {
            expires = true;
            works = false;
        } else {
            expires = result[0].expires;
            works = true;
        }
    }
    return { works, expires }
}
function checkifexists(req, res) {
    connection.query(`SELECT * FROM licenses WHERE license = '${req.params.check}'`, function( err, result ) {
        if(err) throw err;
        if(result && result.length){
            const check = true;
            const  { works, expires } = checkifexpires(result, check)
                res.json({
                    id: result[0].id,
                    "license":result[0].license,
                    "type":result[0].type,
                    "owner": result[0].owner,
                    "expires": expires,
                    "works": works
                }) 
            } else {
            res.json({
                id: "none",
                "license":"none",
                "type":"none",
                "owner": "none",
                "expires": "none",
                "works": "none"
            })
        }
    })
}

module.exports = checkifexists;