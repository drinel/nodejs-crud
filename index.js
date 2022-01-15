const express = require('express');

const server = express();

server.use(express.json());

const cursos = ["Fullstack", "Back-End", "Front-End"];

//Retornar curso

server.get('/cursos/:index', (req,res)=>{
    const {index} = req.params;

    return res.json(cursos[index]);
})

//Retornar todos

server.get('/cursos', (req, res)=>{
    return res.json(cursos);
})

//Criar curso
server.post('/cursos', (req, res)=>{
    const {name} = req.body;
    cursos.push(name);
     
    return res.json(cursos);
})

server.put('/cursos/:index', (req, res)=>{
    const {index} = req.params;
    const {name} = req.body;

    cursos[index] = name;

    return res.json(cursos);
})

server.delete('/cursos/:index', (req, res)=>{
    const {index} = req.params

    res.json({message: "Deletado Curso " + cursos[index]});
    cursos.splice(index, 1);

    return res.json();
})

server.listen(3000);