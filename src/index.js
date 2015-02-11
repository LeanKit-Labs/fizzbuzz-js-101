/**
 * This file is referenced by index.html in the root of the project directory.
 * Add your code here to implement features and functionality.
 */

$(document).ready( function() 
{
    for ( var i = 1 ; i <= 100 ; i++ )
    {
    	if (fizzbuzz(i) === undefined)
		{
		document.write(i + "<br>");
		}
		else
		{
    	document.write(fizzbuzz(i) + "<br>");
    	}
    }
});