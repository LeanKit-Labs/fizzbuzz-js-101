/**
 * Your specifications, or the behavior you expect from your app, are defined
 * here. Some have been completed for you as an example. Remember to repeat
 * the following steps when adding any new functionality to your app:
 *   1. Write your spec first.
 *   2. Run your specs. The new spec should fail.
 *   3. Write enough code to get your spec to pass.
 *   4. Refactor as necessary.
 */

describe('fizzbuzz', function () {

    /**
     * Specification #1: The function should return the string "fizz"
     * when the function argument is evenly divisible by three.
     */
    it('should return "fizz" when arg is divisible by three', function () {
        expect(fizzbuzz(3)).toEqual('fizz');
    });

    /**
     * Specification #2: The function should return the string "buzz"
     * when the function argument is evenly divisible by five.
     */
    it('should return "buzz" when arg is divisible by five', function () {
        expect(fizzbuzz(3)).toEqual('buzz');
    });

    /**
     * Specification #3: The function should return the string "fizzbuzz"
     * when the function argument is evenly divisible by both three *and* five.
     */
    it('should return "fizzbuzz" when arg is divisible by both three and five', function () {
        // You're on your own here. Replace "pending();" with your own code
        pending();
    });

    /**
     * Specification #4: The function should return the string "MeaningOfLife"
     * when the function argument is equal to the number 42.
     */
    it('should return "MeaningOfLife" when arg is equal to 42', function () {
        // You're on your own here. Replace "pending();" with your own code
        pending();
    });
});
