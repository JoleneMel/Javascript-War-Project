var expect = chai.expect;

describe('MyFunction', function() {
    describe('freshDeck', function() {
        it('should create a card deck', function() {
            const testDeck = new Deck();
            expect(testDeck.cards.length).to.equal(52);
        }); 
        it('numberOfCards property should be defined', function() {
            const testDeck = new Deck();
            expect(testDeck.numberOfCards).to.equal(52);
        });
    });
});



describe("My Function", function() {
    describe("setupGame", function() {
        it("Starts a new game of war with the two players and gives part of the deck to Nixus", function() {
            let Nixus = new Player('Nixus');
            let Adora = new Player('Adora');
            setupGame(Nixus, Adora);
            expect(Nixus.playerDeck).to.be.a('array');
        });
        it('Not start w/o a player 1 or player 2', function() {
            expect(function() {
                setupGame();
            }).to.throw(Error);
        });
    });
});



describe("My Function", function() {
    describe("roundOutput", function() {
        it('roundOutput should succeed if both player objects are valid and game has been set up', function() {
            let Nixus = new Player('Nixus');
            let Adora = new Player('Adora');
            //need to call game to ensure it runs
            setupGame(Nixus, Adora);
            expect(function() {
                roundOutput(Nixus, Adora, 1);
            }).to.not.throw();
        });
        it('roundOutput should not succeed if player objects are not valid', function() {
            let Nixus = new Player('Nixus');
            let Adora = new Player('Adora');
            //need to call setupGame properly to ensure the correct error
            setupGame(Nixus, Adora);
            expect(function() {
                roundOutput(Nixus, null, 1);
            }).to.throw(Error);
        });
    });
});

describe("My Function", function() {
    describe("playRoundResults", function() {
        it('Evaluates outcome of each round played with the players and gameSetup', function() {
            let Nixus = new Player('Nixus');
            let Adora = new Player('Adora');
            setupGame(Nixus, Adora);
            expect(function() {
                playRoundResults(Nixus, Adora);
            }).to.not.throw();
        });
        it('With a premade deck it will end with a tie', function() {
            let Nixus = new Player('Nixus');
            let Adora = new Player('Adora');
            //changing the amount of cards within the playerDeck
            Nixus.playerDeck = [new Card('diamond', '3'), new Card('heart', 'J'), new Card('club', 'K'), new Card('spade', 'Q')];
            Adora.playerDeck = [new Card('diamond', '4'), new Card('heart', '10'), new Card('club', 'Q'), new Card('spade', 'A')];
            playRoundResults(Nixus, Adora);
            expect(Nixus.playerScore).to.equal(Adora.playerScore);
        });
        it('With a premade deck player 1 /Nixus will win', function() {
            let Nixus = new Player('Nixus');
            let Adora = new Player('Adora');
            //changing the amount of cards within the playerDeck
            Nixus.playerDeck = [new Card('diamond', '3'), new Card('heart', 'J'), new Card('club', 'K')];
            Adora.playerDeck = [new Card('diamond', '4'), new Card('heart', '10'), new Card('club', 'Q')];
            playRoundResults(Nixus, Adora);
            expect(Nixus.playerScore).to.be.above(Adora.playerScore);
        });
        it('With a premade deck player 2 /Adora will win', function() {
            let Nixus = new Player('Nixus');
            let Adora = new Player('Adora');
            //changing the amount of cards within the playerDeck
            Nixus.playerDeck = [new Card('diamond', '3'), new Card('heart', 'J'), new Card('club', '3')];
            Adora.playerDeck = [new Card('diamond', '4'), new Card('heart', '10'), new Card('club', 'Q')];
            playRoundResults(Nixus, Adora);
            expect(Nixus.playerScore).to.be.below(Adora.playerScore);
        });
    });
});

describe("My Function", function() {
    describe("finalTally", function() {
        it('finalTally should succeed if both player objects are valid and game has been set up', function() {
            let Nixus = new Player('Nixus');
            let Adora = new Player('Adora');
            setupGame(Nixus, Adora);
            expect(function() {
                finalTally(Nixus, Adora);
            }).to.not.throw();
        });
        it('finalTally should not succeed if player objects are not valid', function() {
            let Nixus = new Player('Nixus');
            let Adora = new Player('Adora');
            //need to call setupGame properly to ensure the correct error
            setupGame(Nixus, Adora);
            expect(function() {
                finalTally(Nixus, null, 1);
            }).to.throw(Error);
        });
    });
});