const quiz = [
  {
    pergunta: "Qual tag HTML é usada para criar um parágrafo?",
    alternativa: ["<div>", "<p>", "<head>", "<footer>"],
    correta: 1,
  },
  {
    pergunta:
      "Qual propriedade CSS é usada para alterar a cor de fundo de um elemento?",
    alternativa: ["text-shadow", "color", "background-color", "border-color"],
    correta: 2,
  },
  {
    pergunta: "Como referenciar um arquivo css no código html?",
    alternativa: [
      "<link import='style.css'>",
      "#include <style.css>",
      "link <style.css>",
      "<link rel='stylesheet' href='styles.css'>",
    ],
    correta: 3,
  },
  {
    pergunta:
      "Qual método é usado para selecionar um elemento ID no JavaScript?",
    alternativa: [
      "addEventListener()",
      "getElementById()",
      "onClick()",
      "appendChild()",
    ],
    correta: 1,
  },
  {
    pergunta:
      "Qual o evento que é disparado quando um elemento é clicado no JavaScript?",
    alternativa: [
      "addEventListener()",
      "getElementById()",
      "onClick()",
      "appendChild()",
    ],
    correta: 2,
  },
];

let index = 0;
let resultado = 0;

function mostrarPergunta() {
  const pergunta = quiz[index];
  document.getElementById("question").textContent = pergunta.pergunta;
  document.getElementById("alternativa0").textContent = pergunta.alternativa[0];
  document.getElementById("alternativa1").textContent = pergunta.alternativa[1];
  document.getElementById("alternativa2").textContent = pergunta.alternativa[2];
  document.getElementById("alternativa3").textContent = pergunta.alternativa[3];
}

function selectAnswer(i) {
  const pergunta = quiz[index];
  if (i === pergunta.correta) {
    resultado++;
  }
  index++;
  if (index < quiz.length) {
    mostrarPergunta();
  } else {
    showResult();
  }
}
function showResult() {
    if (resultado === quiz.length) {
      document.getElementById(
        "container"
      ).innerHTML = `<div id="parabens" style="background-color: #4CAF50; color: white; padding: 20px; border-radius: 10px;">Parabéns, você acertou todas!</div>`;
    } else if (resultado >= quiz.length / 2) {
      document.getElementById(
        "container"
      ).innerHTML = `<p style="background-color: #ffcc00; color: white; padding: 20px; border-radius: 10px;">Você acertou ${resultado} de ${quiz.length} perguntas.</p>`;
    } else {
      document.getElementById(
        "container"
      ).innerHTML = `<p style="background-color: #ff3333; color: white; padding: 20px; border-radius: 10px;">Você acertou ${resultado} de ${quiz.length} perguntas.</p>`;
    }
  }
  

// Inicializa o quiz carregando a primeira pergunta
mostrarPergunta();
