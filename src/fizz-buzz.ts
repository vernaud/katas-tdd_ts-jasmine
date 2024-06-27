export class FizzBuzz {
    static calculate(arg0: number): string {
        if (arg0 % 3 === 0) {
            return "Fizz";
        }
        return arg0.toString();
    }

    static printFizzBuzzResult(arg0: number): void {
        const result = arg0.toString();
        console.log(result);
    }
    
}