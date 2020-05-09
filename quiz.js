const questionsDiv = document.getElementById("questions");
const options = Array.from(document.getElementsByClassName("option-text"));
let scored = document.getElementById('display')

let  currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [
{
    question : "Which of the following is not a html tag ?",
    option1: "body",
    option2: "paragraph",
    option3: "flex",
    option4: "break",
    answer: "flex"
},
{
    question : "Which of these is used to add space around an element?",
    option1: "font",
    option2: "padding",
    option3: "paragraph",
    option4: "font",
    answer: "padding"
},
{
    question : "The box model is used mostly in ?",
    option1: "javascript",
    option2: "python",
    option3: "c#",
    option4: "css",
    answer: "css"
},
{
    question : "Javascript is used for  ?",
    option1: "web layout",
    option2: "functionality",
    option3: "design",
    option4: "analysis",
    answer: "functionality"
},
{
    question : "Is Javascript the same with Java?",
    option1: "Yes",
    option2: "No",
    option3: "I don't know",
    option4: "Maybe",
    answer: "No"
}

]

const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 3;

submitAnswer = (e, questionuser) => {
    let value = e.target.value;
    let question = questions.filter((question) => question.question === questionuser)
    if(question[0].answer === value) {
        score++;
        scored.innerHTML = score;
    } else {
        console.log('failed');
    }
}

updateScore = (e) => {
    e.preventDefault()
    let scored = document.getElementById('display')
    alert('Submission Recorded and score is ' + score)
}

startquiz = () => {
    questions.map((question) => {
        let submitbtn = document.getElementById('submit');
        submitbtn.addEventListener('click', updateScore)
        let divy = document.createElement('div');
        
        divy.setAttribute("class", "options")
        let title = document.createElement('h1');
        //let ptag = document.createElement('p');
        title.innerHTML = question.question
        let radio = document.createElement('input');
        radio.setAttribute("type", "radio");
        radio.setAttribute("name", question.question)
        radio.setAttribute("value", question.option1)
        radio.addEventListener('click', (e) => submitAnswer(e, question.question));
        
        let radio2 = document.createElement('input');
        radio2.setAttribute("type", "radio");
        radio2.setAttribute("name", question.question)
        radio2.setAttribute("value", question.option2)
        radio2.addEventListener('click',(e) => submitAnswer(e, question.question) );

        let radio3 = document.createElement('input');
        radio3.setAttribute("type", "radio");
        radio3.setAttribute("name", question.question)
        radio3.setAttribute("value", question.option3)
        radio3.addEventListener('click', (e) => submitAnswer(e, question.question));

        let radio4 = document.createElement('input');
        radio4.setAttribute("type", "radio");
        radio4.setAttribute("name", question.question)
        radio4.setAttribute("value", question.option4)
        radio4.addEventListener('click', (e) => submitAnswer(e, question.question));

        

        let ptag = document.createElement('label');
        ptag.innerHTML = question.option1
        let ptag2 = document.createElement('label');
        ptag2.innerHTML = question.option2
        let ptag3 = document.createElement('label');
        ptag3.innerHTML = question.option3
        let ptag4 = document.createElement('label');
        ptag4.innerHTML = question.option4
       

        divy.appendChild(title)
        divy.appendChild(radio)
        divy.appendChild(ptag)
        divy.appendChild(radio2)
        divy.appendChild(ptag2)
        divy.appendChild(radio3)
        divy.appendChild(ptag3)
        divy.appendChild(radio4)
        divy.appendChild(ptag4)

        questionsDiv.appendChild(divy)
    })
}

startquiz();
