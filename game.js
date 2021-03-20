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
        question: 'What is the time complexity of a HashMap in its best and worst case respectively?',
        choice1: 'O(1) for both',
        choice2: 'O(1) and O(n^2)',
        choice3: 'O(n) for both',
        choice4: 'O(1) and O(n)',
        answer: 4, 
    },
    {
        question: 'What is the difference between a Binary Search tree and Heap?',
        choice1: 'The time-complexity for the worst case scenario for deleting an item is log(n) for both',
        choice2: 'The Binary Search Tree is an ordered data structure, however the heap is not',
        choice3: '',
        choice4: 'O(1) for best case and O(n) for worst case',
        answer: 2, 
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