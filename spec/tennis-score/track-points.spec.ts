import { TrackPoints } from "../../src/tennis-score/track-points";

describe('incrementPlayerPoints', () => {

    it('should increment the score of player', () => {
        const PLAYER1 = 1;
        const PLAYER2 = 2;
        let tennisScore = new TrackPoints();
        let lastPointsP1 = tennisScore.getWonPointsPlayer(PLAYER1);
        let lastPointsP2 = tennisScore.getWonPointsPlayer(PLAYER2);
        
        tennisScore.incrementPlayerPoints(PLAYER1);
        let newPointsP1 = tennisScore.getWonPointsPlayer(PLAYER1);
        let newPointsP2 = tennisScore.getWonPointsPlayer(PLAYER2);

        expect(newPointsP1).toBeGreaterThan(lastPointsP1);
        expect(newPointsP2).toEqual(lastPointsP2);
    });

    it('should throw an error when player is not in [1,2]', () => {
        expect(() => {
            let tennisScore = new TrackPoints();
            tennisScore.incrementPlayerPoints(3);
        }).toThrowError("Invalid player");
    });

});