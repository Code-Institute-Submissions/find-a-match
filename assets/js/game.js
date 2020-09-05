document.addEventListener('DOMContentLoaded', () => {



    // Cards Faces
    // Card Array
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


// Grid element
const grid = document.querySelector('.grid')

const resultDisplay = document.querySelector('.score')
const matchDisplay = document.querySelector('.match-no-match')
let cardsChosen = []
let cardsChosenId = []
const cardsWon = []




//Create Board
//Loop over card array for each create img element
//Set attribute src, id and class
//Append to grid
function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
        let card = document.createElement('img')
        card.setAttribute('src', 'assets/images/card-back.png')
        card.setAttribute('data-id', i)
        card.setAttribute('class', `cards`)
        grid.appendChild(card)
        console.log(card)
        console.log(cardArray.length)
    }
}

// Flip Card
// Set cards Id
// Add card images
// If player choose two cards check for match
function flipCard() {
    let cardId = this.getAttribute('data-id')
    console.log(cardId)
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenId.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if (cardsChosen.length === 2) {
        setTimeout(checkForMatch, 500)
    }
    
}

createBoard()




})


    // Main Menu New Game Button
    $('.new-game-button').click(function() {
        $(".main-menu-screen").toggleClass("hidden");
    });

    $('.new-game-button').click(function() {
        $(".game-screen").removeClass("hidden").addClass('visible');
    });
