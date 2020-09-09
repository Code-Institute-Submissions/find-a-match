//Game sounds
class audioControl {
    constructor() {
        this.flipSound = new Audio('assets/audio/flip-card.mp3');
        this.winSound = new Audio('assets/audio/win.mp3');
        this.noMatchSound = new Audio('assets/audio/no-match.mp3');
        this.click = new Audio('assets/audio/click.mp3');
        this.bgMusic = new Audio('assets/audio/bg-music.mp3')
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
    startMusic() {
        this.bgMusic.currentTime = 2;
        this.bgMusic.play();
    }
    stopMusic() {
        this.bgMusic.pause();
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

const hardList = [
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

//  Game timer
function changeValue() {
    document.getElementById("time").innerHTML = "Your time : " + ++value;
};

//background music toggler
$('#soundBtn').click(() => {
    let soundOn = sound;
    soundOn ? stopBgSound() : startBgSound();
});

function stopBgSound() {
    sound = false;
    $('#soundBtn').addClass('soundOff');
    $('#soundBtn').removeClass('soundOn');
    $('#soundBtn').text("SOUND OFF");
    audio.stopMusic();
}

function startBgSound() {
    sound = true;
    $('#soundBtn').addClass('soundOn');
    $('#soundBtn').removeClass('soundOff');
    $('#soundBtn').text("SOUND ON");
    audio.startMusic();
}

let timer = null;
let sound = true;

function startTimer() {
  stopTimer(); // stoping the previous counting (if any)
  value = 0;
  timer = setInterval(changeValue, 1000);
}

let stopTimer = function() {
    // clear timer timer start from 0
  clearInterval(timer);
   // update visual counter to 0
  document.getElementById("time").innerHTML = "0";
}


// Grid element
const grid = document.querySelector('.grid');
// Score counter and match indicator
/* let resultDisplay = document.querySelector('.score'); */
let matchDisplay = document.querySelector('.match-no-match');
// Chosen Cards and iDs
let cardsChosen = [];
let cardsChosenId = [];
// Array for save match cards
let cardsWon = [];
// Sound from constructor
let audio = new audioControl();

let easyLevel = false; //TRUE FOR TESTING REMOVE AND CHANGE TO --> null
$('#easy').click(() => {
    $(".game-screen").removeClass("hidden").addClass("visible"),
    $(".lvl-screen").addClass("hidden").removeClass("visible");
    easyLevel = true;
    audio.startMusic();
    startGame();
    setTimeout(startTimer, 1500);
});

$('#hard').click(() => {
    $(".game-screen").removeClass("hidden").addClass("visible"),
    $(".lvl-screen").addClass("hidden").removeClass("visible"),
    easyLevel = false;
    startGame();
    setTimeout(startTimer, 1500);
});


/*
Create Board
Loop over card array for each create img element
Set attribute src, id and class
Append to grid
 */

function createBoard() {

    if (easyLevel) {
        cardsList = easyList 
    } else {
        cardsList = hardList
    }
        console.log(cardsList)
    for (let i = 0; i < cardsList.length; i++) {
        cardsList.sort(() => 0.5 - Math.random());
        let card = document.createElement('img');
        card.setAttribute('src', 'assets/images/cards/card-back.png');
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
    cardsChosen.push(cardsList[cardId].name);
    cardsChosenId.push(cardId);
    this.setAttribute('src', cardsList[cardId].img);
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
    /* resultDisplay.textContent = cardsWon.length; */
    if (cardsWon.length === cardsList.length / 2) {
        document.getElementById("end-screen").classList.remove("hidden");
        $("#grid").empty();
        stopTimer();
        if (value < 20) {
            alert("genius")
        } if (value > 20) {
            console.log("try harder")
        }
        console.log(value)
        let value = 10;
        cardsWon = [];
    }
}
Rewards();
value = 51;

function Rewards(rewardOne, rewardTwo, rewardThree, rewardFour) {
    this.rewardOne = 'YOUR ARE GENIUS!';
    this.rewardTwo = 'Ahhhh SO CLOSE!!!';
    this.rewardThree = 'Common YOU can do IT!!';
    this.rewardFour = 'YOU CAN DO IT!';
    this.rewardFifth = 'WHY YOU NOT PLAYING?';
};

function showReward() {
    if (( value <= 30 && easyLevel == true) ||
        ( value <= 20 && easyLevel == false)) {
        $("#reward-image").append('<img class="reward-image" src="assets/images/rewards/reward-one.png"></img>');
        $("#motivation-message").append('<h1>' + rewardOne + '</h1>');
        $("#score").append('YOUR TIME' + "   " + ':' + "   " + 57);
    } else if (( value <= 45  && easyLevel == true) || 
       ( value <= 30 && easyLevel == false)) {
        $("#reward-image").append('<img class="reward-image" src="assets/images/rewards/reward-two.png"></img>');
        $('#motivation-message').append('<h1>' + rewardTwo + '</h1>');
        $("#score").append('YOUR TIME' + "   " + ':' + "   " + 57)
    } else if ((value <= 50  && easyLevel == true) || 
       ( value <= 35 && easyLevel == false)) {
        $("#reward-image").append('<img class="reward-image" src="assets/images/rewards/reward-three.png"></img>');
        $('#motivation-message').append('<h1>' + rewardThree + '</h1>');
        $("#score").append('YOUR TIME' + "   " + ':' + "   " + 57)
    } else if ((value <= 60  && easyLevel == true) || 
       ( value <= 40 && easyLevel == false)) {
        $("#reward-image").append('<img class="reward-image" src="assets/images/rewards/reward-four.png"></img>');
        $('#motivation-message').append('<h1>' + rewardFour + '</h1>');
        $("#score").append('YOUR TIME' + "   " + ':' + "   " + 57)
    } else if ((value > 60  && easyLevel == true) || 
       ( value > 50 && easyLevel == false)) {
        $("#reward-image").append('<img class="reward-image" src="assets/images/rewards/reward-fifth.png"></img>');
        $('#motivation-message').append('<h1>' + rewardFifth + '</h1>');
        $("#score").append('YOUR TIME' + "   " + ':' + "   " + 57)
    }     
}  

showReward()

function resetGame() {
    stopTimer();
    $("#grid").empty();
    startGame();
    matchDisplay.textContent = '-';
    setTimeout(startTimer, 1500);
    cardsWon = [];
}

function startGame() {
    createBoard();
    cardsWon = [];
}



// Main Menu 
// New Game Button
// Main Menu disapear and Game appear
$('.new-game-button').click( function () {
    $(".main-menu-screen").toggleClass("hidden").removeClass("visible"),
    $(".lvl-screen").removeClass("hidden").addClass("visible");
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
})

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


