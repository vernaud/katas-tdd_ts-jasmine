import { ScoreDisplay } from "../../src/tennis-score/tennis";
import {TennisScore} from "../../src/tennis-score/tennis";

describe('displayScoreToLog', () => {

    it('should call console.log with "Player1 - 0 | 0 - Player2"', () => {
        spyOn(console, 'log');
        const expected: string = "Player1 - 0 | 0 - Player2";

        ScoreDisplay.displayScoreToLog();
        expect(console.log).toHaveBeenCalledWith(expected);    
    
    });

    it('should call getScore', () => {
        spyOn(TennisScore, 'getScore');
        ScoreDisplay.displayScoreToLog();
        expect(TennisScore.getScore).toHaveBeenCalled();
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
            const score = ScoreDisplay.convertPointsToScore(points);
            expect(score).toBe(expected);
        });
    });

    it('should throw an error when points is not in [0,1,2,3]', () => {
        expect(() => {
            ScoreDisplay.convertPointsToScore(4);
        }).toThrowError("Invalid number of points");
    });
});