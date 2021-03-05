const mongoose = require ('mongoose');
const Linguagens = require('../models/Linguagens');
//index, show ,store ,update,destroy
delete("/linguagens/:id",(req,res) => {
  const linguagem = Linguagem.deleteOne({_id: req.params.id})
    return res.json();  
});

module.exports = {
  async store(req,res){
    //If dedicado a retornar mensagem de erro
    const { nome } = req.body;
    if(await Linguagens.findOne({ nome }))
  return res.status(400).send({ error : 'Linguagem ja existe' });

    const linguagens =  await Linguagens.create(req.body);
    return res.json(linguagens);
},
  async show(req,res){
    //let variavel que pode ser modificada
    //find busca tudo que está dentro do esquema
    let linguagens = await Linguagens.find();
    return res.json(linguagens);
  },
  async delete(req,res){
    const linguagens = await linguagens.deleteOne('/linguagens/:_id');
    return res.json();
  }   
};