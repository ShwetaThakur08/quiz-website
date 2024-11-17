const questions = [
    {
        question: "Which of the following time complexities is considered optimal for searching in a balanced binary search tree?",
        answers: ["O(n)", "O(log n)", "O(n log n)", "O(1)"],
        correctAnswer: 1
    },
    {
        question: "What is the primary function of DNS in networking?",
        answers: ["Encrypting data", "Translating domain names to IP addresses", "Routing data packets", "Preventing cyber attacks"],
        correctAnswer: 1
    },
    {
        question: "In JavaScript, which keyword is used to declare a variable that can change its value?",
        answers: ["const", "let", "static", "var"],
        correctAnswer: 1
    },
    {
        question: "Which HTTP status code indicates a resource was not found?",
        answers: ["200", "301", "403", "404"],
        correctAnswer: 3
    },
    {
        question: "Which data structure operates on the Last In, First Out (LIFO) principle?",
        answers: ["Queue", "Tree", "Stack", "Linked List"],
        correctAnswer: 2
    },
    {
        question: "What is the purpose of the ‘git commit’ command?",
        answers: ["To create a local copy of a repository", "To stage changes for commit", "To save changes to the local repository", "To push changes to the remote repository"],
        correctAnswer: 2
    },
    {
        question: "Which protocol is responsible for ensuring data packets are delivered in the correct order?",
        answers: ["TCP", "UDP", "IP", "HTTP"],
        correctAnswer: 0
    },
    {
        question: "In SQL, which command is used to remove all records from a table without deleting the table itself?",
        answers: ["DROP", "DELETE", "TRUNCATE", "CLEAR"],
        correctAnswer: 2
    },
    {
        question: "Which of these sorting algorithms has a worst-case time complexity of O(n^2)?",
        answers: ["Merge Sort", "Quick Sort", "Bubble Sort", "Heap Sort"],
        correctAnswer: 2
    },
    {
        question: "Which JavaScript method is used to convert an array into a string?",
        answers: ["concat()", "join()", "toString()", "slice()"],
        correctAnswer: 1
    }
];

let currentQuestion = 0;
let score = 0;

const questionElement = document.getElementById('question');
const answersContainer = document.getElementById('answers');
const nextButton = document.getElementById('nextButton');
const progressFill = document.getElementById('progressFill');

function loadQuestion() {
    const question = questions[currentQuestion];
    questionElement.textContent = question.question;
    answersContainer.innerHTML = '';

    question.answers.forEach((answer, index) => {
        const button = document.createElement('button');
        button.textContent = answer;
        button.classList.add('answer');
        button.addEventListener('click', () => selectAnswer(index));
        answersContainer.appendChild(button);
    });

    nextButton.style.display = 'none';
    updateProgressBar();
}

function selectAnswer(index) {
    const buttons = answersContainer.getElementsByTagName('button');
    for (let button of buttons) {
        button.classList.remove('selected');
        button.disabled = true;
    }
    buttons[index].classList.add('selected');

    if (index === questions[currentQuestion].correctAnswer) {
        score++;
    }

    nextButton.style.display = 'inline-block';
}

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        finishQuiz();
    }
}

function updateProgressBar() {
    const progress = ((currentQuestion + 1) / questions.length) * 100;
    progressFill.style.width = `${progress}%`;
}

function finishQuiz() {
    localStorage.setItem('quizScore', score);
    localStorage.setItem('totalQuestions', questions.length);
    window.location.href = 'results.html';
}

nextButton.addEventListener('click', nextQuestion);

loadQuestion();
