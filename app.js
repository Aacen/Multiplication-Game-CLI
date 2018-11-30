const readline = require('readline-sync');

function getQ(){
  function getNumber(){

    var min=4; 
    var max=20;  

    var random = Math.floor(Math.random() * (+max - +min)) + +min;
    return random;
  }

  var num1 = getNumber()
  var num2 = getNumber()

  var answer = num1 * num2
  var question = "What is " + num1 + " x " + num2 + "? ";

  return question + ":" + answer;
}

function askQuestion(gQ){
  if(!gQ){
    var gQ = getQ();
  }
  var question = gQ.split(":")

  var answer = readline.question(question[0])
  if(answer === question[1]){
    console.log("Correct");
    askQuestion();
  } else {
    console.log("Incorrect");
    askQuestion(gQ)
    
  }
}

askQuestion()