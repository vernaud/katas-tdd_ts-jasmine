import { TennisScore } from "../../src/tennis-score/TennisScore";


describe('given a tennis score', () => {
    it('get wonPointsPlayer1 should return 0 when point 0', () => {
        let tennisScore = new TennisScore();
        expect(tennisScore.wonPointsPlayer1).toEqual(0);
    });
    it('get wonPointsPlayer2 should return 0 when point 0', () => {
        let tennisScore = new TennisScore();
        expect(tennisScore.wonPointsPlayer2).toEqual(0);
    });
});

describe('winPoint', () => {

    it('should increment the score of player', () => {
        const PLAYER1 = 1;
        let tennisScore = new TennisScore();
        let lastPointsP1 = tennisScore.wonPointsPlayer1;
        let lastPointsP2 = tennisScore.wonPointsPlayer2;
        tennisScore.incrementPlayerPoints(PLAYER1);

        // FIXME
        // expect(lastPointsP1+1).toEqual(tennisScore.wonPointsPlayer1);
        // expect(lastPointsP2).toEqual(tennisScore.wonPointsPlayer2);
    });

    it('should throw an error when player is not in [1,2]', () => {
        expect(() => {
            let tennisScore = new TennisScore();
            tennisScore.incrementPlayerPoints(3);
        }).toThrowError("Invalid player");
    });

});