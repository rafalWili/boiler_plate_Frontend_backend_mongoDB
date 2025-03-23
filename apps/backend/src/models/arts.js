const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const artSchema = new Schema({
    artName: String
});

const ArtModel = mongoose.model("Art", artSchema);

module.exports = ArtModel;
