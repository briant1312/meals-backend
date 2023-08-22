const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// not really sure what all we need here 
// need more clarification on how exactly this will be used 

const ingredientSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    // same as recipe origins
    origin: {
        type: String
    },
    taste: {
        type: String
    }
})

module.exports = mongoose.model("Ingredient", ingredientSchema);
