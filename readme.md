# README
This repository is dedicated to practicing TDD katas using TypeScript and the Jasmine testing framework.
___
## Tennis Score
Write program which calculate and display tennis scoring game.

| Players  | SETS | GAMES | POINTS |
| -------- | ---- | ----- | ------ |
| Player 1 | 2    | 2     | 40     |
| Player 2 | 1    | 0     | 0      | 

- Pts : 0, 15, 30, 40, GAME WIN
- SET : 
    - 6 games won for set win.
    - if score is 6-6 games, play tie break
        tie break : 7pts won for win set
- *MATCH : Won 3 or 5 sets. (not implemented).*
### TODO
- Fix test
- Display GAMES
- Display SETS
___
## Fizz Buzz
Write program which print for each number between 0 and 100 :
- "Fizz", if is multiple of 3.
- "Buzz", if is multiple of 5.
- "FizzBuzz", if is multiple of 3 and 5.
- This number in else case.