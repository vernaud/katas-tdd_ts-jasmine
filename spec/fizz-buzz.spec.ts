import {FizzBuzz} from "../src/fizz-buzz";


describe('print()', () => {
    
    it('should log the number in param.', () => {
        // Arrange
        spyOn(console, 'log');
        const expected: string = "1";

        // Act        
        FizzBuzz.print(1);
        
        // Assert
        expect(console.log).toHaveBeenCalledWith(expected);
    })
});
