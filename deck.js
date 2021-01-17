//const SUITS = ["♠", "♣", "♥", "♦"] doesnt display on console
const SUITS = ["club", "clover", "heart", "spade"]
const VALUES = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']
const cardValueMap = {
    '2' : 2,
    '3' : 3,
    '4' : 4,
    '5' : 5,
    '6' : 6,
    '7' : 7,
    '8' : 8,
    '9' : 9,
    '10': 10,
    'J' : 11,
    'Q' : 12,
    'K' : 13,
    'A' : 14
}

class Deck {
    constructor(cards = freshDeck()) {
        this.cards = cards
    }
    
//get allows us to assign numberofcards = this.cards.length so it doesnt have to be repeated as often
    get numberOfCards() {
        return this.cards.length 
    }
//method shuffle to shuffle cards up in a random order basically looping and swapping thru the cards 
    shuffle() {
        //To achieve the better sorting/ shuffling results we will create a for loop 
        //using this.numberOfCards will be a better way to see it in plain english 
        //i > 0; because we do not need to flip the final card.
        //in plain terms we are going from the back of the cards to the front of the cards i-- for removing cards till the game ends 
        for (let i = this.numberOfCards - 1; i > 0; i--) {
            //in order to get a random card we will random index that is eariler in the deck of cards aka math.random, then we want to multiply it by 
            //i which is the current index + 1. This will give us a placement inside of our deck that is somewhere else 
            //to ensure it is an interger we will use math.floor 
            const newIndex = Math.floor(Math.random() * (i + 1))
            //now we want to flip the values at the new index with the current index,so we need the oldValue = basically the value currently at our newindex
            const oldValue = this.cards[newIndex]
            //now we need to take the card that is at our i index and put it where our new index is. 
            this.cards[newIndex] = this.cards[i]
            this.cards[i] = oldValue
        }
    }
}

class Card {
    constructor(suit, value) {
        this.suit = suit
        this.value = value 
    }
}

function freshDeck() {
    //using a flat map makes a nice and neat array rather than just map that will give you 4 seperate arrays 
    return SUITS.flatMap(suit => {
        return VALUES.map(value => {
            return new Card(suit, value)
        })
    })
}


//test out deck array
const deck = new Deck();
//gives it back in one neat array
console.log(deck.cards);

//testing deck that is shuffled to know it randomizes them.
const deck2 = new Deck();
deck2.shuffle()
console.log(deck2.cards);



class Player {
    constructor(name) {
        this.name = name
        this.playerDeck = []
        this.playerScore = 0 

    }

}

//global variables 
let player1Deck
let player2Deck

let player1 = Player();
let player2 = Player();



startGame();
function startGame() {
    //create a deck 
    const deck = new Deck();
    //shuffles cards
    deck.shuffle();
    
    //splits deck of cards and gives a variable to use for splitting the deck
    const middleOfDeck = (deck.numberOfCards / 2)
    //this creates a deck thats already preshuffled (more information on the array slice method)
    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice 
    player1Deck = new Deck(deck.cards.slice(0, middleOfDeck))
    //since we only have the last 26 cards left we have to start from middleOfDeck-end aka deck.numberOfCards
    player2Deck = new Deck(deck.cards.slice(middleOfDeck, deck.numberOfCards))
    //checking the shuffled decks of the players 

    console.log(player1Deck);
    console.log(player2Deck);
    playRound(); {
            for(let i = 0; i < player1.playerDeck.numberOfCards(); i++) {
                console.log(player1.playerDeck.cards[i]);
                console.log(player2.playerDeck.cards[i]);

    if (roundWinner(player1Card, player2Card)) {
        console.log(results)
    }

    

}
//need a method for rounds where player 1 and player 2 play cards 


    //if statement about cards and their values where a result would end in a point given to either player one or two or result in a tie. 


    //Another method that displays final scores also stops when all cards have been played 




function Rounds() {
    const player1Hand = player1Deck.pop()
    const player2Hand = player2Deck.pop()
}

function roundWinner(player1Card, player2Card) {
    return cardValueMap[player1Card.value] > cardValueMap[player2Card.value]


}
