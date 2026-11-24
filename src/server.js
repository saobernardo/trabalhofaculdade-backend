const app = require('./config/custom-express');

let port = 3000;

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})
