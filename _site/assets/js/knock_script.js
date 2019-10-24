// name constants first by classes and ids in the html
const dispenserDefault = document.getElementById("knock-knock-dispenser");
const whosThere = document.getElementById("whos-there");


// then name variables that we are going to use in this script//
var jokeNumber;

// it would be much more space-efficient to have jokeContinue outside of the tellJoke function and then just call it with unique input text within each of the randomized options. work on that once you get the button changes working.

// in order to use one single button for everything, i have my event flags activate for one part of the joke and then deactivate as soon as they are pressed and the next part is activated.

function jokeReset () {
    whosThere.removeEventListener("click", jokeReset, true);
    dispenserDefault.innerHTML = "Knock-knock.";
    whosThere.innerHTML = "Who's There?"
    whosThere.addEventListener("click", tellJoke, true);
}

function tellJoke() {

    whosThere.removeEventListener("click", tellJoke, true);
    var jokeNumber = Math.floor(Math.random()*10);

    if (jokeNumber == 0) {
    // tell joke 1 
        let setup = "Banana.";
        dispenserDefault.innerHTML = setup;
        whosThere.innerHTML = "Banana who?";
        whosThere.addEventListener("click", jokeReset, true);

        function jokeContinue() {
            // continue progressing the joke by changing the text of the joke to the punchline and the text of the button to its third setting "Oh No"'
            whosThere.removeEventListener("click", jokeContinue, true);
            let setup2 = "punchline";
            dispenserDefault.innerHTML = setup2;
            
            whosThere.innerHTML = "Oh No";
            whosThere.addEventListener("click", jokeReset, true);
        }

        // whosThere.addEventListener("click", jokeContinue, true);
    }

    if (jokeNumber ==1) {
    // etc etc 
    let setup = "Banana.";
    dispenserDefault.innerHTML = setup;
    whosThere.innerHTML = "Banana who?";
    whosThere.addEventListener("click", jokeReset, true);

        function jokeContinue() {
            whosThere.removeEventListener("click", jokeContinue, true);
            let setup2 = "punchline";
            dispenserDefault.innerHTML = setup2;
            
            whosThere.innerHTML = "Oh No";
            whosThere.addEventListener("click", jokeReset, true);
        }

        // whosThere.addEventListener("click", jokeContinue, true);
    }

    if (jokeNumber ==2) {

        let setup = "Banana.";
        dispenserDefault.innerHTML = setup;
        whosThere.innerHTML = "Banana who?";
        whosThere.addEventListener("click", jokeReset, true);

        function jokeContinue() {
            whosThere.removeEventListener("click", jokeContinue, true);
            let setup2 = "punchline";
            dispenserDefault.innerHTML = setup2;
            
            whosThere.innerHTML = "Oh No";
            whosThere.addEventListener("click", jokeReset, true);
        }

        // whosThere.addEventListener("click", jokeContinue, true);
    }

    if (jokeNumber ==3) {

        let setup = "Orange.";
        dispenserDefault.innerHTML = setup;
        whosThere.innerHTML = "Orange who?";

        function jokeContinue() {
            whosThere.removeEventListener("click", jokeContinue, true);
            let setup2 = "Orange you glad I didn't say banana?";
            dispenserDefault.innerHTML = setup2;
            
            whosThere.innerHTML = "Oh No";
            whosThere.addEventListener("click", jokeReset, true);
        }

        whosThere.addEventListener("click", jokeContinue, true);
    }

    if (jokeNumber ==4) {

        let setup = "I don't know.";
        dispenserDefault.innerHTML = setup;
        whosThere.innerHTML = "I don't know who?";

        function jokeContinue() {
            whosThere.removeEventListener("click", jokeContinue, true);
            let setup2 = "That's what I was asking!";
            dispenserDefault.innerHTML = setup2;
            
            whosThere.innerHTML = "Oh No";
            whosThere.addEventListener("click", jokeReset, true);
        }

        whosThere.addEventListener("click", jokeContinue, true);
    }

    if (jokeNumber ==5) {

        let setup = "Cow says.";
        dispenserDefault.innerHTML = setup;
        whosThere.innerHTML = "Cow says who?";

        function jokeContinue() {
            whosThere.removeEventListener("click", jokeContinue, true);
            let setup2 = "No, a cow says \"moo\"!";
            dispenserDefault.innerHTML = setup2;
            
            whosThere.innerHTML = "Oh No";
            whosThere.addEventListener("click", jokeReset, true);
        }

        whosThere.addEventListener("click", jokeContinue, true);
    }

    if (jokeNumber ==6) {

        let setup = "Etch.";
        dispenserDefault.innerHTML = setup;
        whosThere.innerHTML = "Etch who?";

        function jokeContinue() {
            whosThere.removeEventListener("click", jokeContinue, true);
            let setup2 = "Gesundheit.";
            dispenserDefault.innerHTML = setup2;
            
            whosThere.innerHTML = "Oh No";
            whosThere.addEventListener("click", jokeReset, true);
        }

        whosThere.addEventListener("click", jokeContinue, true);
    }

    if (jokeNumber ==7) {

        let setup = "Mustache.";
        dispenserDefault.innerHTML = setup;
        whosThere.innerHTML = "Mustache who?";

        function jokeContinue() {
            whosThere.removeEventListener("click", jokeContinue, true);
            let setup2 = "I mustache you a question, but I'll shave it for later.";
            dispenserDefault.innerHTML = setup2;
            
            whosThere.innerHTML = "Oh No";
            whosThere.addEventListener("click", jokeReset, true);
        }

        whosThere.addEventListener("click", jokeContinue, true);
    }

    if (jokeNumber ==8) {

        let setup = "To";
        dispenserDefault.innerHTML = setup;
        whosThere.innerHTML = "To who?";

        function jokeContinue() {
            whosThere.removeEventListener("click", jokeContinue, true);
            let setup2 = "No, it's to WHOM.";
            dispenserDefault.innerHTML = setup2;
            
            whosThere.innerHTML = "Oh No";
            whosThere.addEventListener("click", jokeReset, true);
        }

        whosThere.addEventListener("click", jokeContinue, true);
    }

    if (jokeNumber ==9) {

        let setup = "Spell.";
        dispenserDefault.innerHTML = setup;
        whosThere.innerHTML = "Spell who?";

        function jokeContinue() {
            whosThere.removeEventListener("click", jokeContinue, true);
            let setup2 = "Alright: W.H.O.";
            dispenserDefault.innerHTML = setup2;
            
            whosThere.innerHTML = "Oh No";
            whosThere.addEventListener("click", jokeReset, true);
        }

        whosThere.addEventListener("click", jokeContinue, true);
    }
}


// add event listeners now that functions are named
// jokeNumber is activated by an event listener upon interacting with the "who's there?" button- and ONLY the "who's there?" version of the button 
whosThere.addEventListener("click", tellJoke, true);

