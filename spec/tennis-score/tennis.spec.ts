import { ScoreDisplay } from "../../src/tennis-score/tennis";

describe('displayScoreToLog', () => {

    it('should call console.log with "Player1 - 0 | 0 - Player2"', () => {
        // Arrange
        spyOn(console, 'log');
        const expected: string = "Player1 - 0 | 0 - Player2";
        // Act
        ScoreDisplay.displayScoreToLog();
        // Assert
        expect(console.log).toHaveBeenCalledWith(expected);    
    
    });

});

describe('convertPointsToScore',() => {
   
    it('should return 0 when points is 0', () => {
        // Act
        const score = ScoreDisplay.convertPointsToScore(0);
        // Assert
        expect(score).toBe(0);
    });

    it('should return 15 when points is 1', () => {
        // Act
        const score = ScoreDisplay.convertPointsToScore(1);
        // Assert
        expect(score).toBe(15);
    });

    it('should return 30 when points is 2', () => {
        // Act
        const score = ScoreDisplay.convertPointsToScore(2);
        // Assert
        expect(score).toBe(30);
    });

    it('should return 40 when points is 3', () => {
        // Act
        const score = ScoreDisplay.convertPointsToScore(3);
        // Assert
        expect(score).toBe(40);
    });

});