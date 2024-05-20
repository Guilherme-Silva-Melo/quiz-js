const quizData = [
    {
        question: "Qual tag HTML é usada para criar um parágrafo?",
        choices: ["div", "h1", "head", "footer"],
        correct: 1
    },
    {
        question: "Qual propriedade CSS é usada para alterar a cor de fundo de um elemento?",
        choices: ["text-shadow", "color", "background-color", "border-color"],
        correct: 3
    },
    {
        question: "Como referenciar um arquivo css no código html?",
        choices: ["<link import='style.css'>", "#include <style.css>", "link <style.css>", "<link rel='stylesheet' href='styles.css'>"],
        correct: 4
    },
    {
        question: "Qual método é usado para selecionar um elemento ID no JavaScript?",
        choices: ["addEventListener()", "getElementById()", "onClick()", "appendChild()"],
        correct: 2
    },
    {
        question: "Qual o evento que é disparado quando um elemento é clicado no JavaScript?",
        choices: ["addEventListener()", "getElementById()", "onClick()", "appendChild()"],
        correct: 3
    }
];

let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {
    const currentQuestion = quizData[currentQuestionIndex];
    document.getElementById("question").textContent = currentQuestion.question;
    document.getElementById("choice0").textContent = currentQuestion.choices[0];
    document.getElementById("choice1").textContent = currentQuestion.choices[1];
    document.getElementById("choice2").textContent = currentQuestion.choices[2];
    document.getElementById("choice3").textContent = currentQuestion.choices[3];
}

function selectAnswer(choiceIndex) {
    const currentQuestion = quizData[currentQuestionIndex];
    if (choiceIndex === currentQuestion.correct) {
        score++;
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    document.getElementById("quiz-container").innerHTML = `<p>Você acertou ${score} de ${quizData.length} perguntas.</p>`;
}

// Inicializa o quiz carregando a primeira pergunta
loadQuestion();
