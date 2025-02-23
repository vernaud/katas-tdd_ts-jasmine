import {FizzBuzz} from "../../src/fizz-buzz/fizz-buzz";


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

    it('should call calculate method.', () => {
        // Arrange
        spyOn(FizzBuzz, 'calculate');

        // Act
        FizzBuzz.printFizzBuzzResult(1);

        // Assert
        expect(FizzBuzz.calculate).toHaveBeenCalled();
    });
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
        // Act
        const result = FizzBuzz.calculate(3);

        // Assert
        expect(result).toBe(FizzBuzz.FIZZ);
    });

    it('should return "Buzz" when input is 5 multiple.', () => {
        // Act
        const result = FizzBuzz.calculate(5);

        // Assert
        expect(result).toBe(FizzBuzz.BUZZ);
    });

    it('should return "FizzBuzz" when input is 3 and 5 multiple.', () => {
        // Act
        const result = FizzBuzz.calculate(15);

        // Assert
        expect(result).toBe(FizzBuzz.FIZZ + FizzBuzz.BUZZ);
    });
});