import { TrackPoints } from "../../src/tennis-score/track-score";


// describe('given a tennis score', () => {
    // it('get wonPointsPlayer1 should return 0 when point 0', () => {
    //     let tennisScore = new TennisScore();
    //     expect(tennisScore.getWonPointsPlayer(1)).toEqual(0);
    // });
    // it('get wonPointsPlayer2 should return 0 when point 0', () => {
    //     let tennisScore = new TennisScore();
    //     expect(tennisScore.getWonPointsPlayer(2)).toEqual(0);
    // });

    /*
    getWonPointsPlayer()
    - throw error when param is not in [1,2]
    - return number
    - return 0 when new instance
    */
// });

describe('winPoint', () => {

    it('should increment the score of player', () => {
        const PLAYER1 = 1;
        const PLAYER2 = 2;
        let tennisScore = new TrackPoints();
        let lastPointsP1 = tennisScore.getWonPointsPlayer(PLAYER1);
        let lastPointsP2 = tennisScore.getWonPointsPlayer(PLAYER2);
        tennisScore.incrementPlayerPoints(PLAYER1);

        // FIXME
        // Ne fonctionne plus depuis que l'on passe pas les getters, 
        // et que l'on récupère les données converties au format tennis.

        expect(lastPointsP1+1).toEqual(tennisScore.getWonPointsPlayer(PLAYER1));
        expect(lastPointsP2).toEqual(tennisScore.getWonPointsPlayer(PLAYER2));
    });

    it('should throw an error when player is not in [1,2]', () => {
        expect(() => {
            let tennisScore = new TrackPoints();
            tennisScore.incrementPlayerPoints(3);
        }).toThrowError("Invalid player");
    });

});