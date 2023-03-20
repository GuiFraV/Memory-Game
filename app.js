const cardArray = [
    {
        name: 'fries',
        img: 'images/1.png'
    },
    {
        name: 'cheeseburger',
        img: 'images/2.png'
    },
    {
        name: 'hotdog',
        img: 'images/3.png'
    },
    {
        name: 'icecream',
        img: 'images/4.png'
    },
    {
        name: 'milkshake',
        img: 'images/5.png'
    },
    {
        name: 'pizza',
        img: 'images/6.png'
    },
    {
        name: 'fries',
        img: 'images/1.png'
    },
    {
        name: 'cheeseburger',
        img: 'images/2.png'
    },
    {
        name: 'hotdog',
        img: 'images/3.png'
    },
    {
        name: 'icecream',
        img: 'images/4.png'
    },
    {
        name: 'milkshake',
        img: 'images/5.png'
    },
    {
        name: 'pizza',
        img: 'images/6.png'
    },
]

cardArray.sort(() => 0.5 - Math.random())

const gridDisplay = document.querySelector('#grid');
const resultDisplay = document.querySelector('#result');
let cardChosen = [];
let cardChosenIds = [];
let cardsWon = [];

function createBoard(){

    for(let i = 0; i<cardArray.length; i++){

        const card = document.createElement('img');
        card.setAttribute('src', 'images/1.png')
        card.setAttribute('data-id', i);
        card.classList.add('styleCard');
        card.addEventListener('click', flipCard);
        gridDisplay.appendChild(card);

    }

}

createBoard();

function checkMatch(){
    const cards = document.querySelectorAll('img');
    const optionOneId = cardChosenIds[0];
    const optionTwoId = cardChosenIds[1];

    console.log(cards);

    if(optionOneId == optionTwoId){
        cards[optionOneId].setAttribute('src', 'images/2.png');
        cards[optionTwoId].setAttribute('src', 'images/2.png');
        alert('you have clicked the same image !');
    }
    if(cardChosen[0] == cardChosen[1]){
        console.log('its a match');
        cards[optionOneId].setAttribute('src', 'images/6.png');
        cards[optionTwoId].setAttribute('src', 'images/6.png');
        cards[optionOneId].removeEventListener('click', flipCard);
        cards[optionTwoId].removeEventListener('click', flipCard);
        cardsWon.push(cardChosen);
    }else{
        cards[optionOneId].setAttribute('src', 'images/6.png');
        cards[optionTwoId].setAttribute('src', 'images/6.png');
        alert('try again !');

    }
    resultDisplay.textContent = cardsWon.length
    cardChosen = []
    cardChosenIds = []
    if(cardsWon.length == (cardArray.length / 2)){

        resultDisplay.innerHTML = 'Congratulation you find them all';

    }
}

function flipCard(){
    let cardId = this.getAttribute('data-id');
    console.log(cardArray[cardId].name);
    cardChosen.push(cardArray[cardId].name);
    cardChosenIds.push(cardId);
    console.log(cardChosen)
    console.log(cardChosenIds);
    // console.log('clicked' , cardId);
    this.setAttribute('src', cardArray[cardId].img);
    if(cardChosen.length === 2){
        setTimeout(checkMatch, 500)
    }
}