var valorTotal = [0, 0];
var valorproduto = [50.0, 30.0];
var qtd = [0, 0];

function adicionarItem(item) {
  var quantidade = document.getElementById("quantidade" + item);
  var total = document.getElementById("total" + item);
  qtd[item] += 1;
  valorTotal[item] = parseFloat(valorproduto[item]) * qtd[item];
  quantidade.innerHTML = qtd[item];
  total.innerHTML = valorTotal[item].toFixed(2);
  atualizarSubtotal();
}

function removerItem(item) {
  if (qtd[item] > 0) {
    qtd[item] -= 1;
    var quantidade = document.getElementById("quantidade" + item);
    var total = document.getElementById("total" + item);
    quantidade.innerHTML = qtd[item];
    valorTotal[item] = parseFloat(valorproduto[item]) * qtd[item];
    total.innerHTML = valorTotal[item].toFixed(2);
    atualizarSubtotal();
  }
}

function atualizarSubtotal() {
  var subtotal = 0;
  for (var i = 0; i < valorTotal.length; i++) {
    subtotal += valorTotal[i];
  }
  document.getElementById("valorTotalCompra").innerHTML = subtotal.toFixed(2);
}
