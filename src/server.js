//Importo as config do express
const app = require('./config/custom-express');
//Defino a porta onde aplicação vai rodar
let port = 3000;

//Define a porta que será usada e starta o servidor
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})
