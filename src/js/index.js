console.log("connected");

function buildQuiz(){}

myQuestions.forEach(
    (currentQuestion, questionNumber) => {}
)

function showResults(){}

buildQuiz();
submitButton.addEventListener('click', showResults);

const showQuiz = document.getElementsByClassName('quiz');
const submitButton = document.getElementsByClassName('submit');
const showResults = document.getElementsByClassName('results');
let myQuestions = [
{
    question: "Auhhasuwnksjh asuh oiwjja?",
    answers: [
        {option: "AA", answer:true},
        {option:"Bkajsh",answer:false},
        {option:"Ckjashw"m answer:false}
    ],
},


{
    question: "HHHHHHHHHH?",
    answers: [
        {option:"Z",answer:false},
        {option: "I",answer:true},
        {option: "O", answer:false}
    ],
},

{
    question: "Cats sleep ... hours out of a day.",
    answers: [
        {option: "four",answer:false},
        {option: "fifteen",answer:false},
        {option: "twenty-three", answer:true}
    ],
}

];