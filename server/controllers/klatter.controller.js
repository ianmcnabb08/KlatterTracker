const Klatter = require('../models/klatter.model');

module.exports.index = (request, response) => {
    response.json({
        message: "Hello World"
    });
};

module.exports.createKlatter = (request, response) => {

    Klatter.create(request.body) 
    .then(person => response.json(person))
    .catch(err => response.json(err));
}