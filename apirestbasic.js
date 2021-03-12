const express = require('express'); 
const mongoose = require('mongoose');
const app = express();
app.use(express.json());
const linguagemController = require ('./src/controllers/LinguagemController');
const paradigmasController = require('./src/controllers/ParadigmasController');
mongoose.connect('mongodb+srv://user:user123@cluster1.molia.mongodb.net/testedb?retryWrites=true&w=majority',{useNewUrlParser: true,useUnifiedTopology: true});
const cors = require('cors');
const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
app.use(cors(corsOptions));


app.post('/linguagens', linguagemController.store);
app.post('/paradigmas', paradigmasController.store);
app.get('/', linguagemController.show);
app.get('/paradigmas', paradigmasController.show)
// API PARA COMUNICAR BACK END COM FRONT END API AXIOS


app.delete('/linguagens/:id', linguagemController.delete);

/*
app.delete('/parad/:id', (req, res) => {
  res.json({codigo : req.params.codigo});
});*/

app.put('/:nome', (req, res) => {
  res.json({nome : req.params.nome});
});

app.listen(4000);