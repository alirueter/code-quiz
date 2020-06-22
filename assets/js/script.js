var startBtn = document.getElementById("startBtn");
var questionDiv = document.getElementById("questions");
var currentQuestionIndex = 0;
var timerEl = document.getElementById('countdown');
var timer;
var time = 100;
var userInput = "";


// The array of questions for our quiz game.
var questions = [
    //questions from quizlet: https://quizlet.com/za/444626000/ict1512-javascript-exam-prep-truefalse-questions-flash-cards/
    { q: 'The statement document.("This is a text string."); prints "This is a text string".', a: 'f' },
    { q: 'You can use a text string as a literal value or assign it to a variable.', a: 't' },
    { q: 'A function must return a value.', a: 'f' },
    { q: 'Assignment operators are used to perform mathematical calculations, such as addition, subtraction, multiplication, and division.', a: 'f' },
    { q: 'In an infinite loop, a loop statement never ends because its conditional expression is never truthy.', a: 'f' }
];



let buttonsArray = document.querySelectorAll(".answerBtn");
buttonsArray.forEach(function (elem) {
    elem.addEventListener("click", function () {

        var question = document.getElementById("questionText");
        var answer = elem.id;
        console.log(answer);
        console.log(questions[currentQuestionIndex]);


        if (
            (answer === "true" && questions[currentQuestionIndex].a === 't') ||
            (answer === "false" && questions[currentQuestionIndex].a === 'f')
        ) {

            document.getElementById("answerCorrect").innerHTML = "Correct!";
            currentQuestionIndex++;
        } else {
            time -= 15;

            document.getElementById("answerCorrect").innerHTML = "Wrong!";
            currentQuestionIndex++;
        };
        console.log("question: ", currentQuestionIndex)

        if (currentQuestionIndex < questions.length) {

            question.innerHTML = questions[currentQuestionIndex].q;
        } else {
            quizEnd()
        }

    });
});

var startQuiz = function () {
    var question = document.getElementById("questionText");
    question.innerHTML = questions[currentQuestionIndex].q;
    timer = setInterval(clock, 1000);

}

function quizEnd() {
    console.log("quizend:", time)
    questionDiv.innerHTML = ""
    //this goes in the function that you end your quiz with
    clearInterval(timer);
    timerEl.textContent = time;
    //Show total at end
    document.getElementById('quizScore').innerHTML = 'Score: ' + time;

};

function clock() {
    // update time
    time--;
    timerEl.textContent = time;

    // check if user ran out of time
    if (time <= 0) {
        clearInterval(timer);
        console.log(time);
    }
};

function getHighScores(){
    console.log("All the scores: ",localStorage)


}

function getScore(forWho) {

    return localStorage.getItem(forWho)

};//end getScore() fct def

function storeScore() {

    localStorage.setItem( userInput , time.toString());
    //localStorage.setItem("Users Input", userInput.toString());
};

document.getElementById('highscoreInput').innerHTML = ` 
    Enter your name:
    <input type="text" id="initialInput"></input>
    <button id="saveScore" class="saveButton">Save Score</button>
    `
var initialInputEl = document.getElementById("initialInput");

document.getElementById("saveScore").addEventListener("click", function () {
    userInput = initialInputEl.value;
    console.log("User input: ", userInput);

    storeScore()
});



startBtn.onclick = startQuiz;
getScore();
