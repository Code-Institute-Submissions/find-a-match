# Find-A-Match - Testing details

[Main README.md file](README.md)

- [Find-A-Match - Testing details](#find-a-match---testing-details)
  * [Development](#development)
  * [Browser used in testing](#browser-used-in-testing)
  * [Validation services](#validation-services)
  * [User stories testing](#user-stories-testing)
  * [Testing functionality of the site on varied mobile devices.](#testing-functionality-of-the-site-on-varied-mobile-devices)
    + [Landscape game mode](#landscape-game-mode)
      - [**NOTE FOR CODE INSTITUTE ASSESSMENT TEAM**](#--note-for-code-institute-assessment-team--)
  * [Known Bug](#known-bug)

## Development
During the development of this project, I have experienced some problems. Browser used for testing of the application during development was **[Google Chrome](https://www.google.com/chrome/)** and **[Dev Tools](https://developers.google.com/web/tools/chrome-devtools)** from the same browser. For audit the site i have used **[Lighthouse](https://developers.google.com/web/tools/lighthouse/)** from **Chrome DevTools**. Exhaustively testing the functionality of each part of the application and managed to solve most of the problems that i have came across before writing this document. However how process of testing is being expanding on different browsers and different devices some problems are found and noticed. Some of them I have solved and corrected, some remained uncorrected until the end of the test.

I received help from some family members and friends to do the tests on application.

Testing is conduct by sharing application to them and then had conversation about the application.

This was the primary method of testing the application. People were asked to visit the website on a variety of devices. This feedback was very useful to determine any bugs that may have been present. I also tested the app manually myself on a variety of browsers and tools.


## Browser used in testing 

- [Google Chrome](https://www.google.com/chrome/)
    - Used for testing the site through all developing process and DevTools for responsiveness and scaling issues on different screen sizes.
- [Mozilla Firefox](https://www.mozilla.org/en-US/exp/)
    - Used for testing site and responsiveness and scaling.
- [Opera Web Browser](https://www.opera.com)
    - Used for testing site and responsiveness and scaling.
- [Microsoft Edge](https://www.windowscentral.com/microsoft-edge)
    - Used for testing site and responsiveness and scaling.

- During the testing of the site, no bugs or problems in the operation of the game were noticed.

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
    - Game offers Instruction button on Main Menu with clear explanation of game.
- As a user i want to be able to change background of game.
    - On Main Menu user has Settings where he can find three different background for him to choose.
- As a user i want to be able to choose difficulty of game.
    - When player press New Game in Main Menu he has options to choose between 2 difficulty levels (Easy and Hard).
- As a user i want to be able to see my time of play.
    - On the left side of  the screen user can check his playing time.
- As a user i want to be able to reset game and start over.
    - User have option to reset his game in the middle of  the game and start over if pressed on RESET button.
- As a user i want to be able to control background sound of game.
    - User have option to turn off or turn back the game music if pressed on SOUND ON button.
- As a user i want to be able to get feedback about my move match / miss.
    - On the left side of the screen, the user is getting feedback about his game green for hit / red for miss and yellow if he presses on the same card.
- As a user i want to be able to get any feedback about my play.
    - After the user matches all the cards he gets the feedback about his game in form of 5 different messages.
- As a user i want to be able to restart my game.
    - When the user finishes the game, on reward screen he gets the options to restart his game and start over.
- As a user i want to be able to return to main menu and choose differet              difficulty.
    - After user find all matching cards on reward screen he has options to go back on main menu and change the level of difficulty of the game.
- As a user i want to be able to play game on my favorite device.
    - Game is playable on all screen devices but on older and small devices the cards are not render as is expected.

## Testing functionality of the site on varied mobile devices.

### Landscape game mode
- Game required from user for start a game to rotate scren in landscape mode.
- This mode create some unexpected behavior when is tested even feature working   perfectly on real devices.


#### **NOTE FOR CODE INSTITUTE ASSESSMENT TEAM**
- Site require to be refresh before is tested for mobile screens.
- Assumption is that when is switched to device view dev tool reproduces screen from desktop mode on device mode without load a mobile mode so site requires to be refresh on device mode so mobile mode can be loaded (instructions below).


<div align="center">

![Mobile Testing](/readme_files/mobile-testing-instruction.gif)
</div>



- For this testing i choosed [Troy](http://troy.labs.daum.net/) web page that has different devices in its database as well as different screen sizes.

- Result from this testing shows that game works properly on mobile devices and tablets but has problem on very small devices screens like
    - Samsung Galaxy S3, Note2, Note1, Galaxy S2, S1
    - Apple iPhone 4, 5, 5SE etc.

## Known Bug

- Only known bug that was noticed is too quik play and cards stay open or face front when the player makes a miss.

- This is fixed by reducing time for check for match and set up timeout on flipping cards back if the player misses or presses on the same card.






