import express from "express";

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
    res.send("Boas-vindas à Central de informações da Escola.");
});


app.get('/status', (req, res) => {
    res.json({
        status : 'Online',
        mensagem : 'O servidor está online'
    });
});



app.get('/escola', (req, res) => {
    let escola = ({
        "nome" : "Escola Técnica",
        "cidade" : "São Paulo",
        "tipo" : "Ensino Técnico"
    });
    res.json(escola)
});

app.get('/cursos', (req, res) => {
    const cursos = [
        { "id" : 1, "nome": "Desenvolvimento de Sistemas" },
        { "id" : 2, "nome": "Redes de Computadores" },
        { "id" : 3, "nome": "Administração" }
    ];
    res.json(cursos);
});


app.get('/professor', (req, res) => {
    let professor = {
    "nome" : "Thiago Santos Silva",
    "disciplina" : "Design de Games"
    }
    res.json(professor);
});


app.get('/ajuda', (req, res) => {
    const ajuda = [
    'Rotas Disponiveis',
    '/  =  Página Inicial da escola',
    '/ Status =  Remove uma mensagem do status do servidor',
    '/ escola =  Devolve um objeto com o nome, cidade e tipo de instituição da escola',
    '/ cursos =  Devolve um array JSON com menos 3 cursos',
    '/ professor =  Devolve devolver JSON com nome e disciplina. Utilize dados fictícios',
    '/ ajuda =  Devolve um texto explicando quais rotas o sistema disponibiliza e para que servem',
    '/ requisicao =  retorna um JSON com o método HTTP utilizado, o caminho da requisição e uma mensagem confirmando que a solicitação foi recebida'
];
    res.send(ajuda);
});

app.get('/requisicao', (req, res) => {
    return res.json({
        metodo: req.method,
        caminho: req.path,
        mensagem: 'Solicitação recebida com sucesso!'
    });
});



app.listen(PORT, ( ) =>{
    console.log(`Servidor em http://localhost:${PORT}`);
});