const questions = [
    {
        question: "What is the capital of France?",
        answers: [
            {text: "Paris", correct: true},
            {text: "Berlin", correct: false},
            {text: "London", correct: false},
            {text: "Madrid", correct: false},
        ]
    },
    {
        question: "In what year did the great fire of London take place?",
        answers: [
            {text: "1962", correct: false},
            {text: "1956", correct: false},
            {text: "1977", correct: false},
            {text: "1966", correct: true},
        ]
    },
    {
        question: "Milan is a city in which European country?",
        answers: [
            {text: "Germany", correct: false},
            {text: "Switzerland", correct: false},
            {text: "Italy", correct: true},
            {text: "Poland", correct: false},
        ]
    },
    {
        question: "Which Greek city held the ancient Olympics?",
        answers: [
            {text: "Athens", correct: false},
            {text: "Sparti", correct: false},
            {text: "Olympia", correct: true},
            {text: "Chania", correct: false},
        ]
    },
       
    {
        question: "In what city was the Titanic built?",
        answers: [
            {text: "Lisbon", correct: false},
            {text: "Belfast", correct: true},
            {text: "Berlin", correct: false},
            {text: "Moscow", correct: false},
        ]
    },
        
    {
        question: "What are people from Denamark known as?",
        answers: [
            {text: "Danish", correct: true},
            {text: "Pastries", correct: false},
            {text: "Denmans", correct: false},
            {text: "Dents", correct: false},
        ]
    },
    {
        question: "What is Europe's busiest airport?",
        answers: [
            {text: "Heathrow", correct: true},
            {text: "Frankfurt", correct: false},
            {text: "Munich", correct: false},
            {text: "Paris", correct: false},
        ]
    },
    
    {
        question: "Which of these countries is in Scandinavia?",
        answers: [
            {text: "Luxembourg", correct: false},
            {text: "Sweden", correct: true},
            {text: "Portugal", correct: false},
            {text: "Vanuatu", correct: false},
        ]
    },
       
    {
        question: "In which European city would you find Sorbonne?",
        answers: [
            {text: "Paris", correct: true},
            {text: "Stockholm", correct: false},
            {text: "Coppenhagen", correct: false},
            {text: "Cologne", correct: false},
        ]
    },
        
    {
        question: "Which of these countries is NOT in Europe?",
        answers: [
            {text: "Netherlands", correct: false},
            {text: "Greenland", correct: true},
            {text: "Poland", correct: false},
            {text: "Austria", correct: false},
        ]
    }
    // Other questions
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length ){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
});

startQuiz();
