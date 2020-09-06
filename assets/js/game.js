
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

    // Shuffle the cards
    cardArray.sort(() => 0.5 - Math.random())

    // Grid element
    const grid = document.querySelector('.grid')
    // Score counter and match indicator
    let resultDisplay = document.querySelector('.score')
    let matchDisplay = document.querySelector('.match-no-match')
    // Chosen Cards and iDs
    let cardsChosen = []
    let cardsChosenId = []
    // Array for save match cards
    let cardsWon = []
    console.log(cardsWon)

    //Create Board
    //Loop over card array for each create img element
    //Set attribute src, id and class
    //Append to grid
    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            let card = document.createElement('img')
            card.setAttribute('src', 'assets/images/cards/card-back.png')
            card.setAttribute('data-id', i)
            card.setAttribute('class', `cards`)
            card.setAttribute('id', `cards`)
            card.addEventListener('click', flipCard)
            grid.appendChild(card)
        };
    };

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
        };

    };

    // Check for Match Cards
    function checkForMatch() {
        // Select all cards
        let cards = document.querySelectorAll('img')
        //Cards Value
        const optionOneId = cardsChosenId[0]
        const optionTwoId = cardsChosenId[1]
        console.log(cards)
        // Check if player choose same cards
        if (optionOneId == optionTwoId) {
            cards[optionOneId].setAttribute('src', 'assets/images/cards/card-back.png')
            cards[optionTwoId].setAttribute('src', 'assets/images/cards/card-back.png')
            matchDisplay.textContent = 'Sorry that is same card'
        }
        // If Match
        else if (cardsChosen[0] === cardsChosen[1]) {
            // Check for cards names
            matchDisplay.textContent = 'You found a match';
            // If is match toggle class hidden 
            // Cards disappear from board
            cards[optionOneId].classList.toggle("hidden");
            cards[optionTwoId].classList.toggle("hidden");
            cards[optionOneId].removeEventListener('click', flipCard)
            cards[optionTwoId].removeEventListener('click', flipCard)
            // Push choosen cards
            cardsWon.push(cardsChosen)
            // If not match
            // Flip cards back and show back card image
        } else {
            cards[optionOneId].setAttribute('src', 'assets/images/cards/card-back.png')
            cards[optionTwoId].setAttribute('src', 'assets/images/cards/card-back.png')
            matchDisplay.textContent = 'Sorry No Match!'
        }
        cardsChosen = []
        cardsChosenId = []
        resultDisplay.textContent = cardsWon.length
        if (cardsWon.length === cardArray.length / 2) {
            document.getElementById("end-screen").classList.remove("hidden");
            $("#grid").empty();
        }
    };

    createBoard();
 
   function resetGame() {
    createBoard();

};


   


// Main Menu New Game Button
$('.new-game-button').click(function () {
    $(".main-menu-screen").toggleClass("hidden");
});

$('.new-game-button').click(function () {
    $(".game-screen").removeClass("hidden").addClass('visible');
});

$('.restart-game').click(function () {
    $("#end-screen").toggleClass("hidden");
})

