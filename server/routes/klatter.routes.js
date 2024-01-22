const KlatterController = require('../controllers/klatter.controller');
module.exports = (app) => {
    app.get('/api', KlatterController.index);
    app.post('/api/klatter', KlatterController.createKlatter);
}