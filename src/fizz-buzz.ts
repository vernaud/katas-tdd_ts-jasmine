export class FizzBuzz {

    /**
     * Calculation of FizzBuzz.
     * @param num: number - The number to calculate.
     * @returns : string - 'Fizz', 'Buzz', 'FizzBuzz' or the param into string.
     */
    static calculate(num: number): string {
        if (num % 5 === 0) {
            return "Buzz";
        }
        if (num % 3 === 0) {
            return "Fizz";
        }
        return num.toString();
    }

    /**
     * Print the result of FizzBuzz calculation.
     * @param num : number - The number for FizzBuzz calculation.
     */
    static printFizzBuzzResult(num: number): void {
        const result = num.toString();
        console.log(result);
    }
    
}