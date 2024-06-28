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