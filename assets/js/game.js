//Game sounds
class audioControl {
    constructor() {
        this.flipSound = new Audio('assets/audio/flip-card.mp3');
        this.winSound = new Audio('assets/audio/win.mp3');
        this.noMatchSound = new Audio('assets/audio/no-match.mp3');
    }
    flip() {
        this.flipSound.play();
    }
    matchCard() {
        this.winSound.play();
    }
    noMatch() {
        this.noMatchSound.play();
    }
}

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
];

// Shuffle the cards
cardArray.sort(() => 0.5 - Math.random());

// Grid element
const grid = document.querySelector('.grid');
// Score counter and match indicator
let resultDisplay = document.querySelector('.score');
let matchDisplay = document.querySelector('.match-no-match');
// Chosen Cards and iDs
let cardsChosen = [];
let cardsChosenId = [];
// Array for save match cards
let cardsWon = [];
// Sound from constructor
let audio = new audioControl();

//Create Board
//Loop over card array for each create img element
//Set attribute src, id and class
//Append to grid
function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
        let card = document.createElement('img');
        card.setAttribute('src', 'assets/images/cards/card-back.png');
        card.setAttribute('data-id', i);
        card.setAttribute('class', `cards`);
        card.setAttribute('id', `cards`);
        card.addEventListener('click', flipCard);
        grid.appendChild(card);
    }
}

// Flip Card
// Set cards Id
// Add card images
// If player choose two cards check for match
function flipCard() {
    let cardId = this.getAttribute('data-id');
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenId.push(cardId);
    this.setAttribute('src', cardArray[cardId].img);
    audio.flip();
    if (cardsChosen.length === 2) {
        setTimeout(checkForMatch, 500);
    }
}

// Check for Match Cards
function checkForMatch() {
    // Select all cards
    let cards = document.querySelectorAll('img');
    //Cards Value
    const optionOneId = cardsChosenId[0];
    const optionTwoId = cardsChosenId[1];
    // Check if player choose same cards
    if (optionOneId == optionTwoId) {
        cards[optionOneId].setAttribute('src', 'assets/images/cards/card-back.png');
        cards[optionTwoId].setAttribute('src', 'assets/images/cards/card-back.png');
        matchDisplay.textContent = 'Sorry that is same card';
    }
    // If Match
    else if (cardsChosen[0] === cardsChosen[1]) {
        // Check for cards names
        matchDisplay.textContent = 'You Found a match';
        // If is match toggle class hidden 
        // Cards disappear from board
        cards[optionOneId].classList.toggle("hidden");
        cards[optionTwoId].classList.toggle("hidden");
        cards[optionOneId].removeEventListener('click', flipCard);
        cards[optionTwoId].removeEventListener('click', flipCard);
        // Push choosen cards
        cardsWon.push(cardsChosen);
        audio.matchCard();
        // If not match
    } else {
         // Flip cards back and show back card image
        cards[optionOneId].setAttribute('src', 'assets/images/cards/card-back.png');
        cards[optionTwoId].setAttribute('src', 'assets/images/cards/card-back.png');
        matchDisplay.textContent = 'Sorry No Match!';
        audio.noMatch();
    }
    cardsChosen = [];
    cardsChosenId = [];
    resultDisplay.textContent = cardsWon.length;
    if (cardsWon.length === cardArray.length / 2) {
        document.getElementById("end-screen").classList.remove("hidden");
        $("#grid").empty();
        cardsWon = [];
    }
}

function resetGame() {
    createBoard();
}

// Main Menu New Game Button
$('.new-game-button').click(function () {
    $(".main-menu-screen").toggleClass("hidden").removeClass("visible"),
    $(".game-screen").removeClass("hidden").addClass("visible");
});

$('.restart-game').click(function () {
    $("#end-screen").toggleClass("hidden");
});

// From game end screen to main menu and back
$('.main-menu-in-game').click(function () {
    $(".game-screen").addClass("hidden").removeClass("visible"),
    $(".main-menu-screen").removeClass("hidden").addClass("visible"),
    $("#end-screen").removeClass("visible").addClass("hidden");
});

$('.settings-button').click(function () {
     $(".main-menu-screen").addClass("hidden"),
     $(".settings-menu-screen").removeClass("hidden").addClass("visible");
});