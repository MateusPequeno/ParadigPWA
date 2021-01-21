const express = require('express'); 

const app = express();
//get, put ,delete , post
app.get('/', (req, res) => {
  res.json({
    nome : "JavaScript",
    paradigma : "Orientado a objeto , imperativo e funcional",
   codigo : 0
  })
});
//parametros '/'
app.get('/parad', (req, res) => {
  res.json({codigo : req.query.codigo});
});
//route parameters. /parad/1 
app.delete('/parad/:codigo', (req, res) => {
  res.json({codigo : req.params.codigo});
});
app.put('/:nome', (req, res) => {
  res.json({nome : req.params.nome});
});
//body parameters 
app.use(express.json());
app.post('/', (req, res) => {
  res.json(req.body);
});


app.listen(4000);