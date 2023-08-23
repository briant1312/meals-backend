const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ingredientSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    origin: {
        type: String
    },
    taste: {
        type: String
    }
})

module.exports = mongoose.model("Ingredient", ingredientSchema);
