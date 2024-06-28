import { TennisScore } from "../../src/tennis-score/TennisScore";

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
            // TODO: fix the following line
            // const score = TennisScore.convertPointsToScore(points);
            // expect(score).toBe(expected);
        });
    });

    it('should throw an error when points is not in [0,1,2,3]', () => {
        // expect(() => {
            // TODO: fix the following line
            // TennisScore.convertPointsToScore(4);
        // }).toThrowError("Invalid number of points");
    });
});

describe('winPoint', () => {

    it('should increment the score of player', () => {
        const PLAYER1 = 1;
        let tennisScore = new TennisScore();
        let lastPointsP1 = tennisScore.wonPointsPlayer1;
        let lastPointsP2 = tennisScore.wonPointsPlayer2;
        tennisScore.incrementPlayerPoints(PLAYER1);

        expect(lastPointsP1+1).toEqual(tennisScore.wonPointsPlayer1);
        expect(lastPointsP2).toEqual(tennisScore.wonPointsPlayer2);
    });

    it('should throw an error when player is not in [1,2]', () => {
        expect(() => {
            let tennisScore = new TennisScore();
            tennisScore.incrementPlayerPoints(3);
        }).toThrowError("Invalid player");
    });

});