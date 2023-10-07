var questionIndex = Math.floor(Math.random() * 3);
var passedQuestions = 0;
var currentPoints = 0;
var passedQuestionsindex = [questionIndex];

function correctAnswer(a) {
    return a.correct;
}

function checkAnswer(btn) {

    setAllBtnsEnabled(false);

    if(questions[questionIndex].answers[btn.dataset.index].correct) 
        btn.classList.add('correct');
    else {
        btn.classList.add('wrong');
        document.querySelector("[data-index='"+questions[questionIndex].answers.findIndex(correctAnswer)+"']").classList.add('correct');
    }
        
    setTimeout(function() {
        btn.classList.remove('correct');
        btn.classList.remove('wrong');
        checkAnswerEx(btn.dataset.index);
        setAllBtnsEnabled(true);
    },1000);
}

function setAllBtnsEnabled(value) {
    var btns=document.getElementsByTagName('button');
    for(i=0;i<btns.length;i++){
        btns[i].disabled=!value;
    }     
}

function checkAnswerEx(which) {

    if(questions[questionIndex].answers[which].correct == true && passedQuestions < 14){
        currentPoints += questions[questionIndex].points;
        passedQuestions++;
        getQuestion();
    }
    else{
        window.location.href = "result.html";
        localStorage.setItem("points", currentPoints);
    }
}

function getQuestion() {
    if (passedQuestions < 3) {
        do {
            questionIndex = Math.floor(Math.random() * questions.length);
        } while (passedQuestionsindex.includes(questionIndex));
        passedQuestionsindex.push(questionIndex);
        loadQuestion();
    } else {
        window.location.href = "result.html";
        localStorage.setItem("points", currentPoints);
    }
}

window.onload = function(){
    loadQuestion();
}

function loadQuestion(){
    document.getElementById('btn_1').innerHTML= questions[questionIndex].answers[0].text;
    document.getElementById('btn_2').innerHTML= questions[questionIndex].answers[1].text;
    document.getElementById('btn_3').innerHTML= questions[questionIndex].answers[2].text;
    document.getElementById('btn_4').innerHTML= questions[questionIndex].answers[3].text;
    document.getElementById('question').innerHTML= questions[questionIndex].question;
    document.getElementById('questionNumber').innerHTML= passedQuestions + 1;
}

const questions = [
    {
        question: 'Test Question 1',
        answers:[
            {text: '1', correct: false},
            {text: '2', correct: false},
            {text: '3', correct: true},
            {text: '4', correct: false}
        ]
    }, 

    {
        question: 'Test Question 2',
        answers:[
            {text: '1', correct: false},
            {text: '2', correct: false},
            {text: '3', correct: false},
            {text: '4', correct: true}
        ]
    }, 

    {
        question: 'Test Question 3',
        answers:[
            {text: '1', correct: false},
            {text: '2', correct: false},
            {text: '3', correct: true},
            {text: '4', correct: false}
        ]
    }
]