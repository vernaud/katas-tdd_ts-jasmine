export class FizzBuzz {

    public static readonly BUZZ: string = "Buzz";
    public static readonly FIZZ: string = "Fizz"; 
    
    /**
     * Calculation of FizzBuzz.
     * @param num: number - The number to calculate.
     * @returns : string - 'Fizz', 'Buzz', 'FizzBuzz' or the param into string.
     */
    static calculate(num: number): string {

        if (num % 5 === 0) {
            return FizzBuzz.BUZZ;
        }
        if (num % 3 === 0) {
            return FizzBuzz.FIZZ;
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