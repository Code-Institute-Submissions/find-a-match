

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
        this.bgMusic.currentTime = 0;
        this.bgMusic.play();
    }
    stopMusic() {
        this.bgMusic.pause();
    }
}


/* 
    Easy lvl list cards
    List contain 6 pairs / 12 cards
    Length of list 12
*/
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


/* 
    Hard lvl list cards
    List contain 9 pairs / 18 cards
    Length of list 18
*/
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

// Initial timer and sound states
let timer = null;
let sound = true;


/* 
    Grid selecting div and create grid inside
    Grid size determinated by player input
    Easy 12 titles - Hard 18 titles
*/
const grid = document.querySelector('#grid');


//  Match indicator match / no match
let matchDisplay = document.querySelector('#match-no-match');


/* 
    Cards Choosen and Cards Id
    Determinated by player input
    Used for check for match
    Empyt after Use
*/
let cardsChosen = [];
let cardsChosenId = [];


/* 
    Cards won store matched pair cards
    For each pair matched length +1
    When cards won length reach 6 or 9 game ends
*/
let cardsWon = [];

// Game sounds
let audio = new audioControl();


/* Easy level initial state
   Game level determinated by player choise 
*/
let easyLevel = null; //TRUE FOR TESTING R --> null


/* 
    Game timer functions
    Value is seconds needed for find all matching cards 
*/
// Show time in time element
function changeValue() {
    document.getElementById("time").innerHTML = 'SCORE : ' + ++  value;
};

function startTimer() {
  stopTimer(); // stoping the previous counting (if any)
  value = -2; // start value
  timer = setInterval(changeValue, 1000);
}

let stopTimer = function() {
  clearInterval(timer); // clear timer timer start from 0
   // update visual counter to 0
  document.getElementById("time").innerHTML = " - ";
}

/*   
    Game sound 
    Sound can be controlled only from main menu
*/
// Main Menu button
$('#soundBtn').click(() => {
    let soundOn = sound;
    soundOn ? stopBgSound() : startBgSound();
});

function stopBgSound() {
    sound = false;
    $('#soundBtn').addClass('soundOff');
    $('#soundBtn').removeClass('soundOn');
    $('#soundBtn').text('SOUND OFF');
    audio.stopMusic();
}

function startBgSound() {
    sound = true;
    $('#soundBtn').addClass('soundOn');
    $('#soundBtn').removeClass('soundOff');
    $('#soundBtn').text('SOUND ON');
    audio.startMusic();
}


/* 
    Game Levels Easy and Hard

*/
$('#easy').click(() => {
    $(".game-screen").removeClass("hidden").addClass("visible");
    $(".lvl-screen").addClass("hidden").removeClass("visible");
    $("#grid").addClass('grid-easy').removeClass('grid-hard');
    audio.buttonClick();
    easyLevel = true;
    audio.startMusic();
    startGame();
    setTimeout(startTimer, 1000);
});

$('#hard').click(() => {
    $(".game-screen").removeClass("hidden").addClass("visible");
    $(".lvl-screen").addClass("hidden").removeClass("visible");
    $("#grid").addClass('grid-hard').addClass('col-7').removeClass('grid-easy');
    audio.buttonClick();
    easyLevel = false;
    startGame();
    setTimeout(startTimer, 1000);
});


/*
    Create Board
    Loop over card array for each create img element
    Shuffle cards when player choose level
    Set attribute src, id and class
    Click on card to flip card
    Append to grid
 */
function createBoard() {
    if (easyLevel) {    
        cardsList = easyList 
    } else {
        cardsList = hardList
    }
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


/*
    Flip Card
    Set cards Id
    Set card images
    
*/
function flipCard() {
    let cardId = this.getAttribute('data-id');
    cardsChosen.push(cardsList[cardId].name);
    cardsChosenId.push(cardId);
    this.setAttribute('src', cardsList[cardId].img);
    audio.flip();
    if (cardsChosen.length === 2) { // check if player choose 2 cards
        setTimeout(checkForMatch, 500); // if check for match 500 ms half second
    }
}


// Check for Match Cards
function checkForMatch() {
    // select all cards
    let cards = document.querySelectorAll('img');
    // cards id
    const optionOneId = cardsChosenId[0];
    const optionTwoId = cardsChosenId[1];
    // same cards
    if (optionOneId == optionTwoId) {
        cards[optionOneId].setAttribute('src', 'assets/images/cards/card-back.png');
        cards[optionTwoId].setAttribute('src', 'assets/images/cards/card-back.png');
        // if cards are same show this message
        matchDisplay.textContent = 'SAME CARD!';
        document.getElementById("card-check").classList.add('same-card');
        document.getElementById("card-check").classList.remove('match-cards','no-match' );

    }
    // If Match
    else if (cardsChosen[0] === cardsChosen[1]) {
        // check for cards names
        // if shot this message
        matchDisplay.textContent = 'MATCH!';
        // if is match toggle class hidden 
        // cards disappear from board
        cards[optionOneId].classList.toggle("hidden");
        cards[optionTwoId].classList.toggle("hidden");
        cards[optionOneId].removeEventListener('click', flipCard);
        cards[optionTwoId].removeEventListener('click', flipCard);
        document.getElementById("card-check").classList.add('match-cards');
        document.getElementById("card-check").classList.remove('same-card','no-match' );
        // push choosen cards to cards won
        cardsWon.push(cardsChosen);
        audio.matchCard();
        // If not match
    } else {
         // flip cards back and show back card image
        cards[optionOneId].setAttribute('src', 'assets/images/cards/card-back.png');
        cards[optionTwoId].setAttribute('src', 'assets/images/cards/card-back.png');
        document.getElementById("card-check").classList.add('no-match');
        document.getElementById("card-check").classList.remove('same-card','match-cards' );
        matchDisplay.textContent = 'NOPE!';
        audio.noMatch();
    }
    // clean arrays for next check
    cardsChosen = [];
    cardsChosenId = [];
    // when player finds all cards cards length 6 / 9 game ends
    if (cardsWon.length === cardsList.length / 2) {
        console.log(cardsWon.length)
        document.getElementById("end-screen").classList.remove("hidden");
        /* document.getElementById("card-check").classList.add("hidden"); */
        $("#grid").empty();
        stopTimer();
        Rewards();
        showReward();
        cardsWon = [];
    }
}


//Rewards Messages
function Rewards(rewardOne, rewardTwo, rewardThree, rewardFour) {
    this.rewardOne = 'YOUR ARE GENIUS!';
    this.rewardTwo = 'Ahhhh SO CLOSE!!!';
    this.rewardThree = 'Common YOU can do IT!!';
    this.rewardFour = 'YOU CAN DO IT!';
    this.rewardFifth = 'WHY YOU NOT PLAYING?';
};


/* 
    Show rewards
    Determinate which level is chosen and time
    Then show messages
*/
function showReward() {
    // Under 20 easy 30 hard
    if (( value <= 30 && easyLevel == true) ||
        ( value <= 20 && easyLevel == false)) {
        $("#reward-image").append('<img class="reward reward-image" src="assets/images/rewards/reward-one.png"></img>');
        $("#motivation-message").append('<div class="reward">' + rewardOne + '</div>');
        $("#score").append('<div class="reward">' + 'YOUR TIME' + "   " + ':' + "   " + value +'</div>');

    // Under 45 easy 30 hard
    } else if (( value <= 45  && easyLevel == true) || 
       ( value <= 30 && easyLevel == false)) {
        $("#reward-image").append('<img class="reward reward-image" src="assets/images/rewards/reward-two.png"></img>');
        $('#motivation-message').append('<div class="reward">' + rewardTwo + '</div>');
        $("#score").append('<div class="reward">' + 'YOUR TIME' + "   " + ':' + "   " + value + '</div>')

    // Under 50 easy 35 hard
    } else if ((value <= 50  && easyLevel == true) || 
       ( value <= 35 && easyLevel == false)) {
        $("#reward-image").append('<img class="reward reward-image" src="assets/images/rewards/reward-three.png"></img>');
        $('#motivation-message').append('<div class="reward">' + rewardThree + '</div>');
        $("#score").append('<div class="reward">' + 'YOUR TIME' + "   " + ':' + "   " + value + '</div>')

    // Under 60 easy 40 hard
    } else if ((value <= 60  && easyLevel == true) || 
       ( value <= 40 && easyLevel == false)) {
        $("#reward-image").append('<img class="reward reward-image" src="assets/images/rewards/reward-four.png"></img>');
        $('#motivation-message').append('<div class="reward">' + rewardFour + '</div>');
        $("#score").append('<div class="reward">' + 'YOUR TIME' + "   " + ':' + "   " + value + '</div>')

    // Over 60 easy 50 hard    
    } else if ((value > 60  && easyLevel == true) || 
       ( value > 50 && easyLevel == false)) {
        $("#reward-image").append('<img class="reward reward-image" src="assets/images/rewards/reward-fifth.png"></img>');
        $('#motivation-message').append('<div class="reward">' + rewardFifth + '</div>');
        $("#score").append('<div class="reward">' + 'YOUR TIME' + "   " + ':' + "   " + value + '</div>')
    }     
}  


// For clear rewards messages 
function clearRewards() {
    let rewards = document.getElementsByClassName('reward'),
    element;
        while (element = rewards[0]) {
            element.parentNode.removeChild(element)
    }
}


// Reset Game 
function resetGame() {
    stopTimer();
    $("#grid").empty();
    createBoard();
    document.getElementById("card-check").classList.remove('match-cards','no-match', 'same-card' );
    matchDisplay.textContent = '-';
    setTimeout(startTimer, 1000);
    cardsWon = [];
    clearRewards();
    audio.startMusic();
}


function startGame() {
    createBoard();
    startTimer();
    matchDisplay.textContent = '-';
    setTimeout(startTimer, 1000);
    document.getElementById("card-check").classList.remove('match-cards','no-match', 'same-card' );
}

function stopGame() {
    stopTimer();
    $("#grid").empty();
    document.getElementById("card-check").classList.remove('match-cards','no-match', 'same-card' );
    matchDisplay.textContent = '-';
    audio.stopMusic();
    cardsWon = [];
    clearRewards();
}

/* 
    Main Menu 
    New Game Button
    Main Menu disapear and Game appear
 */
$('.new-game-button').click( function () {
    $("#main-menu-screen").toggleClass("hidden").removeClass("visible"),
    $(".lvl-screen").removeClass("hidden").addClass("visible");
    audio.buttonClick();
});


/*
    Main menu
    Settings Button
    Main Menu disapear and settings appear
*/
$('.settings-button').click( function () {
     $("#main-menu-screen").addClass("hidden"),
     $(".settings-menu-screen").removeClass("hidden").addClass("visible");
     audio.buttonClick();
});


/*
    Instruction
    Instruction Button
    Main Menu disapear and Instruction appear
*/
$('.instruction-button').click( function () {
    $("#main-menu-screen").addClass("hidden"),
    $(".instruction-screen").removeClass("hidden").addClass("visible");
    audio.buttonClick();
});


/*
    Instruction
    Instruction back button
    From Instruction to Main Menu
 */
$('.instruction-back-button').click( function() {
    $("#main-menu-screen").removeClass("hidden").addClass("visible"),
    $(".instruction-screen").removeClass("visible").addClass("hidden");
    audio.buttonClick();
});


/*
Settings 
Settings back button to Main Menu
 */
$('.settings-back-button').click( function() {
    $(".main-menu-screen").removeClass("hidden"),
    $(".settings-menu-screen").addClass("hidden").removeClass("visible");
    audio.buttonClick();
});


/*
    Game Screen
    From Game Screen to Main Menu
 */
$('#game-screen-main-menu-button').click( function() {
    $("#game-screen").addClass("hidden").removeClass("visible"),
    $("#main-menu-screen").addClass("visible").removeClass("hidden");
    audio.buttonClick();
})

$('.game-screen-buttons').click( function() {
    audio.buttonClick();
})

/* 
    End game screen
    Restart button
    End game screen hidden 
    Game screen visible
 */
$("#end-restart-btn").click( function () {
    $('#end-screen').addClass('hidden').removeClass('visible'),
    $('#game-screen').removeClass('hidden').addClass('visible');
    audio.buttonClick();
    resetGame();
});


/* 
    Eng game screen
    Main menu button
    To Main Menu Screen
 */
$('#end-main-menu-btn').click( function () {
    $('#end-screen').addClass('hidden').removeClass('visible'),
    $('#main-menu-screen').removeClass('hidden').addClass('visible'),
    $('#game-screen').removeClass('visible').addClass('hidden');
    audio.buttonClick();
    stopGame();
    
});


/*
    Settings Themes
    Green Themes
    Check if screens have any theme if so remove and add this one
 */
$('.setting-theme-green').on('click',function() {
    if($(".screens").hasClass("theme-red") || ("theme-yellow")) {
        $(".screens").removeClass("theme-red").removeClass("theme-yellow"),
        $(".screens").addClass("theme-green");
    }
    audio.buttonClick();
});


/*
    Settings Themes
    Yellow Themes
    Check if screens have any theme if so remove and add this one
*/
$('.setting-theme-yellow').on('click',function() {
    if($(".screens").hasClass("theme-red") || ("theme-green")) {
        $(".screens").removeClass("theme-red").removeClass("theme-green"),
        $(".screens").addClass("theme-yellow");
    }
    audio.buttonClick();
});


/*
    Settings Themes
    Red Themes
    Check if screens have any theme if so remove and add this one
 */
$('.setting-theme-red').on('click',function() {
    if($(".screens").hasClass("theme-yellow") || ("theme-green")) {
        $(".screens").removeClass("theme-yellow").removeClass("theme-green"),
        $(".screens").addClass("theme-red");
    }
    audio.buttonClick();
});


