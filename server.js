const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());

// Simulação de banco de dados
let users = [];

// Rota para cadastro
app.post('/register', (req, res) => {
    const { nome, email, senha } = req.body;

    // Validação simples
    if (!nome || !email || !senha) {
        return res.status(400).json({ error: 'Todos os campos são obrigatórios.' });
    }

    // Verifica se o usuário já existe
    const existingUser = users.find(user => user.email === email);
    if (existingUser) {
        return res.status(400).json({ error: 'Usuário já cadastrado.' });
    }

    // Adiciona usuário ao "banco de dados"
    users.push({ nome, email, senha });
    res.status(201).json({ message: 'Usuário cadastrado com sucesso!' });
});

// Inicia o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
