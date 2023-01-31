const checkifexists = require('./licensecheck.js')
const addlicense = require('./addlicense.js')
module.exports = {
    licensecheck: function(req, res) {
        const check = req.params.check;
        checkifexists(req, res)
    },
    panel: function(req, res) {
        res.sendFile('/public/example-panel.html', { root: '.' });
    },
    createlicense: function(req, res) {
        addlicense(req, res)
    }
}