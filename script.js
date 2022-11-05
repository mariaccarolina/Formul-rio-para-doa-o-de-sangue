let numero_pergunta = 0;

function showPergunta(n) {
  if (numero_pergunta == perguntas.children.length) {
    numero_pergunta = 0;
    n = numero_pergunta;
    checagem();
  }
  for (i of perguntas.children) i.style.display = "none";
  perguntas.children[n].style.display = "block";
}

showPergunta(numero_pergunta);

btn_proximo.onclick = () => showPergunta(++numero_pergunta);

function checagem() {
  let idade = parseInt(inp_idade.value);
  let kg = parseFloat(inp_kg.value);
  let tatto = document.querySelector("[name=r1]:checked").value;
  let alcool = document.querySelector("[name=r2]:checked").value;

  msg = "";
  if (idade < 19 || idade > 69) msg += "<br> Sua idade não permite";
  if (kg <= 50) msg += "<br> Abaixo do peso necessário";
  if (tatto == "sim") msg += "<br> Não pode, tatuagem com menos de um ano";
  if (alcool == "sim") msg += "<br> Não pode, tomou álcool rescentemente";

  if (msg == "") {
    msg = "Parabéns, pode doar";
  }

  msg_final.innerHTML = msg;
}
