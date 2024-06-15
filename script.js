

const quizQuestions = [
  {
    question: "What is the capital of France?",
    options: ["Paris", "London", "Berlin", "Rome"],
    correctAnswer: "Paris"
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Venus", "Mars", "Jupiter", "Saturn"],
    correctAnswer: "Mars"
  },
  {
    question: "What is the chemical symbol for gold?",
    options: ["Au", "Ag", "Cu", "Fe"],
    correctAnswer: "Au"
  },
  {
    question: "What is the capital of india?",
    options: ["New delhi", "Chennai", "Jaipur", "Bhubaneswar"],
    correctAnswer: "New delhi"
        },
    {
      question: "who is the prime minister of india?",
      options: ["Narendra modi", "Navin pattnaik", "Yogi adityanath", "Amit shah"],
      correctAnswer: "Narendra modi"
    },
    {
       question: "who is the captain of indian womens cricket team?",
            options: ["Smriti mandhana", "Jemimah rodrigues", "Harmanpreet kaur", "Mithali raj"],
            correctAnswer: "harmanpreet kaur"
          },
          
          {
            question: "who is the winner of mens world cup 2023?",
            options: ["India", "Australia", "England", "South africa"],
            correctAnswer: "Australia"
          },
    
          {
            question: "who is the winner of ipl 2024?",
            options: ["Sunrisers hyderabad", "Kolkata knight riders", "Rajasthan Royals", "Chennai Super Kings"],
            correctAnswer: "kolkata knight riders"
          },
           
          {
            question: "who is the transport and highway minister of india?",
            options: ["Nitin gadkari", "Subrahmanyam Jaishankar", "dharmendra pradhan", "Aswini baishnav"],
            correctAnswer: "Nitin gadkari"
          },
    
          {
            question: "which is npt the ecommerse application?",
            options: ["Amazon", "flipkart","Hindustan liver", "Redmi"],
            correctAnswer: "hindustan liver"
          },
];


let currentQuestionIndex = 0;
let score = 0;
let timeLeft = 30;
let timerInterval;

function startQuiz() {
 
  document.getElementById("start-button").style.display = "none";
  displayQuestion();
  startTimer();
}


function displayQuestion() {
  const currentQuestion = quizQuestions[currentQuestionIndex];
  const questionText = document.getElementById("question-text");
  const answerButtons = document.getElementById("answer-buttons");


  questionText.innerHTML = "";
  answerButtons.innerHTML = "";

  
  questionText.innerHTML = currentQuestion.question;


  currentQuestion.options.forEach(option => {
    const button = document.createElement("button");
    button.innerText = option;
    button.classList.add("answer-button");
    answerButtons.appendChild(button);

    
    button.addEventListener("click", function() {
      checkAnswer(option);
    });
  });
}


function checkAnswer(selectedOption) {
  const currentQuestion = quizQuestions[currentQuestionIndex];

  
  if (selectedOption === currentQuestion.correctAnswer) {
    score++;
  }

 
  currentQuestionIndex++;

  if (currentQuestionIndex < quizQuestions.length) {
    displayQuestion();
  } else {
    endQuiz();
  }
}


function startTimer() {
  timerInterval = setInterval(function() {
    timeLeft--;

    
    document.getElementById("timer").textContent = timeLeft;

    
    if (timeLeft <= 0) {
      endQuiz();
    }
  }, 1000);
}


function endQuiz() {
  
  clearInterval(timerInterval);

 
  const scorePercentage = (score / quizQuestions.length) * 100;

 
  const questionContainer = document.getElementById("question-container");
  questionContainer.innerHTML = `
    <h2>Quiz Completed!</h2>
    <p>Your Score: ${score} out of ${quizQuestions.length}</p>
    <p>Score Percentage: ${scorePercentage}%</p>
  `;
}


document.getElementById("start-button").addEventListener("click", startQuiz);


