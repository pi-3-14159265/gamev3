import * as util from "./util.js";
import { Player } from "./Player.js";
import { Enemy } from "./Enemy.js";
import { Card } from "./Card.js";
import { SudoCard } from "./SudoCard.js";

window.onload = function() {
    var header = document.querySelector('.title');
    var fontSize = 180; // Start with a large font size

    // Reduce the font size until the text fits within the header
    while (header.scrollWidth > header.offsetWidth) {
        fontSize--;
        header.style.fontSize = fontSize + '%';
    }
}

window.onload = function() {
    var header = document.querySelector('.inner-div-text');
    var fontSize = 130; // Start with a large font size

    // Reduce the font size until the text fits within the header
    while (header.scrollWidth > header.offsetWidth) {
        fontSize--;
        header.style.fontSize = fontSize + '%';
    }
}

// This is the main game class. It contains all the game logic and is the only class that interacts with the DOM.
// search TODO to find things that need to be done

//anytime Im lost recall object have a whoAmI function
export let draftOn = true;

// first arg is 1 for debug mode TODO chage it to a resoable number
let myDeck = await util.draftGui(6, 3, "./cards.json"); // returns an array of Card Objects the first arg is amount of rounds the second arg is how many carsd are shown with each round the thrird arg is the path to the json file
console.log(myDeck); // TODO remove this
draftOn = false; // ends the draft gui
let player = new Player( // creates a player object
    "pi", // name
    100, // mana
    Number("infinity"), // max mana
    0, // frost tokens
    1500, // HP
    1500, // max HP
    0, // shield
    [0, 0], // burn tokens
    0, // power
    0, // buff tokens
    myDeck, // deck
    [], // hand
    [] // discard
)

function displayDeck(player){
    util.banner("Your Deck");
    let parentElement = document.getElementById("main"); 

    for(let i = 0; i < player.deck.length; i++){
        let shorthand = player.deck[i];
        //shorthand is a Card Onject
        let card = util.createCardDiv(i, shorthand.name, shorthand.manaCost, shorthand.img, shorthand.description);
        parentElement.appendChild(card);
    }
}

displayDeck(player);

let roadBlock = false;

let button = document.createElement('button');
button.textContent = 'Continue';
button.style.position = 'fixed';
button.style.bottom = '30px';
button.style.right = '30px';
button.id = "continue";
button.style.transform = 'scale(1.5)'; // Make the button 1.5 times larger

// Append the button to the body
document.body.appendChild(button);

// Add an event listener to the button
button.addEventListener('click', () => {
    // Continue the program here
    roadBlock = true;
    document.body.removeChild(button); // remove the button after it's clicked

    if(roadBlock){
        util.wipe(true);
        console.log("after wipe");
        combat(player, makeEnemy());
    }
});

function stats(obj){

    // Set the position and style of the div

    if(obj.whoAmI() == "Player"){
        
        try{
            document.body.removeChild(document.getElementById("playerStats"));
        } catch (error){
            console.log(error);
        }

        var div = document.createElement('div');

        div.id = "playerStats";

        div.style.position = 'fixed';
        div.style.top = '10px';
        div.style.left = '10px';
        div.style.backgroundColor = '#8d6633';
        div.style.padding = '10px';
        div.style.border = '5px solid rgb(129, 129, 129)';

        var pronoun = "your";

    } else if(obj.whoAmI() == "Enemy"){

        try{
            document.body.removeChild(document.getElementById("enemyStats"));
        } catch (error){
            console.log(error);
        }

        var div = document.createElement('div');

        div.id = "enemyStats";

        div.style.position = 'fixed';
        div.style.top = '10px';
        div.style.right = '10px';
        div.style.backgroundColor = '#8d6633';
        div.style.padding = '10px';
        div.style.border = '5px solid rgb(129, 129, 129)';

        var pronoun = "enemy's";
    }
    // Create a new table element
    let table = document.createElement('table');

    // Add some rows and cells to the table for demonstration

    // TODO add small images for each stats for reconziality bug Emo some time for these images
    let row = table.insertRow();
    let cell1 = row.insertCell();
    cell1.textContent = `${pronoun} hp: ` + player.HP;

    let row2 = table.insertRow();
    let cell2 = row2.insertCell();
    cell2.textContent =`${pronoun} mana: ` + player.mana;

    let row3 = table.insertRow();
    let cell3 = row3.insertCell();
    cell3.textContent = `${pronoun} frost tokens: ` + player.frostTokens;

    let row4 = table.insertRow();
    let cell4 = row4.insertCell();
    cell4.textContent = `${pronoun} shield: ` + player.shield;

    let row5 = table.insertRow();
    let cell5 = row5.insertCell();
    cell5.textContent = `${pronoun} buff tokens: ` + player.buffTokens;

    let row6 = table.insertRow();
    let cell6 = row6.insertCell();
    cell6.textContent = `${pronoun} number of burn tokens: ` + player.burnTokens[0];

    let row8 = table.insertRow();
    let cell8 = row8.insertCell();
    cell8.textContent = `${pronoun} max damage per burn token: ` + player.burnTokens[1];

    let row7 = table.insertRow();
    let cell7 = row7.insertCell();
    cell7.textContent = `${pronoun} power: ` + player.power;

    // Append the table to the div
    div.appendChild(table);

    // Append the div to the body
    document.body.appendChild(div);
}

function makeEnemy(name="bad guy", HP=1, power=1, buffTokens=0, frostTokens=0, shield=0, burnTokens=[0,0], maxHP=1){
    return new Enemy(name, HP, power, buffTokens, frostTokens, shield, burnTokens, maxHP);
}

function combat(player, enemy){
    stats(player);
    stats(enemy);
    player.onStartOfTurn(); // gets cards and zeros effects

    //display cards using util.displayCards
    let hand = player.hand;
    console.log(hand); // TODO remove this
    util.displayCards(hand);
    
}