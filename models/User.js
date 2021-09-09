const mongoose = require("mongoose");
//unique-validateur permets d'évitée que 2 utulisateur utilise la méme adresse email
const uniqueValidator = require("mongoose-unique-validator");

const userschema = mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

userschema.plugin(uniqueValidator);

module.exports = mongoose.model("User", userschema);
