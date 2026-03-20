// !Quiz Background Animation
// This event is triggered after the initial HTML document has been completely loaded.
document.addEventListener("DOMContentLoaded", function () {
  // Getting the element with id "solarSystem"
  var solarSystem = document.getElementById("solarSystem");

  // List of planet names
  var planets = [
    "mercury",
    "venus",
    "earth",
    "mars",
    "jupiter",
    "saturn",
    "neptune",
    "uranus",
  ];

  // Size classes for the planets
  var size = [
    "small basic",
    "small basic",
    "small",
    "small basic",
    "large",
    "large",
    "medium",
    "medium",
  ];

  // Defines the size of the orbit shell for each planet
  var layers = [210, 260, 325, 390, 520, 680, 800, 910];

  // Loop through the array of planets
  for (var i = 0; i < planets.length; i++) {
    // Create a new div element for each planet's orbit
    var shell = document.createElement("div");
    shell.className = "shell";
    shell.id = "layer" + (i + 1);
    shell.style.width = layers[i] + "px";
    shell.style.height = layers[i] + "px";

    // Create a new div element for the planet
    var innerShell = document.createElement("div");
    innerShell.className = "in";

    // Create a new div element for the planet and assign it a size class and id
    var planet = document.createElement("div");
    planet.className = "planet " + size[i];
    planet.id = planets[i];

    // Append the planet to the innerShell div
    innerShell.appendChild(planet);

    // Append the innerShell to the shell div
    shell.appendChild(innerShell);

    // Append the shell to the solarSystem div
    solarSystem.appendChild(shell);
  }

  // Getting the element with id "starBack"
  var outerShell = document.getElementById("starBack");

  // Create the outer shell for the star background
  var shellOut = document.createElement("div");
  shellOut.className = "outerShell shellOut";

  // Reference to the current shell
  var currentShell = shellOut;

  // Loop 18 times to create nested divs
  for (var j = 0; j < 18; j++) {
    // Create a new div for the outer shell
    var newShell = document.createElement("div");
    newShell.className = "outerShell shellOut";

    // Append the new shell to the current shell
    currentShell.appendChild(newShell);

    // Update the reference to the current shell
    currentShell = newShell;
  }

  // Append the outer shell to the star background
  outerShell.appendChild(shellOut);
});

//! ///////////////////////////////////////////////////////////////
//! ///////////////////////////////////////////////////////////////
//! ///////////////////////////////////////////////////////////////
//! ///////////////////////////////////////////////////////////////

// !Quiz Questions

// 25 Questions in total to be picked randomly for each quiz session
const questions = [
  {
    question: "Which is the smallest planet in our solar system?",
    optionA: "Mars",
    optionB: "Earth",
    optionC: "Mercury",
    optionD: "Venus",
    correctOption: "optionC",
  },

  {
    question: "What is the name of the largest volcano in our solar system?",
    optionA: "Etna",
    optionB: "Olympus Mons",
    optionC: "Mauna Loa",
    optionD: "Kilimanjaro",
    correctOption: "optionB",
  },

  {
    question: "Which planet in our solar system has the most moons?",
    optionA: "Mars",
    optionB: "Jupiter",
    optionC: "Neptune",
    optionD: "Uranus",
    correctOption: "optionB",
  },

  {
    question: "Which planet is known as the 'Red Planet'?",
    optionA: "Venus",
    optionB: "Mars",
    optionC: "Jupiter",
    optionD: "Saturn",
    correctOption: "optionB",
  },

  {
    question: "What is the second planet from the sun?",
    optionA: "Mercury",
    optionB: "Earth",
    optionC: "Mars",
    optionD: "Venus",
    correctOption: "optionD",
  },

  {
    question: "Which celestial body is at the center of our solar system?",
    optionA: "Sun",
    optionB: "Earth",
    optionC: "Moon",
    optionD: "Jupiter",
    correctOption: "optionA",
  },

  {
    question:
      "What is the name of the dwarf planet that was once considered the ninth planet in our solar system?",
    optionA: "Ceres",
    optionB: "Eris",
    optionC: "Makemake",
    optionD: "Pluto",
    correctOption: "optionD",
  },

  {
    question: "Which planet in our solar system rotates on its side?",
    optionA: "Neptune",
    optionB: "Uranus",
    optionC: "Saturn",
    optionD: "Jupiter",
    correctOption: "optionB",
  },

  {
    question: "The asteroid belt is located between which two planets?",
    optionA: "Mars and Jupiter",
    optionB: "Jupiter and Saturn",
    optionC: "Saturn and Uranus",
    optionD: "Uranus and Neptune",
    correctOption: "optionA",
  },

  {
    question: "What planet is known as the 'gas giant'?",
    optionA: "Venus",
    optionB: "Earth",
    optionC: "Jupiter",
    optionD: "Mercury",
    correctOption: "optionC",
  },

  {
    question: "What is the hottest planet in our solar system?",
    optionA: "Mercury",
    optionB: "Venus",
    optionC: "Mars",
    optionD: "Jupiter",
    correctOption: "optionB",
  },

  {
    question:
      "Which planet in our solar system has a day longer than its year?",
    optionA: "Mercury",
    optionB: "Venus",
    optionC: "Earth",
    optionD: "Mars",
    correctOption: "optionA",
  },

  {
    question: "What is the largest moon in the solar system?",
    optionA: "Titan",
    optionB: "Io",
    optionC: "Ganymede",
    optionD: "Europa",
    correctOption: "optionC",
  },

  {
    question: "Which planet has a storm known as The Great Red Spot?",
    optionA: "Mars",
    optionB: "Jupiter",
    optionC: "Saturn",
    optionD: "Neptune",
    correctOption: "optionB",
  },

  {
    question: "How many planets in our solar system have rings?",
    optionA: "2",
    optionB: "4",
    optionC: "6",
    optionD: "8",
    correctOption: "optionB",
  },

  {
    question: "Which of these planets is not a terrestrial planet?",
    optionA: "Mercury",
    optionB: "Venus",
    optionC: "Earth",
    optionD: "Neptune",
    correctOption: "optionD",
  },

  {
    question:
      "What is the name of the second largest dwarf planet in our solar system?",
    optionA: "Eris",
    optionB: "Ceres",
    optionC: "Haumea",
    optionD: "Makemake",
    correctOption: "optionA",
  },

  {
    question: "What is the name of the largest asteroid in the asteroid belt?",
    optionA: "Pallas",
    optionB: "Vesta",
    optionC: "Ceres",
    optionD: "Hygiea",
    correctOption: "optionC",
  },

  {
    question: "What is the diameter of the Sun?",
    optionA: "Approx~ 1.4 million kilometers",
    optionB: "Approx~  3.2 million kilometers",
    optionC: "Approx~  2 million kilometers",
    optionD: "Approx~  4 million kilometers",
    correctOption: "optionA",
  },

  {
    question: "Which planet is known as the 'Evening Star'?",
    optionA: "Mars",
    optionB: "Jupiter",
    optionC: "Venus",
    optionD: "Mercury",
    correctOption: "optionC",
  },

  {
    question: "Which planet takes the longest to orbit the Sun?",
    optionA: "Jupiter",
    optionB: "Saturn",
    optionC: "Neptune",
    optionD: "Uranus",
    correctOption: "optionC",
  },

  {
    question: "Which planet has the most significant tilt on its axis?",
    optionA: "Mars",
    optionB: "Jupiter",
    optionC: "Uranus",
    optionD: "Saturn",
    correctOption: "optionC",
  },

  {
    question: "What is the third planet from the sun?",
    optionA: "Mars",
    optionB: "Venus",
    optionC: "Earth",
    optionD: "Mercury",
    correctOption: "optionC",
  },

  {
    question: "Which planet in our solar system is the lightest?",
    optionA: "Mercury",
    optionB: "Mars",
    optionC: "Saturn",
    optionD: "Pluto",
    correctOption: "optionD",
  },

  {
    question: "What is the solar system's largest planet?",
    optionA: "Mars",
    optionB: "Earth",
    optionC: "Saturn",
    optionD: "Jupiter",
    correctOption: "optionD",
  },
];

// An empty array to store the shuffled questions.
let shuffledQuestions = [];

// Function to shuffle and push 10 unique questions into shuffledQuestions array.
function handleQuestions() {
  while (shuffledQuestions.length <= 9) {
    const random = questions[Math.floor(Math.random() * questions.length)];
    if (!shuffledQuestions.includes(random)) {
      shuffledQuestions.push(random);
    }
  }
}

// Variables to track the current question number, player's score, wrong attempts, and question index.
let questionNumber = 1;
let playerScore = 0;
let wrongAttempt = 0;
let indexNumber = 0;

// Function to display the next question from the shuffled questions on the webpage.
function NextQuestion(index) {
  handleQuestions();
  const currentQuestion = shuffledQuestions[index];
  document.getElementById("question-number").innerHTML = questionNumber;
  document.getElementById("player-score").innerHTML = playerScore;
  document.getElementById("display-question").innerHTML =
    currentQuestion.question;
  document.getElementById("option-one-label").innerHTML =
    currentQuestion.optionA;
  document.getElementById("option-two-label").innerHTML =
    currentQuestion.optionB;
  document.getElementById("option-three-label").innerHTML =
    currentQuestion.optionC;
  document.getElementById("option-four-label").innerHTML =
    currentQuestion.optionD;
}

// Function to check if the player has selected an answer, and if so, whether it's correct.
function checkForAnswer() {
  const currentQuestion = shuffledQuestions[indexNumber]; //gets current Question
  const currentQuestionAnswer = currentQuestion.correctOption; //gets current Question's answer
  const options = document.getElementsByName("option"); //gets all elements in dom with name of 'option' (in this the radio inputs)
  let correctOption = null;

  options.forEach((option) => {
    if (option.value === currentQuestionAnswer) {
      //get's correct's radio input with correct answer
      correctOption = option.labels[0].id;
    }
  });

  //check to make sure a radio input has been checked or an option has been chosen
  if (
    options[0].checked === false &&
    options[1].checked === false &&
    options[2].checked === false &&
    options[3].checked == false
  ) {
    document.getElementById("option-modal").style.display = "flex";
  }

  //check if checked radio button is the same as the answer
  options.forEach((option) => {
    if (option.checked === true && option.value === currentQuestionAnswer) {
      document.getElementById(correctOption).style.backgroundColor = "green";
      playerScore++;
      indexNumber++;
      //set to delay question number till when next question loads
      setTimeout(() => {
        questionNumber++;
      }, 1000);
    } else if (option.checked && option.value !== currentQuestionAnswer) {
      const wrongLabelId = option.labels[0].id;
      document.getElementById(wrongLabelId).style.backgroundColor = "red";
      document.getElementById(correctOption).style.backgroundColor = "green";
      wrongAttempt++;
      indexNumber++;
      //set to delay question number till when next question loads
      setTimeout(() => {
        questionNumber++;
      }, 1000);
    }
  });
}

// Function called when the next button is clicked.
// It checks the answer, clears the selection for the next question, and shows the next question.
function handleNextQuestion() {
  checkForAnswer();
  unCheckRadioButtons();
  //delays next question displaying for a second
  setTimeout(() => {
    if (indexNumber <= 9) {
      NextQuestion(indexNumber);
    } else {
      handleEndGame();
    }
    resetOptionBackground();
  }, 1000);
}

// Function to reset the background color of the answer options to the default for the next question.
function resetOptionBackground() {
  const options = document.getElementsByName("option");
  options.forEach((option) => {
    document.getElementById(option.labels[0].id).style.backgroundColor = "";
  });
}

// Function to uncheck all the radio buttons for the next question.
function unCheckRadioButtons() {
  const options = document.getElementsByName("option");
  for (let i = 0; i < options.length; i++) {
    options[i].checked = false;
  }
}

// Function to handle the end of the game, compute the player's grade, provide a remark, and display the final score.
function handleEndGame() {
  let remark = null;
  let remarkColor = null;

  if (playerScore <= 3) {
    remark = "Bad Grades, Keep Practicing.";
    remarkColor = "red";
  } else if (playerScore >= 4 && playerScore < 7) {
    remark = "Average Grades, You can do better.";
    remarkColor = "orange";
  } else if (playerScore >= 7) {
    remark = "Excellent, Keep the good work going.";
    remarkColor = "green";
  }
  const playerGrade = (playerScore / 10) * 100;

  document.getElementById("remarks").innerHTML = remark;
  document.getElementById("remarks").style.color = remarkColor;
  document.getElementById("grade-percentage").innerHTML = playerGrade;
  document.getElementById("wrong-answers").innerHTML = wrongAttempt;
  document.getElementById("right-answers").innerHTML = playerScore;
  document.getElementById("score-modal").style.display = "flex";
}

// Function to close the score modal and reset the game for a new start.
function closeScoreModal() {
  questionNumber = 1;
  playerScore = 0;
  wrongAttempt = 0;
  indexNumber = 0;
  shuffledQuestions = [];
  NextQuestion(indexNumber);
  document.getElementById("score-modal").style.display = "none";
}

// Function to close the warning modal that shows if a player tries to proceed without selecting an answer.
function closeOptionModal() {
  document.getElementById("option-modal").style.display = "none";
}
