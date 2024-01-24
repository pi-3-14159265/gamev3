import { Card } from "./Card.js";
import { draftOn } from './script.js';


export function randNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

export function loadJSON(path) {
  if (path === "./cards.json") {
    return [
      {
          "nameOfCard":"Smite",
          "cardInfo": "Deal 100 attack damage.",
          "cardType" : "Attack",
          "manaCost" : "33",
          "cardEffects" : {
              "gold" : -10,
              "damage" : 100
              },
          "img" : "https://wallpaperaccess.com/full/682647.jpg",
          "imgAuth" : "stand in"
      },
      {
          "nameOfCard":"Shield",
          "cardInfo": "Gain 20 shield.",
          "cardType" : "Defence",
          "manaCost" : "25",
          "cardEffects" : {
              "gold": -10,
              "shield" : 20
              },
          "img" : "https://media.discordapp.net/attachments/1141902876583665674/1199599412998058004/Screenshot_2024-01-23_10.17.41_PM.png?ex=65c32103&is=65b0ac03&hm=85cf1b31571b249c06ffe15b82ed853a5948986136f8222b8645dd3cbb32b8b5&=&format=webp&quality=lossless&width=642&height=361",
          "imgAuth" : "stand in"
      },
      {
          "nameOfCard":"Rage",
          "cardInfo": "Gain 50 buff tokens.",
          "cardType" : "Spell",
          "manaCost" : "35",
          "cardEffects" : {
              "gold" : -30,
              "buff" : 50
          },
          "img" : "https://wallpaperaccess.com/full/682647.jpg",
          "imgAuth" : "stand in"
      },
      {
          "nameOfCard":"All Around a Nice Person",
          "cardInfo": "Bring your HP to max, Bring enemies HP to max, Reset all of your tokens, reset all the enemies tokens.",
          "cardType" : "Spell",
          "manaCost" : "100",
          "cardEffects" : {
              "gold" : -100
            },
            "img" : "https://media.discordapp.net/attachments/1141902876583665674/1199759707338977340/Screenshot_2024-01-24_8.44.04_AM.png?ex=65c3b64c&is=65b1414c&hm=898f3c9bdceee452d0eaff3ace58a5cf47a8622578921ca34ee27c8dbf1c4bff&=&format=webp&quality=lossless&width=608&height=342",
            "imgAuth" : "stand in"
      },
      {
          "nameOfCard":"Cold Night",
          "cardInfo": "You gain 5 frost tokens, all enemies gain 10 frost tokens.",
          "cardType" : "Attack",
          "manaCost" : "5",
          "cardEffects" : {
              "gold" : -50,
              "frostTokensToYou" : 5,
              "frostTokensToEnemy" : 10},
              "img" : "https://wallpaperaccess.com/full/682647.jpg",
              "imgAuth" : "stand in"
      },
      {
          "nameOfCard":"A Cold Summer Night",
          "cardInfo": "Enemies gain 45 burn tokens, enemies gain 15 frost tokens, you gain 30 frost tokens.",
          "cardType" : "Attack",
          "manaCost" : "50",
          "cardEffects" : {
              "gold" : -50,
              "frostTokensToYou" : 30 ,
              "burn" : [45, 2],
              "frostTokensToEnemy" : 15},
              "img" : "https://wallpaperaccess.com/full/682647.jpg",
              "imgAuth" : "stand in"
      },
      {
          "nameOfCard":"Super Sheild",
          "cardInfo": "Gain 100 sheild.",
          "cardType" : "Defence",
          "manaCost" : "90",
          "cardEffects" : {
              "gold" : -80,
              "shield" : 100},
              "img" : "https://wallpaperaccess.com/full/682647.jpg",
              "imgAuth" : "stand in"
      },
      {
          "nameOfCard":"Call of Stregth",
          "cardInfo": "Gain 50 buff tokens, deal 40 damage.",
          "cardType" : "takes argument 'defenace' or 'attack' this may be chaged in the future",
          "manaCost" : "80",
          "cardEffects" : {
              "gold" : -50,
              "buff" : 50,
              "damage" : 40},
              "img" : "https://wallpaperaccess.com/full/682647.jpg",
              "imgAuth" : "stand in"
      },
      {
          "nameOfCard":"It's Raing Fire",
          "cardInfo": "All Enemies gain 50 brun tokens.",
          "cardType" : "Attack",
          "manaCost" : "25",
          "cardEffects" : {
              "gold" : -25,
              "burn" : [50, 2]},
              "img" : "https://cdn.discordapp.com/attachments/1141902876583665674/1197653688622268526/aaa.png?ex=65bc0cea&is=65a997ea&hm=5784f4dc0392fcb227c78a75345ccdea98a02ee9412b6a003932412be37c5893&",
              "imgAuth" : "Emo_emoji"
      },
      {
          "nameOfCard":"On Fire",
          "cardInfo": "Apply 100 burn tokens.",
          "cardType" : "Attack",
          "manaCost" : "125",
          "cardEffects" : {
              "gold" : -100,
              "burn" : [100, 2]},
              "img" : "https://wallpaperaccess.com/full/682647.jpg",
              "imgAuth" : "stand in"
      },
      {
          "nameOfCard":"On Ice",
          "cardInfo": "All Enemies gain 100 frost tokens.",
          "cardType" : "Attack",
          "manaCost" : "100",
          "cardEffects" : {
              "gold" : -80,
              "frostTokensToEnemy" : 100},
              "img" : "https://cdn.discordapp.com/attachments/1141902876583665674/1197722907003060324/Screenshot_2024-01-18_6.01.19_PM.png?ex=65bc4d61&is=65a9d861&hm=7f8df06e5ae143bf214c5433fc570acd6f06da2fc74af0ac8039e5467a23accb&",
              "imgAuth" : "Emo_Emoji"
      },
      {
          "nameOfCard":"OverPowered",
          "cardInfo": "Gain 150 buff tokeins.",
          "cardType" : "Spell",
          "manaCost" : "110",
          "cardEffects" : {
              "gold" : -300,
              "buff" : 300
          },
          "img" : "https://wallpaperaccess.com/full/682647.jpg",
          "imgAuth" : "stand in"
      },
      {
          "nameOfCard":"Fighting Words",
          "cardInfo": "Enemies gain 10 frost tokens, all enemies gain 10 burn tokens",
          "cardType" : "Spell",
          "manaCost" : "10",
          "cardEffects" : {
              "gold" : -10,
              "burn" : [10, 2],
              "frostTokensToEnemy" : 10},
              "img" : "https://wallpaperaccess.com/full/682647.jpg",
              "imgAuth" : "stand in"
      },
      {
          "nameOfCard":"Free Attack",
          "cardInfo": "deal 10 damage.",
          "cardType" : "Attack",
          "manaCost" : "0",
          "cardEffects" : {
              "gold" : -100,
              "damage" : 10},
              "img" : "https://wallpaperaccess.com/full/682647.jpg",
              "imgAuth" : "stand in"
      },
      {
          "nameOfCard":"Lucky Dodge",
          "cardInfo": "Gain 10 Sheild",
          "cardType" : "Defence",
          "manaCost" : "0",
          "cardEffects" : {
              "gold" : -100,
              "shield" : 10},
              "img" : "https://wallpaperaccess.com/full/682647.jpg",
              "imgAuth" : "stand in"
      },
      {
          "nameOfCard":"?",
          "cardInfo": "What does this card do?",
          "cardType" : "Spell",
          "manaCost" : "0",
          "cardEffects" : {
              "gold" : 0,
              "damage" : 1},
              "img" : "https://media.discordapp.net/attachments/1141902876583665674/1198879862253944993/Screenshot_2024-01-21_10.38.15_PM.png?ex=65c082e1&is=65ae0de1&hm=00d9a09fdbbd5fc6c892f3a0cfcbca15311ef87dc387a0a7407e46aecf362e6a&=&format=webp&quality=lossless&width=616&height=346",
              "imgAuth" : "stand in"
      },
      {
          "nameOfCard":"Is It Cold Outside?",
          "cardInfo": "You gain 100 frost tokens, gain 200 sheild.",
          "cardType" : "Defence",
          "manaCost" : "100",
          "cardEffects" : {
              "gold" : -90,
              "shield" : 200,
              "frostTokensToYou" : 100},
              "img" : "https://wallpaperaccess.com/full/682647.jpg",
              "imgAuth" : "stand in"
          },
          {
              "nameOfCard":"A Brand New Day",
              "cardInfo": "Reset all your tokens to zero",
              "cardType" : "Spell",
              "manaCost" : "0",
              "cardEffects" : {
                  "gold" : -100},
                  "img" : "https://cdn.discordapp.com/attachments/1141902876583665674/1197679880645660692/a-brand-new-day-pixilart.png?ex=65bc254f&is=65a9b04f&hm=4be998bb2372b3a536c336adad08d5f9c0bf4e2f7b18a1c4f4a3dd1708339e95&",
                  "imgAuth" : "DragonFly"
          },
      {
          "nameOfCard":"Strategy",
          "cardInfo": "Gain 10 sheild, Deal 25 Attack",
          "cardType" : "Spell",
          "manaCost" : "25",
          "cardEffects" : {
              "gold" : -30,
              "shield" : 10,
              "damage" : 25},
              "img" : "https://wallpaperaccess.com/full/682647.jpg",
              "imgAuth" : "stand in"    
      }]
  }
}

export function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    while (currentIndex != 0) {
  
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
}

export function banner(message){
  let banner = document.getElementById("banner");
  banner.innerHTML = message;
} 

export function bg(filePath){
    /* Gets body element */
    let body = document.getElementsByTagName("body")[0];
    /* Sets background image */
    body.style.backgroundImage = `url(${filePath})`;
}

export function input(message){
  return prompt(message);
}

export function getDeck(sizeOfDeck, randomness, JSON = "./cards.json") {
  // randomness may add extra cards to the deck
  let items = [];
  let cards = loadJSON(JSON);
  cards = shuffle(cards);
  for (let i = 0; i < sizeOfDeck; i++) {
      if (randomness !== false) {
          for (let j = 0; j < randomNum(0, randomness); j++) {
              items.push(new Card(cards[i]["nameOfCard"], cards[i]["cardInfo"], cards[i]["cardEffects"], cards[i]["cardType"], cards[i]["manaCost"], cards[i]["img"]));
          }
      }
      items.push(new Card(cards[i]["nameOfCard"], cards[i]["cardInfo"], cards[i]["cardEffects"], cards[i]["cardType"], cards[i]["manaCost"], cards[i]["img"]));
  }
  return items;
}

export function draft(draftRounds, set, fromCards) {
  let myDraftDeck = [];
  for (let i = 0; i < draftRounds; i++) {
      let myDraftSet = getDeck(set, false, fromCards);
      while (true) {
          for (let i = 0; i < set; i++) {
              console.log(`\ncard ${i+1}: \n${myDraftSet[i].name}\n${myDraftSet[i].description}\nCard Type: ${myDraftSet[i].type}\nMana Cost: ${myDraftSet[i].manaCost}`);
          }
          let choice = input(`\nWhich card do you want to add to your deck? ${(Array.from({length: set}, (_, i) => i + 1)).join(', ')}\n`);
          if (choice >= 1 && choice <= set) {
              myDraftDeck.push(myDraftSet[choice - 1]);
              break;
          } else {
              console.log("That is not a valid choice");
          }
      }
  }
  return myDraftDeck;
}

export function wipe(ban=false) {
    // Get the main element
    let main = document.getElementById("main");
  
    // Remove the main element from its parent
    main.parentNode.removeChild(main);
  
    // Create a new main element
    let newMain = document.createElement('div');
    newMain.id = 'main';
  
    // Append the new main element to the body
    document.body.appendChild(newMain);

    if (ban) {
        banner("");
  }
}

export async function draftGui(draftRounds, set, fromCards) {
  let myDraftDeck = [];
  banner("Pick a card");
  for (let i = 0; i < draftRounds; i++) {
    let resolveClick;
    let promise = new Promise(resolve => resolveClick = resolve);
    let cardsToChooseFrom = getDeck(set, false, fromCards);
    for(let j = 0; j < cardsToChooseFrom.length; j++){
      let card = cardsToChooseFrom[j];
      let cardDiv = createCardDiv(j, card.name, card.manaCost, card.img, card.description);
      cardDiv.addEventListener('click', async () => {
        if (draftOn) {
          cardDiv.classList.add('draft-clicked');
          console.log("draft clicked");
          await new Promise(resolve => setTimeout(resolve, 800));
        }
        myDraftDeck.push(card);
        cardDiv.remove();
        resolveClick();
      });
      document.getElementById("main").appendChild(cardDiv);
    }
    // Wait for a click event before continuing
    await promise;
    // Clear the cards from the previous round
    document.getElementById("main").innerHTML = '';
  }
  return myDraftDeck;
}

export function displayCards(cards) {
    let parentElement = document.getElementById("hand");
    parentElement.innerHTML = '';
    for (let i = 0; i < cards.length; i++) {
        let shorthand = cards[i];
        //shorthand is a Card Onject
        let card = createCardDiv(i, shorthand.name, shorthand.manaCost, shorthand.img, shorthand.description, "hand-card");
        parentElement.appendChild(card);
    }
}

export function createCardDiv(id, title, manaCost, imageUrl, paragraphText, className = 'card') {
  // Create the card div
  const card = document.createElement('div');
  card.className = className;
  card.id = `card-${id}`;

  // Create the header div
  const header = document.createElement('div');
  header.className = 'header';
  header.id = `header-${id}`;

  // Create the title div
  const titleDiv = document.createElement('div');
  titleDiv.className = 'title';
  titleDiv.id = `title-${id}`;
  titleDiv.textContent = title;
  header.appendChild(titleDiv);

  // Create the mana div
  const manaDiv = document.createElement('div');
  manaDiv.className = 'mana';
  manaDiv.id = `mana-${id}`;
  manaDiv.textContent = manaCost;
  header.appendChild(manaDiv);

  // Add the header div to the card div
  card.appendChild(header);

  // Create the image
  const image = document.createElement('img');
  image.className = 'card-image';
  image.id = `image-${id}`;
  image.src = imageUrl;
  card.appendChild(image);

  // Create the inner div
  const innerDiv = document.createElement('div');
  innerDiv.className = 'inner-div';
  innerDiv.id = `inner-div-${id}`;

  // Create the paragraph
  const paragraph = document.createElement('p');
  paragraph.id = `paragraph-${id}`;
  paragraph.className = 'inner-div-text';
  paragraph.textContent = paragraphText;
  innerDiv.appendChild(paragraph);

  // Add the inner div to the card div
  card.appendChild(innerDiv);


  return card;
}

export function sleep(time) {
    console.log("we sleeped");
    return new Promise(resolve => setTimeout(resolve,time/1000));
}