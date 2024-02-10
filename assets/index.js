
const questions = [
    {
        question: "What is the capital of France?",
        options: ["Paris", "Berlin", "London", "Madrid"],
        answer: "Paris"
    },
    {
        question: "In what year did the great fire of London take place?",
        options: ["1962", "1956", "1977", "1966"],
        answer: "1966"
    },
    // Add more questions here
];

let currentQuestionIndex = 0;
let score = 0;

function displayQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    document.getElementById("question").textContent = currentQuestion.question;
    const optionsList = document.getElementById("options");
    optionsList.innerHTML = "";
    currentQuestion.options.forEach(option => {
        const li = document.createElement("li");
        li.textContent = option;
        li.onclick = () => checkAnswer(option);
        optionsList.appendChild(li);
    });
}

function checkAnswer(selectedOption) {
    const currentQuestion = questions[currentQuestionIndex];
    if (selectedOption === currentQuestion.answer) {
        score++;
        document.getElementById("score").textContent = score;
    }
    nextQuestion();
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        displayQuestion();
    } else {
        // Game Over
        document.getElementById("question-container").innerHTML = "<h2>Game Over!</h2>";
        document.getElementById("next-btn").style.display = "none";
    }
}

// Initial setup
displayQuestion();


