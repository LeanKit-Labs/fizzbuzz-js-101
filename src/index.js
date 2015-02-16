/**
 * This file is referenced by index.html in the root of the project directory.
 * Add your code here to implement features and functionality.
 */

$(document).ready( function() {

    var fizzbuzzcallback = function() {
        var fizzbuzzhtml = '';
        for (var i = 1; i <= 100; i++) {
            result = fizzbuzz(i) ? fizzbuzz(i) : i;
            fizzbuzzhtml += result + '<br/>';
        }
        document.body.innerHTML = fizzbuzzhtml;
    };

    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'src/fizzbuzz.js';

    script.onreadystatechange = fizzbuzzcallback;
    script.onload = fizzbuzzcallback;
    document.head.appendChild(script);
});