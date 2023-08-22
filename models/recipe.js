const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// do we want nutrition facts??
// calories, carbs, fat, protein
// nutrition label

// flavor profile??
// spice level??
// 1 - 5


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
        enum: []
    },
    // just need to know what ingredients are in the dish
    ingredients: [{
        // name or ingredient??
        _ingredient: {type: mongoose.Schema.Types.ObjectId, ref: "Ingredient"},
        qty: {
            type: Number,
            required: true
        },
        unit: {
            type: Number,
            required: true
        }
    }],
})

module.exports = mongoose.model("Recipe", recipeSchema);
