console.log("Linked.");

// Dramatis Personae
var hobbits = [
  'Frodo Baggins',
  'Samwise \'Sam\' Gamgee',
  'Meriadoc \'Merry\' Brandybuck',
  'Peregrin \'Pippin\' Took'
];

var buddies = [
  'Gandalf the Grey',
  'Legolas',
  'Gimli',
  'Strider',
  'Boromir'
];

var lands = ['The Shire', 'Rivendell', 'Mordor'];
var body = document.querySelector('body');


// Part 1


function makeMiddleEarth() {
    var middleEarth = document.createElement('section');
    for (var i = 0; i < lands.length; i++) {
        var land = document.createElement('article');
        var landHeading = document.createElement("h1");                // Create a <h1> element
        landHeading.textContent = lands[i];
        land.appendChild(landHeading);
        middleEarth.appendChild(land);
        body.appendChild(middleEarth);
      };

};

makeMiddleEarth();


// Part 2
  // display an unordered list of hobbits in the shire (which is the first article tag on the page)
  // give each hobbit a class of hobbit

function makeHobbits() {
var theShire = body.querySelectorAll('article')[0];

for (var i = 0; i < hobbits.length; i++) {
var ul = document.createElement("ul");
var li = document.createElement("li");

li.textContent = hobbits[i];

li.className = 'hobbit';

console.log(li);

theShire.appendChild(ul);
theShire.appendChild(li);
};

};

makeHobbits();

// Part 3

function keepItSecretKeepItSafe() {
  //  X create a div with an id of 'the-ring'
  //  X give the div a class of 'magic-imbued-jewelry'
  //  X add an event listener so that when a user clicks on the ring, the nazgulScreech function (provided) is invoked
  //  X add the ring as a child of Frodo

var theRing = document.createElement("div");
theRing.className = "magic-imbued-jewelry";
console.log(theRing);

theRing.addEventListener('click', nazgulScreech);

var frodo = body.querySelectorAll('li')[0];

frodo.appendChild(theRing);

}

keepItSecretKeepItSafe();

// Part 4


function makeBuddies() {
  // create an aside tag
  // attach an unordered list of the 'buddies' in the aside
  // insert your aside as a child element of rivendell
}


// Part 5


function beautifulStranger() {
  // change the 'Strider' textnode to 'Aragorn'
}


// Part 6

function leaveTheShire() {
  // assemble the hobbits and move them to Rivendell
}


// Part 7


function forgeTheFellowShip() {
  // create a new div called 'the-fellowship' within rivendell
  // add each hobbit and buddy one at a time to 'the-fellowship'
  // after each character is added make an alert that they have joined your party
}


// Part 8


function theBalrog() {
  // change the 'Gandalf' textNode to 'Gandalf the White'
  // apply style to the element
  // make the background 'white', add a grey border
}


// Part 9

function hornOfGondor() {
  // pop up an alert that the horn of gondor has been blown
  // Boromir's been killed by the Uruk-hai!
  // put a linethrough on boromir's name
  // Remove Boromir from the Fellowship
}


// Part 10

function itsDangerousToGoAlone(){
  // take Frodo and Sam out of the fellowship and move them to Mordor
  // add a div with an id of 'mount-doom' to Mordor
}


// Part 11

function weWantsIt() {
  // Create a div with an id of 'gollum' and add it to Mordor
  // Remove the ring from Frodo and give it to Gollum
  // Move Gollum into Mount Doom
}


// Part 12

function thereAndBackAgain() {
  // remove Gollum and the Ring from the document
  // remove all the baddies from the document
  // Move all the hobbits back to the shire
}
