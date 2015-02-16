/**
 * This file is where your fizzbuzz code goes. Make whatever function modifications
 * you like to this file, but try to follow the red/green/refactor workflow.
 */

function fizzbuzz(n) {
    if (n % 3 === 0 && n % 5 === 0) {
        return 'fizzbuzz';
    }
    if (n === 42) {
        return 'MeaningOfLife';
    }
    if (n % 3 === 0) {
        return 'fizz';
    }
    if (n % 5 === 0) {
        return 'buzz';
    }
    //alternative implementation
    //return n;
}
