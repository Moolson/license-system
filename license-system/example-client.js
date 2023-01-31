const axios = require('axios');
const config = require('./client.config.json')

axios.get(`http://localhost:3000/license/check/${config.licenseid}`).then(res => {
    res = res.data
    console.log(res)
    if(res.works == true){
        console.log('Licencja jest aktywna')
    } else {
        console.log("Licencja nie istnieje, bądź wygasła")
    }
});