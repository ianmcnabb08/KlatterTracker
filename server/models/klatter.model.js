const mongoose = require('mongoose');
const KlatterSchema = new mongoose.Schema({
    volume: { type: String },
    month: { type: String },
    year: { type: String },
    issue: { type: String }
}, { timestamps: true });
module.exports = mongoose.model('Klatter', KlatterSchema);

