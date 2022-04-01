function calcular(event: Event) {
  event.preventDefault();

  const larguraElement = document.getElementById("largura") as HTMLInputElement;
  const comprimentoElement = document.getElementById("comprimento") as HTMLInputElement;
  const quantidadeElement = document.getElementById("quantidade") as HTMLInputElement;
  const precoElement = document.getElementById("preco") as HTMLInputElement;

  const largura = larguraElement.valueAsNumber;
  const comprimento = comprimentoElement.valueAsNumber;
  const quantidade = quantidadeElement.valueAsNumber;
  const preco = parseInt(precoElement.value);

  const area = largura * comprimento;
  const areaTotal = area * quantidade;
  const precoTotal = area * preco * quantidade;

  const areaTotalElement = document.getElementById("area-total") as HTMLInputElement;
  const valorTotalElement = document.getElementById("valor-total") as HTMLInputElement;

  areaTotalElement.innerText = `Área total: ${areaTotal} m²`;
  valorTotalElement.innerText = `Valor total: R$ ${precoTotal}`;
}