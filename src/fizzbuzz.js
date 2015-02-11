/**
 * This file is where your fizzbuzz code goes. Make whatever function modifications
 * you like to this file, but try to follow the red/green/refactor workflow.
 */

function fizzbuzz(n) 
{
    if (n === 42) 
    {
        return 'MeaningOfLife';
    }
    else if (n % 5 === 0 && n % 3 === 0)
    {
        return 'fizzbuzz';
    }
    else if (n % 3 === 0 ) 
    {
        return 'fizz';
    }
    else if (n % 5 === 0  ) 
    {
        return 'buzz';
    }
}