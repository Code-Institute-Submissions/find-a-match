# Find-A-Match - Testing details

[Main README.md file](README.md)

## Development
During the development of this project, I had the experience of facing some problems. Browser used for testing application during development was **[Google Chrome](https://www.google.com/chrome/)** and **[Dev Tools](https://developers.google.com/web/tools/chrome-devtools)** from same browser. For audit the site i have used **[Lighthouse](https://developers.google.com/web/tools/lighthouse/)** from **Chrome DevTools**. Exhaustively testing the functionality of each part of the application and managed to solve most of the problems that i have came across before writing this document. However how process of testing is being expanding on different browsers and different devices some problems are found and noticed. Some of them I have solved and corrected, some remained uncorrected until the end of the test.

I received help from some family members and friends to do the tests on application.

Testing is conduct by sharing application to them and have conversation about application.

This was the primary method of testing the application. People were asked to visit the website on a variety of devices. This feedback was very uselful to determine any bugs that may have been present. I also tested the app manually myself on a varietly of browsers and tools. 

## Browser used in testing 

- [Google Chrome](https://www.google.com/chrome/)
    - Used for testing site through all developing process and DevTools for responsiveness and scaling issues on different screen sizes.
- [Mozilla Firefox](https://www.mozilla.org/en-US/exp/)
    - Used for testing site and responsiveness and scaling.
- [Opera Web Browser](https://www.opera.com)
    - Used for testing site and responsiveness and scaling.
- [Microsoft Edge](https://www.windowscentral.com/microsoft-edge)
    - Used for testing site and responsiveness and scaling.


## Validation services
The following validation services and used to check the validity of the website code.

- [W3C Markup Validation](https://validator.w3.org/) was used to validate HTML.
<div align="center">
<img src="/readme_files/html-check.png" width="500" target="_blank" rel="noopener" alt="html-result">
</div>

- [W3C CSS validation](https://jigsaw.w3.org/css-validator/) was used to validate CSS.

<div align="center">
<img src="/readme_files/css-check.png" width="500" target="_blank" rel="noopener" alt="css-result">
</div>

- [JSHint](https://jshint.com/) was used to validate JavaScript.


## User stories testing

- As a user i expect the game to work on intutive way.
    - The design of the game gives the user a complete explanation of what to expect behind each click.
- As a user i want to be able to read game instructions.
    - Game offer Instruction button on Main Menu with clear explanation of game.
- As a user i want to be able to change background of game.
    - On Main Menu user have Settings where he can faund three differend backgound for him to choose.
- As a user i want to be able to choose difficulty of game.
    - When player pres New Game in Main Menu have options to choose between 2 difficulty Easy and Hard.
- As a user i want to be able to see my time of play.
    - On left side of screen usec can check his play time.
- As a user i want to be able to reset game and start over.
    - User have option to reset his game in midlle of play and start over if pressed on RESET button.
- As a user i want to be able to control background sound of game.
    - User have option to turn off or turn back game music if pressed on SOUND ON button.
- As a user i want to be able to get feedback about my move match / miss.
    - On left side of screen user is getting feedback about his play green for hit / red for miss and yellow if he press on same card.
- As a user i want to be able to get any feedback about my play.
    - After user match all cards he get feedback about his play in form of 5 different messages.
- As a user i want to be able to restart my game.
    - When user finish game on reward screen he get options to RESTART his game and start over.
- As a user i want to be able to return to main menu and choose differet          difficulty.
    - After user find all matching cards on reward screen he have options to go back on main menu and change difficulty of game.
- As a user i want to be able to play game on my favorite device.
    - Game is playable on all scrren devices but on older and small devices cards are not render as ie expected.

## Testing functionality of the site on varied mobile devices.

- For this testing i choose [Troy](http://troy.labs.daum.net/) web page that has different devices in its database as well as different screen sizes.

- Result from this testing shows that game working propery on mobile devices and tablets but have problem on very small devices screens like 
    - Samsung Galaxy S3, Note2, Note1, Galaxy S2, S1
    - Apple iPhone 4, 5, 5SE etc.

## Known Bugs



