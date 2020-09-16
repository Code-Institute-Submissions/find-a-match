<div align="center">
<img src="/readme_files/find-a-match.png" target="_blank" rel="noopener" alt="find-a-match">
<h1>Find-A-Match</h1>
</div>

<div align="center"> 

[Find-A-Match](https://ivantepes.github.io/find-a-match/) is an engaging and entertaining single player memory card game with dose of humor, designed for pleasure and entertainment for all ages.
Features of game are easy to operate and navigate buttons, 2 level of difficulty, game themes, card match indicator and reward based on score (time).
Game rules are simple find two matching cards, find them all and game ends. 
<br>

[Find-A-Match game page](https://ivantepes.github.io/find-a-match/)

</div>

# Table of contents 

- [UX](#ux)
  * [Project Goals](#project-goals)
    + [User Goals:](#user-goals-)
    + [User Stories:](#user-stories-)
    + [Developer Goals](#developer-goals)
  * [Design](#design)
    + [Fonts](#fonts)
    + [Colours](#colours)
    + [Buttons](#buttons)
    + [Shadows](#shadows)
    + [Card images](#card-images)
    + [Audio files](#audio-files)
    + [Layout](#layout)
    + [Wireframes](#wireframes)
- [Features](#features)
  * [Existing Features](#existing-features)
    + [Smaller devices](#smaller-devices)
    + [Main menu](#main-menu)
    + [Instructions](#instructions)
    + [Settings](#settings)
    + [Game difficulty](#game-difficulty)
    + [Game screen](#game-screen)
      - [Match indicator.](#match-indicator-inform-player-about-card-match)
      - [Game buttons :](#game-buttons-offer-player-three-options-)
      - [Score counter](#score-counter)
    + [End game screen](#end-game-screen)
      - [Rewards](#rewards)
    + [Features Left to Implement](#features-left-to-implement)
- [Tehnologies used](#tehnologies-used)
- [Testing](#testing)
- [Deployment](#deployment)
- [Credits](#credits)
  * [Media](#media)
  * [Inspiration](#inspiration)
- [Acknowledgements](#acknowledgements)



## UX 

### Project Goals

The game has been designed to be as intutive and user friendly as possible. It allow for user to find all matching cards because the game does not have a given time but uses time as a measure of reward.


#### User Goals:

- A website that offers an easily understandable memory game.
- A website that offers good visual interaction.
- A website that provide easily find and understand the controls for the game, so that I can operate them easily.
- A website that provide audio and/or visual feedback when I play the game, so    that I know when I have clicked or not clicked something.
- A website that i can interact on desktop, tablet or mobile.

#### User Stories:

- As a user i expect the game to work on intutive way.
- As a user i want to be able to read game instructions.
- As a user i want to be able to change background of game.
- As a user i want to be able to choose difficulty of game.
- As a user i want to be able to see my time of play.
- As a user i want to be able to reset game and start over.
- As a user i want to be able to control background sound of game.
- As a user i want to be able to get feedback about my move match / miss
- As a user i want to be able to restart my game.
- As a user i want to be able to get any feedback about my play.
- As a user i want to be able to return to main menu and choose differet          difficulty.
- As a user i want to be able to play game on my favorite device.

#### Developer Goals

- Offer a game that i can share with others and show my work.
- Offer a fun, simple and addictive game to play.
- Offer a appealing looking game for player.
- Offer challange for player.
- Offer clear information to player about their play.
- Offer player to choose their theme to play on.

### Design 

This project was developed with a focus on a mobile approach first. However, with full responsiveness on other screen sizes.
Game is developed with focus on mobile device and play in landscape mode.
When the player tries to enter the game and the screen is in a portrait position, the player receives a message to rotate his device.
Theme choose for this memory game are playing poker cards and emoji for rewards and instructions.

#### Fonts

- The primary font used in this game is [Goblin One](https://fonts.google.com/specimen/Goblin+One?query=Goblin+One+) 

- I choose this font for game because fits in well with style of game.

#### Colours

- In the colour scheme, i used black, red and yellow which combined together      gave me favoured the easy visualization of the information.

- Game uses three background themes red, green and yellow.

- Color sheme and background themes can find [here.](/readme_files/readme/colors.png)

#### Buttons

- Buttons on this application are made with **Bootstrap**. Big and easy to use.

#### Shadows

- Shadows are used on whole page for better appealing and visualization.

#### Card images

- Cards used for this project is poker playing cards however not a full deck      because game not use that much cards.

#### Audio files

- Audio files is matched with cards and use poker audio themes for      click buttons, match cards and miss cards.
- Background music for game is taken from [Soundimage.org](https://soundimage.org/puzzle-music/).

#### Layout

This is a multi-page layout, but designed with simplicity in mind.
- The home page displays the menu with three options.
    - New game - which on press transfer user to difficulty menu.
    - Instructions - which on press show player game rules and instruction of game.
    - Settings - which transfer player to settings menu where he can choose from three background option.

#### Wireframes 

- Is designed with [Balsamiq Wireframes](https://balsamiq.com/wireframes/). These were the first version of scope and some things have changed, removed or left for later development.

Wireframes can be find  [here.](/readme_files/find-a-match-wireframes.pdf)

- Flow Chart is designed with [Lucidchart](https://app.lucidchart.com/).
Flow Chart can be find [here.](/readme_files/find-a-match-flowchart.pdf)

## Features

### Existing Features

#### Smaller devices
- This game is playing in landscape mode and require from player to rotate screen in landscape mode so that game can start.
- If player rotate screen in middle of play music of game stops and player is asked to rotate screen back in landscape mode.

<div align="center">
<img src="/readme_files/rotate-device.png" height="300" width="300" target="_blank" rel="noopener" alt="main-menu">
</div>

#### Main menu

- On arriving at the page for the first time player land on Main menu and have    chooice for futher actions what he want to make.

<div align="center">
<img src="/readme_files/main-menu.png" width="500" target="_blank" rel="noopener" alt="main-menu">
</div>

#### Instructions

- Provide user with clear instruction what is expected from player and how to play a game.

<div align="center">
<img src="/readme_files/instructions.png" width="500" target="_blank" rel="noopener" alt="instructions">
</div>

#### Settings

- Offer player three background theme to choose from.

<div align="center">
<img src="/readme_files/settings.png" width="500" target="_blank" rel="noopener" alt="settings">
</div>

#### Game difficulty

- Offer player 2 level of difficulty easy and hard.
- Easy level contain 12 cards.
- Hard level contain 18 cards.

<div align="center">
<img src="/readme_files/levels.png" width="500" target="_blank" rel="noopener" alt="levels">
</div>

#### Game screen
- Game screen contain game feedback indicators and buttons.

##### Match indicator inform player about card match.
- There are three indicator with corresponding colors and message.

<div align="center">
<img src="/readme_files/match.png" width="500" target="_blank" rel="noopener" alt="levels">

</div>
<div align="center">
<img src="/readme_files/nope.png" width="500" target="_blank" rel="noopener" alt="levels">
</div>

<div align="center">
<img src="/readme_files/same-card.png" width="500" target="_blank" rel="noopener" alt="levels">
</div>

##### Game buttons offer player three options:
- Reset Game - offer player options to restart game.
- Main Menu - offer player options to go back to main menu.
- Sound On - sound is on by default and start when player choose level.

<div align="center">
<img src="/readme_files/game-buttons.png" width="500" target="_blank" rel="noopener" alt="levels">
</div>

##### Score counter
- Counter start when player choose his level of play it start from -2         giving player enough time to start his play.
- After player found all cards score is to validate his progress in game      and show player his reward.

<div align="center">
<img src="/readme_files/score.png" width="500" target="_blank" rel="noopener" alt="levels">
</div>

#### End game screen

- End game screen provide player his reward and give him option to go back in     main menu or to restart game.

##### Rewards 

- When player find all matching cards time spend on finding them is taken to      validate and show player feedback about his play.
- There are 5 levels of rewards for player time of play.
- Each reward give player corresponding message here is where humor part come     in.

<div align="center">
<img src="/readme_files/reward-1.png" width="500" target="_blank" rel="noopener" alt="reward">
</div>

<div align="center">
<img src="/readme_files/reward-2.png" width="500" target="_blank" rel="noopener" alt="reward">
</div>

<div align="center">
<img src="/readme_files/reward-3.png" width="500" target="_blank" rel="noopener" alt="reward">
</div>

<div align="center">
<img src="/readme_files/reward-4.png" width="500" target="_blank" rel="noopener" alt="reward">
</div>

<div align="center">
<img src="/readme_files/reward-5.png" width="500" target="_blank" rel="noopener" alt="reward">
</div>

#### Features Left to Implement

- Improvements on game play.
- Additional difficulty level.
- Different themes for kids.
- Change level button on end game screen.
- Record Screen for store best records of game.


## Tehnologies used

- [HTML](https://www.w3.org/TR/html52/)
    - Standard markup language for creating Web pages.
- [CSS](https://www.w3.org/Style/CSS/Overview.en.html)
    - used for describing the presentation of a document written in a markup      language like HTML.
- [JavaScript](https://www.w3.org/wiki/JavaScript)
    - used for logic and interactive parts of game.
- [JQuery](https://jquery.com)
    - The project uses JQuery to simplify DOM manipulation.
- [Bootstrap](https://www.bootstrapcdn.com/)
    - Used for better responsiveness and organization.
- [Google Fonts](https://fonts.google.com/)
    - Used to provide font.
- [Autoprefixer](https://autoprefixer.github.io/)
    - Used to valid code for all browsers.
- [Favicon & App Icon Generator](https://www.favicon-generator.org/)
    - Used for creating favicon for site.
- [HTML Formatter](https://www.freeformatter.com/html-formatter.html)
    - Used to formating code.
- [Photoshop](https://www.adobe.com/ie/products/photoshop.html)
    - Used to edit all pictures on the site and creating some presentation        images for this README.
- [Lucidchart](https://app.lucidchart.com/)
    - Used to make flowchart
- [Pattern Cooler](https://www.patterncooler.com/)
    - Used to make pattern images for background themes
- [Troy](http://troy.labs.daum.net/)
    - Used for testing game on mobile devices.
- [Balsamiq Wireframes](https://balsamiq.com/wireframes/)
    - Used to create the wireframes and planning this project.

## Testing

Testing information can be found in separate [testing.md](testing.md) file.

## Deployment

This project was developed using the [Gitpod](https://www.gitpod.io/) Integrated development environment, version controlled by committing to git and pushing to[GitHub](https://github.com/) via the GitPod IDE.

- To deploy this page to **GitHub** pages from its specific **GitHub** repository the steps followed were;**

- Scroll to the top of this **GitHub** page or press **[here](https://ivantepes.github.io/find-a-match/)**.

- From the horizontal menu select **Settings**
    
- The page should be open on **Options** if is not select **Options** from left menu.
    
- Scroll down to the **GitHub Pages section**
    
- Under **Source** select **Master branch**
    
- On selecting **Master branch** the page is automatically refreshed, the website is now delployed.

- The link to the webpage can be found at the top of the **GitHub Pages section**

**How to run this project locally?**

- To clone this project from GitHub:

- Follow this link to the Project GitHub repository.

- Under the repository name, click **Clone or download**

- In the Clone with HTTPs section, copy the clone URL for the repository

- In your local IDE open the terminal

- Change the current working directory to the location where you want the cloned directory to be made.

- Type **git clone**, and then paste the URL you copied from repository.

- Press Enter. Your local clone will be created

## Credits

### Media

- Card images and emoji images are downloaded from **[Google](https://www.google.com/)**

- Sounds for game are download from [Soundimage.org](https://soundimage.org/puzzle-music/).

### Inspiration 

- Color Patterns from **[Adobe Color](https://color.adobe.com)**.

- Font Inspiration from **[Reliable](https://www.reliablepsd.com/)**.

- Inspiration, ideas, problems solutions from:
    * **[Free Front End](https://freefrontend.com/)**
    * **[Codepen](https://codepen.io/)**
    * **[w3schools.com](https://www.w3schools.com/)**
    * **[Stack Overflow](https://stackoverflow.com/)**
    * **[Bootstrap](https://getbootstrap.com/docs/4.5/getting-started/introduction/)**
    * **[Behance](https://www.behance.net/onboarding/adobe)**


## Acknowledgements

- I'd like to thank my mentor in Code Institute **[Precious Ijege](https://www.linkedin.com/in/precious-ijege-908a00168/)** who had all the patience to explain and make me understand certain concepts and peculiarities of the project. And also for useful and constructive feedback through this project.

- To my girlfriend who was my biggest helper, the biggest critic, the voice of common sense in some difficult moments during the making of this project.

- All people, including family, friends, and colleagues who have tested the application on their real devices, reporting to me about any usability issues and giving improvement tips to improve the usability.

- To all of the **[Code Institute Slack](https://codeinstitute.net/)** community for the help in my issues and review to my project.

### The content of this website is for educational purposes only. 
### Thank you.
