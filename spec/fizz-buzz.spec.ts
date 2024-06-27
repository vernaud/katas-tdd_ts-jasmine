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

describe('FizzBuzzCalculator', () => {
    it('should return "1" when input is 1.', () => {
        // Arrange
        const expected: string = "1";

        // Act
        const result = FizzBuzz.calculate(1);

        // Assert
        expect(result).toBe(expected);
    });

    it('should return "Fizz" when input is 3 multiple.', () => {
        // Arrange
        const expected: string = "Fizz";

        // Act
        const result = FizzBuzz.calculate(3);

        // Assert
        expect(result).toBe(expected);
    });

    it('should return "Buzz" when input is 5 multiple.', () => {
        // Arrange
        const expected: string = "Buzz";

        // Act
        const result = FizzBuzz.calculate(5);

        // Assert
        expect(result).toBe(expected);
    });
});