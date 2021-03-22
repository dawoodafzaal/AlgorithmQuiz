const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const progressText = document.querySelector('#projectText');
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarFull');

let currentQuestion = {}
let acceptingAnswers = true;
let score = 0
let questionCounter = 0
let availableQuestions = []


let questions = [
    {
        question: 'What is the best and worst case of a HashMap respectively?',
        choice1: 'O(1) for both',
        choice2: 'O(1) and O(n^2)',
        choice3: 'O(n) for both',
        choice4: 'O(1) and O(n)',
        answer: 4, 
    },
    {
        question: 'What is the difference between a Binary Search tree and Heap?',
        choice1: 'The time-complexity for the worst case scenario for deleting an item is log(n) for both',
        choice2: 'The Binary Search Tree is an ordered data structure, however a Heap is not',
        choice3: 'A and B',
        choice4: 'None of the above',
        answer: 2, 
    },
    {
        question: 'What is computational complexity?',
        choice1: 'It is the study of complex algorithms',
        choice2: 'It refers to the amount of time needed to compile and run a program',
        choice3: 'It is the amount of resources required to run a program',
        choice4: 'None of the above',
        answer: 3, 
    },
    {
        question: 'What is the time complexity of a HashMap in its best and worst case respectively?',
        choice1: 'O(1) for both',
        choice2: 'O(1) for best case and O(n^2) for the worst case',
        choice3: 'O(n) for both',
        choice4: 'O(1) for best case and O(n) for worst case',
        answer: 4, 
    },
    {
        question: 'What is the time complexity of a HashMap in its best and worst case respectively?',
        choice1: 'O(1) for both',
        choice2: 'O(1) for best case and O(n^2) for the worst case',
        choice3: 'O(n) for both',
        choice4: 'O(1) for best case and O(n) for worst case',
        answer: 4, 
    }
]

const SCORE_POINTS = 100
const MAX_QUESTIONS = 4

startGame = () => {
    questionCounter = 0
    score = 0
    availableQuestions = [...questions]
    getNewQuestion()
}

getNewQuestion = () =>  {
    if(availableQuestions.length == 0 || questionsCounter > MAX_QUESTIONS){
        localStorage.setItem('mostRecentScore', score)

        return window.location.assign('/end.html')
    }


    questionCounter++
    progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`
    progressBarFull.getElementsByClassName.width = `${(questionCounter/MAX_QUESTIONS * 100)}%`

    const questionsIndex = Math.floor(Math.random() * availableQuestions.length)
    currentQuestion = availableQuestions[questionsIndex]
    question.innertext = currentQuestion.question


    choices.forEach(choice => {
        const number = choice.dataset['number']
        choice.innerText = currentQuestion['choice' + number]
    })
    availableQuestions.splice(questionsIndex, 1)

    acceptingAnswers = true
}

choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if(!acceptingAnswers) return
        accaptingAnswers = false;
        const selectedChoice = e.target
        const selectedAnswer = selectedChoice.dataset['number']

        let classToApply = selectedAnswer
    })
})

