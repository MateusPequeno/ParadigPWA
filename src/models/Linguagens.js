const mongoose = require ('mongoose');
//Schema, campos que teremos dentro do DB para linguagem
const LingSchema = new mongoose.Schema({
      nome: {
            type: String,
            unique: true,
            required: true
      },
      caracteristica : [{
            type : String,
            unique: false,
            required: false
      }],
      paradigmas:[{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Paradigmas',
            required: false
      }],
      });
const Linguagens = mongoose.model('Linguagens',LingSchema);
module.exports = Linguagens;