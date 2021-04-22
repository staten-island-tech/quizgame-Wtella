console.log("connected");

function buildQuiz(){}

function showResults(){}

buildQuiz();
submitButton.addEventListener('click', showResults);

const showQuiz = document.getElementsByClassName('quiz');
const submitButton = document.getElementsByClassName('submit');
const showResults = document.getElementsByClassName('results');
const myQuestions = [
{
    question: "Auhhasuwnksjh asuh oiwjja?",
    answers: {
        a:"Akjask",
        b:"Bkajsh",
        c:"Ckjashw"
    },

    correctAnswer: "c"

},
{
    question: "HHHHHHHHHH?",
    answers: {
        a:"I",
        b: "Z",
        c: "O"
    },

    correctAnswer: "a"
},
{
    question: "Cats sleep ... hours out of a day.",
    answers: {
        a: "four",
        b: "fifteen",
        c: "twenty-three"
    },

    correctAnswer: "c"
}

];