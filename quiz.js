const quizData = [
    {
        question: 'What is your name ?',
        options: [''],
        answer: 'Paris'
    },
    {
        question: 'আমি কে?',
        options: ['3', '24', '52', '62'],
        answer: '24'
    },
    {
        question: 'What is 2 + 2?',
        options: ['3', '4', '5', '6'],
        answer: '4'
    },
    {
        question: 'What is 2 + 2?',
        options: ['3', '4', '5', '6'],
        answer: '4'
    },
    {
        question: 'What is 2 + 2?',
        options: ['3', '4', '5', '6'],
        answer: '4'
    },
    {
        question: 'What is 2 + 2?',
        options: ['3', '4', '5', '6'],
        answer: '4'
    },
    {
        question: 'What is 2 + 2?',
        options: ['3', '4', '5', '6'],
        answer: '4'
    },
    // Add more questions here
];

let currentQuestion = 0;
let score = 0;

const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const resultElement = document.getElementById('result');

function loadQuestion() {
    const currentQuizData = quizData[currentQuestion];
    questionElement.innerText = currentQuizData.question;
    optionsElement.innerHTML = '';
    currentQuizData.options.forEach(option => {
        const button = document.createElement('button');
        button.innerText = option;
        button.classList.add('option');
        button.addEventListener('click', selectOption);
        optionsElement.appendChild(button);
    });
}

function selectOption(event) {
    const selectedOption = event.target.innerText;
    const currentQuizData = quizData[currentQuestion];
    if (selectedOption === currentQuizData.answer) {
        score++;
    }
    optionsElement.querySelectorAll('.option').forEach(option => {
        option.disabled = true;
    });
    if (currentQuestion < quizData.length - 1) {
        resultElement.innerText = '';
        currentQuestion++;
        loadQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    questionElement.innerText = '';
    optionsElement.innerHTML = '';
    resultElement.innerText = `Your score: ${score}/${quizData.length}`;
}

function nextQuestion() {
    if (currentQuestion < quizData.length - 1) {
        currentQuestion++;
        loadQuestion();
        resultElement.innerText = '';
    } else {
        showResult();
    }
}

loadQuestion();
