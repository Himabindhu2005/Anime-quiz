let question = [
  {
    numb: 1,
    question: "Who is not the character of Haikyuu?",
    answer: "Kento Nanami",
    options: [
      "Kento Nanami",
      "Tobio Kageyama",
      "Nishinoya",
      "Oikawa"
    ]
  },
  {
    numb: 2,
    question: "Who is the Armored Titan?",
    answer: "Reiner",
    options: [
      "Bertholdt",
      "Reiner",
      "Annie",
      "Armin"
    ]
  },
  {
    numb: 3,
    question: "What is the breathing technique of Zenitsu?",
    answer: "Thunder",
    options: [
      "Water",
      "Flame",
      "Wind",
      "Thunder"
    ]
  },
  {
    numb: 4,
    question: "Who is not one of founding members of Toman?",
    answer: "Smiley",
    options: [
      "Pahchin",
      "Mitsuya",
      "Smiley",
      "Baji"
    ]
  },
  {
    numb: 5,
    question: "What does Hodaka buy for Hina's birthday?",
    answer: "Ring",
    options: [
      "Dress",
      "Umbrella",
      "Shoe",
      "Ring"
    ]
  },
]

const startButton = document.querySelector('.start-box button');
const startBox = document.querySelector('.start-box');
const infoBox = document.querySelector('.info-box');
const quizBox = document.querySelector('.quiz-box');
const exitBtn = document.querySelector('.buttons');
const continueBtn = document.querySelector('.two-btn');
const nextBtn = document.querySelector('.next-btn');
const resultBox = document.querySelector('.result-box');
const replayBtn = document.querySelector('.replay-btn');
const quitBtn = document.querySelector('.quit-btn');

let questionCounter = 0;
let score = 0;
let questionText = document.querySelector('.question');
let optionList = document.querySelector('.option-list');
let totalQue = document.querySelector('.total-que');
let scoreText = document.querySelector('.score');

// startButton
startButton.addEventListener('click', () => {
  startBox.classList.add('hidden');
  infoBox.classList.remove('hidden');
})
//exitButton
exitBtn.addEventListener('click', () => {
  infoBox.classList.add('hidden');
  startBox.classList.remove('hidden');
});
//continue button
continueBtn.addEventListener('click', () => {
  infoBox.classList.add('hidden');
  quizBox.classList.remove('hidden');
  showQuestion(questionCounter);
});

//next button
nextBtn.addEventListener('click', () => {
  questionCounter++;
  if (questionCounter < question.length) {
    showQuestion(questionCounter);
  } else {
    quizBox.classList.add('hidden');
    startBox.classList.add('hidden');
    resultBox.classList.remove('hidden');
    scoreText.innerHTML = `<span>${score}/${question.length}</span>`;
  }
});

//replay button
replayBtn.addEventListener('click', () => {
  resultBox.classList.add('hidden');
  quizBox.classList.remove('hidden');
  questionCounter = 0;
  score = 0;
  showQuestion(questionCounter);
});
//quitButton
quitBtn.addEventListener('click', () => {
  // resultBox.classList.add('hidden');
  // startBox.classList.remove('hidden');
  window.location.reload();
})




//to display question and answer
function showQuestion(index) {
  questionText.innerHTML = `<span>${question[index].numb}.${question[index].question}</span>`;
  optionList.innerHTML = question[index].options.map((option, i) => `<div class="option"><span>${option}</span></div>`).join('');
  //options
  const options = document.querySelectorAll('.option');
  options.forEach(option => {
    option.addEventListener('click', (e) => {
      console.log("option clicked", e.target.textContent)
      selectOption(option, question[index].answer);
    });
  })
  //totalques
  totalQue.innerHTML = `<span>${question[index].numb}/${question.length}`
}

//option selction
function selectOption(option, correctAnswer) {
  console.log("selected option", option.textContent);
  console.log("correct answer", correctAnswer)
  if (option.textContent === correctAnswer) {  //correctAnswer
    option.classList.add('correct');
    score++;
  } else {
    option.classList.add('incorrect');
    console.log("incorrect option clicked")
    document.querySelectorAll('.option').forEach(opt => {
      if (opt.textContent === correctAnswer) {
        opt.classList.add('correct');
        console.log("marking correct option")
      }
    });
  }
  //disble options
  document.querySelectorAll('.option').forEach(opt => opt.classList.add('disabled'));
}



