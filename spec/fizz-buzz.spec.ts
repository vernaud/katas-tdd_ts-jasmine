import {FizzBuzz} from "../src/fizz-buzz";


describe('printFizzBuzzResult()', () => {
    
    it('should log "1" when param is 1.', () => {
        // Arrange
        spyOn(console, 'log');
        const expected: string = "1";

        // Act        
        FizzBuzz.printFizzBuzzResult(1);
        
        // Assert
        expect(console.log).toHaveBeenCalledWith(expected);
    })
});
