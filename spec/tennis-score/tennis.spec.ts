import { ScoreDisplay } from "../../src/tennis-score/ScoreDisplay";
import { TennisScore } from "../../src/tennis-score/TennisScore";

describe('displayScoreToLog', () => {

    it('should call getScore', () => {
        spyOn(TennisScore, 'getScore');
        ScoreDisplay.displayScoreToLog();
        expect(TennisScore.getScore).toHaveBeenCalled();
    });

    it('should call console.log with "Player1 - 0 | 0 - Player2"', () => {
        spyOn(console, 'log');
        const expected: string = "Player1 - 0 | 0 - Player2";

        ScoreDisplay.displayScoreToLog();
        expect(console.log).toHaveBeenCalledWith(expected);    
    
    });

});

describe('convertPointsToScore', () => {
    const testCases = [
        { points: 0, expected: 0 },
        { points: 1, expected: 15 },
        { points: 2, expected: 30 },
        { points: 3, expected: 40 },
    ];

    /**
     * Test ALL points for the convertPointsToScore method
     */
    testCases.forEach(({ points, expected }) => {
        it(`should return ${expected} when points is ${points}`, () => {
            const score = TennisScore.convertPointsToScore(points);
            expect(score).toBe(expected);
        });
    });

    it('should throw an error when points is not in [0,1,2,3]', () => {
        expect(() => {
            TennisScore.convertPointsToScore(4);
        }).toThrowError("Invalid number of points");
    });
});

describe('winPoint', () => {

    it('should increment the score of player', () => {
        let tennisScore = new TennisScore();
        let lastPointsP1 = tennisScore.wonPointsPlayer1;
        let lastPointsP2 = tennisScore.wonPointsPlayer2;
        tennisScore.winPoint(1);

        expect(lastPointsP1+1).toEqual(tennisScore.wonPointsPlayer1);
        expect(lastPointsP2).toEqual(tennisScore.wonPointsPlayer2);
    });

});