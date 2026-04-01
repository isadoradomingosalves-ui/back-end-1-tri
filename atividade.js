/*Imagine que você abriu uma loja:
1) Crie o nome de 10 produtos e armazene em uma lista;
2) Crie outra lista para armazenar o preço de cada produto.
3) Crie uma função para mostrar o estoque, mostrando o nome da cada produto e o seu preço.
4) Crie uma função que adiciona um novo produto (e consequentemente um novo preço)
5) Crie uma função que remove um produto da lista recebendo seu índice.
6) EXECUTE AS FUNÇÕES CRIADAS NA SEGUINTE ORDEM:
    - mostra estoque
    - adiciona produto
    - mostra estoque
    - remove um elemento pelo índice
    - mostra estoque
*/

let produtos = ["arroz","feijão","óleo","açúcar","farinha","fermento","margarina","requeijão","nescau","pão"];
 
  let precos = [10.99,9.50,10.90,12.00,8.00,2.50,6.00,10.00,7.90,11.20];
 
  function mostraEstoque() {
    console.log(" Estoque do mrcado ");
    for(let i = 0; i < produtos.length; i++) {
      console.log(`${i}. ${produtos[i]} — R$ ${precos[i].toFixed(2)}`);
    }
    console.log("*******************************");
  }
 

  function adicionaProduto(nome, preco) {
    produtos.push(nome);
    precos.push(preco);
    console.log(`Produto "${nome}" adicionado com sucesso!`);
  }
 
  function removeProduto(indice) {
    if(indice < 0 || indice >= produtos.length) {
      console.log("Índice inválido! Nenhum produto removido.");
      return;
    }
    const removido = produtos.splice(indice, 1);
    precos.splice(indice, 1);
    console.log(`Produto "${removido}" removido com sucesso!`);
  }

  mostraEstoque();
 
  adicionaProduto("azeite virgem ", 11,90);

  mostraEstoque();
 
  removeProduto(3);
 
  mostraEstoque();