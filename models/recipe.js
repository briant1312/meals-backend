const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    origin: {
        type: String,
        // TODO: add enum for each region or create lookup table
    },
    ingredients: [{
        type: Schema.Types.ObjectId,
        ref: "Ingredient"
    }],
    flavorProfile: {
        type: String
    },
    spiceLevel: {
        type: Number,
        min: 1,
        max: 5
    }
})

module.exports = mongoose.model("Recipe", recipeSchema);
