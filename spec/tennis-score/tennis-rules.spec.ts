import { TennisRules } from "../../src/tennis-score/tennis-rules";

describe('convertPointsToScore', () => {
    it('should return 0 when points is 0', () => {
        // Act
        const score = TennisRules.convertPointsToScore(0);
        // Assert
        expect(score).toBe(0);
    });

    it('should return 15 when points is 1', () => {
        // Act
        const score = TennisRules.convertPointsToScore(1);
        // Assert
        expect(score).toBe(15);
    });

    it('should return 30 when points is 2', () => {
        // Act
        const score = TennisRules.convertPointsToScore(2);
        // Assert
        expect(score).toBe(30);
    });

    it('should return 40 when points is 3', () => {
        // Act
        const score = TennisRules.convertPointsToScore(3);
        // Assert
        expect(score).toBe(40);
    });

    it('should return error when points is not in [0,1,2,3]', () => {
        // Assert
        expect(() => {
            TennisRules.convertPointsToScore(4);
        }).toThrowError("Invalid number of points");

    });
});

describe('isEndGame', () => {

    it('should return true only if point is 4', () => {
        const SHOULD_END = 4;
        const SHOULD_CONTINUE = 2;

        const END_GAME = TennisRules.isEndGame(SHOULD_END);
        const NOT_END_GAME = TennisRules.isEndGame(SHOULD_CONTINUE);
        expect(END_GAME).toBe(true);
        expect(NOT_END_GAME).toBeFalse();
    });

});