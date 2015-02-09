# LeanKit Fizzbuzz 101 - Javascript Edition

#### Wut?

This repo serves as the starting point for developers to complete and submit a simple project in order to be considered a candidate for employment at [LeanKit]. It is designed to allow our teams to evenly evaluate the technical capabilities of developers in the following ways:

* Repeatable: Every candidate starts from the same point and is tasked with performing the same tasks.
* Relevant: The aspects of the project utilize the same types of technology and patterns you'll see in our applications.
* Complete: While the project is simple, it does allow one to complete a small number of tasks in a reasonable time frame while using common technologies in a way that is not completely arbritrary.

This project uses the self-contained version of [Jasmine] and should be wired up enough to allow you to get going without a lot of effort. If you run in to problems, try and solve them. If you get stuck or think there is a flaw in the setup or docs, submit an [issue].

#### What am I supposed to do?
 1. Fork this repo into your own [GitHub] account. If you don't have one, you should get one. They're free, and all the other kids are doing it.
 2. Look at the specifications defined in the `fizzbuzz.spec.js` file in the `spec` directory. You're on the hook to provide working, testable versions of the four specifications listed by writing code in the `fizzbuzz.js` file in the `src` directory.
 3. You'll notice that the first specification has been completed for you and is working as expected, according to the spec defined. Open the `SpecRunner.html` file located in the project root to verify. Click the "Spec List" link to view the, well, "List of Specs". The spec titled "should return "fizz" when the function argument is divisible by three" should show as passing and be green.
 4. Did you see the second spec titled "should return "buzz" when the function argument is divisible by five"? It's red because it's broken. Fix that test and rerun `SpecRunner.html` to verify.
 5. Specs #3 and #4 have been defined for you and describe desired functionality out of the system. Implement those specifications based on your understanding of the requirements described, and get them passing. Make sure to follow Red/Green/Refactor.
 6. Look at the `index.html` file located in the project root. Javascript references have been added for you to both [jQuery 2.1.3 from Google's CDN] and `index.js` located in the `src` directory.
 7. `index.js` has a predefined `$(document).ready( function() {});` for you. Write code in this function to display the responses returned from the `fizzbuzz` function for all integers from `1` to `100` (inclusive) on the `index.html` page when it loads.
 8. When you're done, submit a pull request back to this repo from your fork. We'll check out the code and get back to you.
 9. If you make it past step #8, then you'll either come to the office or we'll get together online to do an initial code review of your submitted pull request. After that you'll be asked to implement another feature or two live and interactively. Don't worry, they're not designed to trick you or make you feel uncomfortable. You'll be able to use whatever resources are available and appropriate. We just want to see you write code live in front of our eyeballs, and to get a chance to chat while you're doing it.

Interested? **SHOW US TEH CODEZ!**

[LeanKit]:http://leankit.com
[GitHub]:https://github.com
[Jasmine]:https://github.com/jasmine/jasmine
[jQuery 2.1.3 from Google's CDN]:https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js
[issue]:https://github.com/leankit-labs/fizzbuzz-js-101/issues
