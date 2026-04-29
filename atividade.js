const mangas = [
    {
        nome: "Mangá NANA vol 1",
        valor: "R$ 24,00",
        quantidade: 707,
        peso: 200,
        marca: "Panini",
        codigo: 1234
    },
    {
        nome: "Mangá NANA vol 2",
        valor: "R$ 20,00",
        quantidade: 400,
        peso: 200,
        marca: "Panini",
        codigo: 1324
    },
    {
        nome: "Mangá NANA vol 3",
        valor: "R$ 20,00",
        quantidade: 400,
        peso: 200,
        marca: "Panini",
        codigo: 1432
    },
    {
        nome: "Mangá NANA vol 4",
        valor: "R$ 20,00",
        quantidade: 450,
        peso: 200,
        marca: "Panini",
        codigo: 2134
    },
    {
        nome: "Mangá NANA vol 5",
        valor: "R$ 20,00",
        quantidade: 350,
        peso: 200,
        marca: "Panini",
        codigo: 2314
    },
    {
        nome: "Mangá NANA vol 6",
        valor: "R$ 20,00",
        quantidade: 300,
        peso: 200,
        marca: "Panini",
        codigo: 2431
    },
    {
        nome: "Mangá NANA vol 7",
        valor: "R$ 20,00",
        quantidade: 450,
        peso: 200,
        marca: "Panini",
        codigo: 3124
    },
    {
        nome: "Mangá NANA vol 8",
        valor: "R$ 20,00",
        quantidade: 490,
        peso: 200,
        marca: "Panini",
        codigo: 3214
    },
    {
        nome: "Mangá NANA vol 9",
        valor: "R$ 20,00",
        quantidade: 500,
        peso: 200,
        marca: "Panini",
        codigo: 3412
    },
    {
        nome: "Mangá NANA vol 10",
        valor: "R$ 20,00",
        quantidade: 350,
        peso: 200,
        marca: "Panini",
        codigo: 4123
    },
]

const mangasJSON = JSON.stringify(mangas)
console.log(mangasJSON)

// Criar o arquivo
const fs = require("fs")
fs.writeFileSync("alunos.json", mangasJSON)

// Ler o arquivo
const mangasArquivo = require("./mangas.json")
console.log(mangasArquivo)

// MOSTRAR OS DADOS DO ARQUIVO ORGANIZADAMENTE
// alunosArquivo.forEach() ... etc
alunosArquivo.forEach((aluno)=>{
    console.log(mangas.nome + 
        " - Valor: " + manga.valor + 
        " - quantidade: " + manga.quantidade + 
        " - Peso: " + manga.peso + 
        " - Marca: " + manga.marca + 
        " - Codigo: " + manga.codigo)
})