const mongoose = require ('mongoose');
//Schema, campos que teremos dentro do DB para linguagem
const ParadSchema = new mongoose.Schema({
      nomeParad: {
            type: String,
            unique: true,
            required: true
      },
      caracteristica:{ 
            type: String,
            unique: false,
            required: true
      }
      });
module.exports = mongoose.model('Paradigmas',ParadSchema); 