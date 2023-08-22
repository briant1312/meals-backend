const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    savedRecipes: [{
        type: Schema.Types.ObjectId,
        ref: "Recipe"
    }]
})

module.exports = mongoose.model("User", userSchema);
