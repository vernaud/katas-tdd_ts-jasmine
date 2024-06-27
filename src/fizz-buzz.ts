export class FizzBuzz {

    public static readonly BUZZ: string = "Buzz";
    public static readonly FIZZ: string = "Fizz"; 
    
    /**
     * Calculation of FizzBuzz.
     * @param num: number - The number to calculate.
     * @returns : string - 'Fizz', 'Buzz', 'FizzBuzz' or the param into string.
     */
    static calculate(num: number): string {

        let result = '';

        if (num % 3 === 0) {
            result += FizzBuzz.FIZZ;
        }
        if (num % 5 === 0) {
            result += FizzBuzz.BUZZ;
        }

        return result || num.toString();
    }

    /**
     * Print the result of FizzBuzz calculation.
     * @param num : number - The number for FizzBuzz calculation.
     */
    static printFizzBuzzResult(num: number): void {
        console.log(this.calculate(num));
    }
    
}

