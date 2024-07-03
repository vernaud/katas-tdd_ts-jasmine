import { TrackPoints } from "../../src/tennis-score/track-points";

describe('incrementPlayerPoints', () => {

    let trackPoints: TrackPoints;

    beforeEach(() => {
        trackPoints = new TrackPoints();
    });

    it('should increment the score of player', () => {
        const PLAYER1 = 1;
        const PLAYER2 = 2;
        let lastPointsP1 = trackPoints.getWonPointsPlayer(PLAYER1);
        let lastPointsP2 = trackPoints.getWonPointsPlayer(PLAYER2);
        
        trackPoints.incrementPlayerPoints(PLAYER1);
        let newPointsP1 = trackPoints.getWonPointsPlayer(PLAYER1);
        let newPointsP2 = trackPoints.getWonPointsPlayer(PLAYER2);

        expect(newPointsP1).toBeGreaterThan(lastPointsP1);
        expect(newPointsP2).toEqual(lastPointsP2);
    });

    it('should throw an error when player is not in [1,2]', () => {
        expect(() => {
            trackPoints.incrementPlayerPoints(3);
        }).toThrowError("Invalid player");
    });

});