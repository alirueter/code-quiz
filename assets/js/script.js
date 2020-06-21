var startBtn = document.getElementById("startBtn");
var questionDiv = document.getElementById("questions");
console.log(questionDiv);
var currentQuestionIndex = 0;

// The array of questions for our quiz game.
var questions = [
    //questions from quizlet: https://quizlet.com/za/444626000/ict1512-javascript-exam-prep-truefalse-questions-flash-cards/
    { q: 'The statement document.write("This is a text string."); prints "This is a text string".', a: 'f' },
    { q: 'You can use a text string as a literal value or assign it to a variable.', a: 't' },
    { q: 'A function must return a value.', a: 'f' },
    { q: 'Assignment operators are used to perform mathematical calculations, such as addition, subtraction, multiplication, and division.', a: 'f' },
    { q: 'In an infinite loop, a loop statement never ends because its conditional expression is never truthy.', a: 'f' }
];
console.log(questions);

// We start the game with a score of 0.
var score = 0;


let buttonsArray = document.querySelectorAll(".answerBtn");
buttonsArray.forEach(function(elem) {
    elem.addEventListener("click", function(){
        var question = document.getElementById("questionText");
        question.innerHTML = questions[currentQuestionIndex].q;
        var answer = elem.id
        console.log(questions[currentQuestionIndex]);
    
        if (
            (answer === "true" && questions[currentQuestionIndex].a === 't') ||
            (answer === "false" && questions[currentQuestionIndex].a === 'f')
            ) {
            // Increase score
            score++;
            document.getElementById("answerCorrect").innerHTML = "Correct!";
            
            } else {
                document.getElementById("answerCorrect").innerHTML = 'Wrong!';
            }

            if (questions.length > currentQuestionIndex){
            currentQuestionIndex++
        }
    });
});


var startQuiz = function(){   
    currentQuestionIndex = 0;
    var question = document.getElementById("questionText");
    question.innerHTML = questions[currentQuestionIndex].q;
}


// Show total at end
document.getElementById('main').innerHTML = 'You got ' + score + '/' + questions.length;

startBtn.onclick = startQuiz;
