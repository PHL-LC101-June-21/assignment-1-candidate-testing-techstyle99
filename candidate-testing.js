const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //


// TODO 1.1a: Define candidateName // 
let candidateName = "";
<<<<<<< HEAD

=======
>>>>>>> c4f0ff1edf98fdf90f2053f46e575ef70d2753a6
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer = "";
<<<<<<< HEAD

let questions = [
  "Who was the first American woman in space? ", 
  "True or false: 5 kilometer == 5000 meters? ",
  "(5+3)/2*10=? ", 
  "Given the array[8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ",
  "What is the minimum crew size for the ISS? "
];

let correctAnswers = [
  "Sally Ride", 
  "true", 
  "40", 
  "Trajectory", 
  "3"
];
=======
let questions;
let correctAnswers;
let candidateAnswers;
>>>>>>> c4f0ff1edf98fdf90f2053f46e575ef70d2753a6

let candidateAnswers = [];

function askForName() {
  // TODO 1.1b: Ask for candidate's name //
  candidateName = input.question("Enter your name here: "); 
<<<<<<< HEAD
=======

>>>>>>> c4f0ff1edf98fdf90f2053f46e575ef70d2753a6
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
<<<<<<< HEAD
  // candidateAnswer = input.question(question)
  for (let i = 0; i < questions.length; i++){
    question = questions[i]; 
    candidateAnswer = input.question(question);
    candidateAnswers.push(candidateAnswer); 
  }
=======
  candidateAnswer = input.question(question)

>>>>>>> c4f0ff1edf98fdf90f2053f46e575ef70d2753a6
}

function gradeQuiz(candidateAnswers) {
  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
<<<<<<< HEAD
  let correctAnswerCounter = 0;
  console.log("\n------------Let's see how well you have done------------")
  for (let i = 0; i < questions.length; i++) {
    question = questions[i]; 
    candidateAnswer = candidateAnswers[i]; 
    correctAnswer = correctAnswers[i]; 
    console.log(`\n${i+1}) ${question}`);
    console.log(`Your Answer: ${candidateAnswer}`);
    console.log(`Correct Answer: ${correctAnswer}`); 
    if (candidateAnswer.trim().toLowerCase() === correctAnswer.toLowerCase()) {
      correctAnswerCounter += 1; 
    }
  } 
=======
  if (candidateAnswers === correctAnswer) {
    console.log("Your answer is correct!")
  } else {
    console.log("Your answer is incorrect!")
  }


  let grade;
>>>>>>> c4f0ff1edf98fdf90f2053f46e575ef70d2753a6
  
  let grade = correctAnswerCounter / questions.length * 100; 
  console.log("\n------------------ Grade Reports ------------------")
  console.log(`\n>>> Overall Grade: ${grade}% (${correctAnswerCounter} of ${questions.length} responses correct) <<<`);
  if (grade >= 80){
  console.log(`>>> Status: PASSED <<<`); 
  } else {
  console.log(`>>> Status: FAILED <<<`); 
  }
  return grade;
}


function runProgram() {
  askForName();
  // TODO 1.1c: Ask for candidate's name //
<<<<<<< HEAD
    console.log("This is Jeopardy, " + candidateName + ", Welcome and Good Luck.")
=======
    console.log("Hello " + candidateName + ", welcome here.")
>>>>>>> c4f0ff1edf98fdf90f2053f46e575ef70d2753a6
  
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};
