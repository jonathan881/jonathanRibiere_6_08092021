const mongoose = require("mongoose");

//schéma de données qui contient les champs souhaités pour chaque Thing,
//indique leur type ainsi que leur caractère (obligatoire ou non)
const thingSchema = mongoose.Schema({
  name: { type: String, require: true },
  manufacturer: { type: String, require: true },
  description: { type: String, require: true },
  mainPepper: { type: String, require: true },
  imageUrl: { type: String, require: true },
  heat: { type: Number, require: true },
  likes: { type: Number, require: true },
  dislikes: { type: Number, require: true },
  usersLiked: { type: String, require: true },
  usersDisliked: { type: String, require: true },
});

//ensuite, nous exportons ce schéma en tant que modèle Mongoose appelé « Thing »,
//le rendant par là même disponible pour notre application Express.
module.exports = mongoose.model("Thing", thingSchema);
