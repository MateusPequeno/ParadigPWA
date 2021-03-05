const mongoose = require ('mongoose');
//Schema, campos que teremos dentro do DB para linguagem
const LingSchema = new mongoose.Schema({
      nome: {
            type: String,
            unique: true,
            required: true
      },
      codigo:{ 
            type: String,
            unique: true,
            required: true
      }
      });

module.exports = mongoose.model('Linguagens',LingSchema); 