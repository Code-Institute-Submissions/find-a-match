document.addEventListener('DOMContentLoaded', () => {



    // Cards Faces
    const cardArray = [
        {
        name: 'AH',
        img: 'assets/images/cards/AH.png'
    },
    {
        name: 'AH',
        img: 'assets/images/cards/AH.png'
    },
    {
        name: 'KH',
        img: 'assets/images/cards/KH.png'
    },
    {
        name: 'KH',
        img: 'assets/images/cards/KH.png'
    },
    {
        name: 'QH',
        img: 'assets/images/cards/QH.png'
    },
    {
        name: 'QH',
        img: 'assets/images/cards/QH.png'
    },
    {
        name: 'AS',
        img: 'assets/images/cards/AS.png'
    },
    {
        name: 'AS',
        img: 'assets/images/cards/AS.png'
    },
    {
        name: 'KS',
        img: 'assets/images/cards/KS.png'
    },
    {
        name: 'KS',
        img: 'assets/images/cards/KS.png'
    },
    {
        name: 'QS',
        img: 'assets/images/cards/QS.png'
    },
    {
        name: 'QS',
        img: 'assets/images/cards/QS.png'
    },
]

cardArray.sort(() => 0.5 - Math.random())

const grid = document.querySelector('.grid')


const resultDisplay = document.querySelector('.score')
const matchDisplay = document.querySelector('.match-no-match')
var cardsChosen = []
var cardsChosenId = []
const cardsWon = []

function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
        let card = document.createElement('img')
        card.setAttribute('src', 'assets/images/cards/back-of-card.png')
        card.setAttribute('data-id', i)
        card.setAttribute('class', `cards`)
        grid.appendChild(card)
    }
}


  //check for matches
  
  createBoard()




})


    // Main Menu New Game Button
    $('.new-game-button').click(function() {
        $(".main-menu-screen").toggleClass("hidden");
    });

    $('.new-game-button').click(function() {
        $(".game-screen").removeClass("hidden").addClass('visible');
    });
