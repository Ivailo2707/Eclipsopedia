var questionIndex = Math.floor(Math.random() * 15);
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
        currentPoints += 1;
        passedQuestions++;
        getQuestion();
    }
    else{
        localStorage.setItem("points", parseInt(currentPoints));
        window.location.href = "result.html";
    }
}

function getQuestion() {
    if (passedQuestions < 10) {
        do {
            questionIndex = Math.floor(Math.random() * 15);
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
        question: 'How do solar eclipses occur?',
        answers: [
            { text: 'When the Earth moves directly between the Sun and the Moon', correct: false },
            { text: 'When the Moon casts a shadow on the Earth', correct: false },
            { text: 'When the Sun, Earth, and Moon align in a straight line', correct: true },
            { text: 'When the Moon rotates around the Earth', correct: false }
        ]
    },
    {
        question: 'Why do only some people on Earth see a solar eclipse at a given time?',
        answers: [
            { text: 'Only those within the Moon\'s shadow can see it', correct: true },
            { text: 'Solar eclipses are visible everywhere on Earth simultaneously', correct: false },
            { text: 'It depends on whether you have the right equipment to observe it', correct: false },
            { text: 'Solar eclipses are too faint to be seen from Earth', correct: false }
        ]
    },
    {
        question: 'What causes the reddish hue of the Moon during a total lunar eclipse?',
        answers: [
            { text: 'The Moon\'s natural color', correct: false },
            { text: 'Reflection of city lights', correct: false },
            { text: 'Scattering of sunlight by Earth\'s atmosphere', correct: true },
            { text: 'The presence of Mars nearby', correct: false }
        ]
    },
    {
        question: 'How often do lunar eclipses occur on average?',
        answers: [
            { text: 'Once every 10 years', correct: false },
            { text: 'Twice a month', correct: false },
            { text: 'Rarely, about once in a century', correct: false },
            { text: 'Two to four times a year', correct: true }
        ]
    },
    {
        question: 'How do scientists predict the timing and locations of solar eclipses?',
        answers: [
            { text: 'By consulting fortune tellers', correct: false },
            { text: 'Using astronomical data and mathematical calculations', correct: true },
            { text: 'By observing animal behavior', correct: false },
            { text: 'By studying weather patterns', correct: false }
        ]
    },
    {
        question: 'What is the main reason why not everyone on Earth sees a lunar eclipse simultaneously?',
        answers: [
            { text: 'Lunar eclipses are always visible to everyone on Earth', correct: false },
            { text: 'It depends on whether you are awake at the right time', correct: false },
            { text: 'Lunar eclipses are only visible from certain regions on Earth', correct: true },
            { text: 'Lunar eclipses occur during the day when the Moon is not visible', correct: false }
        ]
    },
    {
        question: 'Why do lunar eclipses occur approximately twice a year?',
        answers: [
            { text: 'Due to random chance', correct: false },
            { text: 'Because of the Moon\'s tilted orbit', correct: true },
            { text: 'They follow a strict six-month schedule', correct: false },
            { text: 'Lunar eclipses are influenced by the Earth\'s magnetic field', correct: false }
        ]
    },
    {
        question: 'What is the key difference between a lunar eclipse and a solar eclipse?',
        answers: [
            { text: 'Lunar eclipses involve the Moon passing between the Earth and the Sun', correct: false },
            { text: 'Solar eclipses involve the Earth casting a shadow on the Moon', correct: true },
            { text: 'Lunar eclipses are always partial, while solar eclipses can be total or partial', correct: false },
            { text: 'Solar eclipses only occur during the day', correct: false }
        ]
    },
    {
        question: 'Why does the Moon appear reddish during a lunar eclipse?',
        answers: [
            { text: 'It\'s caused by Earth\'s atmosphere scattering sunlight', correct: true },
            { text: 'Due to the presence of aliens on the Moon', correct: false },
            { text: 'Because the Moon is made of red cheese', correct: false },
            { text: 'The Moon is reflecting the red light from a nearby star', correct: false }
        ]
    },
    {
        question: 'What term is used to describe the alignment of the Sun, Earth, and Moon during an eclipse?',
        answers: [
            { text: 'Synchronous', correct: false },
            { text: 'Parallelism', correct: false },
            { text: 'Syzygy', correct: true },
            { text: 'Gravitation', correct: false }
        ]
    },
    {
        question: 'During a solar eclipse, what part of the Sun is visible from Earth?',
        answers: [
            { text: 'The entire Sun', correct: false },
            { text: 'Only the outer corona', correct: false },
            { text: 'The Sun\'s surface', correct: false },
            { text: 'None of the Sun is visible', correct: true }
        ]
    },
    {
        question: 'What is the name of the faint, outer shadow of the Earth in a lunar eclipse?',
        answers: [
            { text: 'Penumbra', correct: true },
            { text: 'Umbra', correct: false },
            { text: 'Corona', correct: false },
            { text: 'Zenith', correct: false }
        ]
    },
    {
        question: 'Which celestial event occurs when the Moon partially covers the Sun, creating a "ring of fire" effect?',
        answers: [
            { text: 'Total lunar eclipse', correct: false },
            { text: 'Total solar eclipse', correct: false },
            { text: 'Annular solar eclipse', correct: true },
            { text: 'Penumbral lunar eclipse', correct: false }
        ]
    },
    {
        question: 'What is the alignment of the Sun, Earth, and Moon called when it causes extreme gravitational effects?',
        answers: [
            { text: 'Tidal alignment', correct: false },
            { text: 'Perigee alignment', correct: true },
            { text: 'Apogee alignment', correct: false },
            { text: 'Solar conjunction', correct: false }
        ]
    },
    {
        question: 'What causes the variations in the color of the Moon during a lunar eclipse?',
        answers: [
            { text: 'The Moon\'s mood', correct: false },
            { text: 'Earth\'s magnetic field', correct: false },
            { text: 'Different atmospheric conditions', correct: true },
            { text: 'The angle of the Moon\'s tilt', correct: false }
        ]
    }
];
