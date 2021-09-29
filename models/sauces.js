const mongoose = require("mongoose");

//schéma de données qui contient les champs souhaités pour chaque sauce,
//indique leur type ainsi que leur caractère (obligatoire ou non)
const sauceSchema = mongoose.Schema({
  userId: { type: String, required: true },
  name: { type: String, required: true },
  manufacturer: { type: String, required: true },
  description: { type: String, required: true },
  mainPepper: { type: String, required: true },
  imageUrl: { type: String, required: true },
  heat: { type: Number, required: true },
  likes: { type: Number, required: false, default: 0 },
  dislikes: { type: Number, required: false, default: 0 },
  usersLiked: { type: ["String <userId>"], required: false },
  usersDisliked: { type: ["String <userId>"], required: false },
});

//ensuite, nous exportons ce schéma en tant que modèle Mongoose appelé « sauce »,
//le rendant par là même disponible pour notre application Express.
module.exports = mongoose.model("sauce", sauceSchema);
