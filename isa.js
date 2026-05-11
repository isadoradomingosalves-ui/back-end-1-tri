const produtos = require("./produtos.json")

function mostrarESTOQUE() {
    produtos.forEach((produto)=>{
        console.log(produto.nome + 
            " - Nome: " + produto.nome + 
            " - Valor: " + produto.valor +
            " - Quantidade: " + produto.quantidade +
            " - Peso: " + produto.peso +
            " - Marca: " + produto.marca +
            " - Código: " + produto.codigo )

    })
  
}

mostrarESTOQUE()
produtos.push({
    nome: "Mangá NANA vol 11",
    valor: 20.00,
    quantidade: 100,
    peso: 200,
    marca: "Panini",
    codigo: 4213
})


console.log("##### Produtos filtrados por valor menor que 25")
const filtro = produtos.filter((produto)=> produto.valor < 25)
console.log(filtro)


console.log("##### Marca alterada para maiúsculo : #####")
const desconto = produtos.map((produto)=> {
return {...produto,marca: produto.marca.toUpperCase()}}
)
console.log(desconto)


console.log("##### Produto encontrado pelo código #####")
const encontrar = produtos.find((produto) => produto.codigo == 4213)
console.log(encontrar)


