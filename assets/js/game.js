//Game sounds
class audioControl {
    constructor() {
        this.flipSound = new Audio('assets/audio/flip-card.mp3');
        this.winSound = new Audio('assets/audio/win.mp3');
        this.noMatchSound = new Audio('assets/audio/no-match.mp3');
        this.click = new Audio('assets/audio/click.mp3');
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
    buttonClick() {
        this.click.play();
    }
}

// Cards Faces
// Card Array
const easyList = [
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
        name: 'KS2',
        img: 'assets/images/cards/KS.png'
    },
    {
        name: 'KS2',
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

const mediumList = [
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
        name: 'KS2',
        img: 'assets/images/cards/KS.png'
    },
    {
        name: 'KS2',
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
    {
        name: 'JS',
        img: 'assets/images/cards/JS.png'
    },
    {
        name: 'JS',
        img: 'assets/images/cards/JS.png'
    },
    {
        name: 'JH',
        img: 'assets/images/cards/JH.png'
    },
    {
        name: 'JH',
        img: 'assets/images/cards/JH.png'
    },
    {
        name: '10S',
        img: 'assets/images/cards/10S.png'
    },
    {
        name: '10S',
        img: 'assets/images/cards/10S.png'
    },
];

const hardList = [
    {
        name: 'AC',
        img: 'assets/images/cards/AC.png'
    },
    {
        name: 'AC',
        img: 'assets/images/cards/AC.png'
    },
    {
        name: 'AD',
        img: 'assets/images/cards/AD.png'
    },
    {
        name: 'AD',
        img: 'assets/images/cards/AD.png'
    },
    {
        name: 'AH',
        img: 'assets/images/cards/AH.png'
    },
    {
        name: 'AH',
        img: 'assets/images/cards/AH.png'
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
        name: 'KC',
        img: 'assets/images/cards/KC.png'
    },
    {
        name: 'KC',
        img: 'assets/images/cards/KC.png'
    },
    {
        name: 'KD',
        img: 'assets/images/cards/KD.png'
    },
    {
        name: 'KD',
        img: 'assets/images/cards/KD.png'
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
        name: 'KS',
        img: 'assets/images/cards/KS.png'
    },
    {
        name: 'KS',
        img: 'assets/images/cards/KS.png'
    },
    {
        name: 'QC',
        img: 'assets/images/cards/QC.png'
    },
    {
        name: 'QC',
        img: 'assets/images/cards/QC.png'
    },
    {
        name: 'QD',
        img: 'assets/images/cards/QD.png'
    },{
        name: 'QD',
        img: 'assets/images/cards/QD.png'
    },{
        name: 'QH',
        img: 'assets/images/cards/QH.png'
    },{
        name: 'QH',
        img: 'assets/images/cards/QH.png'
    },{
        name: 'QS',
        img: 'assets/images/cards/QS.png'
    },{
        name: 'QS',
        img: 'assets/images/cards/QS.png'
    },
];


    

//  Game timer
function changeValue() {
    document.getElementById("timer").innerHTML = "Your time : " + ++value;
};

let timer = null;

function startTimer() {
  stopTimer(); // stoping the previous counting (if any)
  value = 0;
  timer = setInterval(changeValue, 1000);
}

let stopTimer = function() {
    // clear timer timer start from 0
  clearInterval(timer);
   // update visual counter to 0
  document.getElementById("timer").innerHTML = "0";
}

/*
    Game Levels
    Level is determined by player input
*/
let easyLevel = null;
    $('#lvlOne').click(() => {
        easyLevel = true;
        startGame ()
});

let mediumLevel = null;
    $('').click(() => {
        mediumLevel = true;
        startGame ()     
});

let hardLevel = null;
    $('').click(() => {
        hardLevel = true;
        startGame ()     
});


function startGame() {
    if (easyLevel == true) {
        easyLevel === easyList;
        easyList.sort(() => 0.5 - Math.random());
        $(".easy").removeClass("hidden").addClass("visible");
        stopTimer();
    } else if (mediumLevel == true) {
        mediumLevel === mediumList;
        mediumList.sort(() => 0.5 - Math.random());
        $(".easy, .medium").removeClass("hidden").addClass("visible");
        stopTimer();
    } else if (hardLevel == true) {
        hardLevel === hardList;
        hardList.sort(() => 0.5 - Math.random());
        $(".easy, .medium, hard").removeClass("hidden").addClass("visible");
        stopTimer();
    }
}


// Grid element
const grid = {
    easyGrid: easyList,
    mediumGrid: mediumList,
    hardGrid: hardList  
}

/* document.querySelectorAll('.card__face--back'); */
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
function createCard() {
    for (let i = 0; i < easyList.length; i++) {
        let card = document.getElementsByName('card__face--back');
        card.setAttribute('src', );
        card.setAttribute('data-id', i);
        card.setAttribute('class', `cards`);
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
    console.log(cardId)
    cardsChosen.push(cardArray[cardId].name);
    console.log(cardArray)
    console.log(cardsChosen)
    cardsChosenId.push(cardId);
    console.log(cardsChosenId)
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
        cards[optionOneId].setAttribute('src', 'assets/images/cards/back-of-card.png');
        cards[optionTwoId].setAttribute('src', 'assets/images/cards/back-of-card.png');
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
        cards[optionOneId].setAttribute('src', 'assets/images/cards/back-of-card.png');
        cards[optionTwoId].setAttribute('src', 'assets/images/cards/back-of-card.png');
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
    cardsWon = [];
    
}

// Main Menu 
// New Game Button
// Main Menu disapear and Game appear
$('.new-game-button').click( function () {
    $(".main-menu-screen").toggleClass("hidden").removeClass("visible"),
    $(".game-screen").removeClass("hidden").addClass("visible");
    audio.buttonClick();
});

// Main menu
// Settings Button
// Main Menu disapear and settings appear
$('.settings-button').click( function () {
     $(".main-menu-screen").addClass("hidden"),
     $(".settings-menu-screen").removeClass("hidden").addClass("visible");
     audio.buttonClick();
});

// Instruction
// Instruction Button
// Main Menu disapear and Instruction appear
$('.instruction-button').click( function () {
    $(".main-menu-screen").addClass("hidden"),
    $(".instruction-screen").removeClass("hidden").addClass("visible");
    audio.buttonClick();
});

// Instruction
// Instruction back button
// From Instruction to Main Menu
$('.instruction-back-button').click( function() {
    $(".main-menu-screen").removeClass("hidden").addClass("visible"),
    $(".instruction-screen").removeClass("visible").addClass("hidden");
    audio.buttonClick();
});

// Settings 
// Settings back button to Main Menu 
$('.settings-back-button').click( function() {
    $(".main-menu-screen").removeClass("hidden"),
    $(".settings-menu-screen").addClass("hidden").removeClass("visible");
    audio.buttonClick();
});

// Game Screen
// From Game Screen to Main Menu
$('.game-screen-main-menu-button').click( function() {
    $(".game-screen").addClass("hidden").removeClass("visible"),
    $(".main-menu-screen").addClass("visible").removeClass("hidden");
    audio.buttonClick();
    $("#grid").empty();
    cardsWon = [];
});

// End game screen
$('.restart-game').click( function () {
    $("#end-screen").toggleClass("hidden");
    audio.buttonClick();
});

// From Game End screen to Main Menu and back
$('.main-menu-in-game').click( function () {
    $(".game-screen").addClass("hidden").removeClass("visible"),
    $(".main-menu-screen").removeClass("hidden").addClass("visible"),
    $("#end-screen").removeClass("visible").addClass("hidden");
    audio.buttonClick();
    
});

// Settings Themes
// Green Themes
// Check if screens have any theme if so remove and add this one
$('.setting-theme-green').on('click',function() {
    if($(".screens").hasClass("theme-red") || ("theme-yellow")) {
        $(".screens").removeClass("theme-red").removeClass("theme-yellow"),
        $(".screens").addClass("theme-green");
    }
    audio.buttonClick();
});

// Settings Themes
// Yellow Themes
// Check if screens have any theme if so remove and add this one
$('.setting-theme-yellow').on('click',function() {
    if($(".screens").hasClass("theme-red") || ("theme-green")) {
        $(".screens").removeClass("theme-red").removeClass("theme-green"),
        $(".screens").addClass("theme-yellow");
    }
    audio.buttonClick();
});

// Settings Themes
// Red Themes
// Check if screens have any theme if so remove and add this one
$('.setting-theme-red').on('click',function() {
    if($(".screens").hasClass("theme-yellow") || ("theme-green")) {
        $(".screens").removeClass("theme-yellow").removeClass("theme-green"),
        $(".screens").addClass("theme-red");
    }
    audio.buttonClick();
});


