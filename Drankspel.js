// JavaScript Code

// Wrap the code inside DOMContentLoaded to ensure the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Declare the deck variable in the global scope
    var deck = [];

    // Initialize the deck and shuffle it at the start
    initializeDeck();

    // Event listener for the draw button
    document.getElementById('draw-button').addEventListener('click', drawCard);

    // Event listener for the shuffle button
    document.getElementById('shuffle-button').addEventListener('click', shuffleDeck);

    // Function to initialize and shuffle the deck
    function initializeDeck() {
        // Reset the deck with Dutch card names
        deck = [
	'drink als je ooit een crush hebt gehad op iemand in dit gezelschap', 'drink als je ooit gelogen hebt over je leeftijd om iemand te versieren ', 
	'laat de groep door je laatste 20 fotos heen scrollen of neem drie slokken', 'gedraag je als een kip totdat je weer aan de beurt bent of at je glas',
	'drink als je in de laatste 3 maanden iemand hebt geghost',
	'drink als je een spijkerbroek aan hebt',
	'doe een potje steen papier schaar met een persoon naar keuze, verliezer moet drinken',
	'maak een selfie met de persoon rechts van je en post hem zonder uitleg op je story, als je weigert moet je twee keer drinken',
	'drink 2 keer als je ooit hebt gelogen dat je druk bent om onder iets uit te komen waar je geen zin in had',
	'drink als je meer dan 20 ongeopende snaps hebt',
	'reageer op de snap die het langst op afgeleverd hebt gelaten of drink 2 keer',
	'de laatste persoon/personen die elkaar een knuffel geven moeten drinken',
	'iedereen neemt een bodyshot van de persoon die het meest dronken is',
	'drink als je ooit een crush hebt gehad om iemand die meer dan 4 jaar ouder is',
	'laat de groep iets kiezen voor je om als hoed te dragen totdat je weer aan de beurt bent',
	'de persoon met de duurste en de persoon met de goedkoopste outfit moeten drinken',
	`prisoners dilemma: kies 1 andere persoon
  a/a = 1 slokken/1 slokken 
  b/b = 2 slokken/2 slokken
  a/b = 3 slokken/0 slokken
  b/a = 0 slokken/3 slokken`,
	'iedereen appt de laatste persoon die ze geappt hebben, de persoon die het eerste een reactie ontvangt moet drinken',
	'wijs de persoon aan met wie je het liefst van leven zou willen wisselen, de persoon met de meeste stemmen moet drinken',
	'drink als je ooit hebt gezoend met iemand uit de groep',
	'drink als je op dit moment en crush hebt op iemand uit de groep',
	'laat de groep een dare voor je bedenken, als je het niet doet moet je drinken',
	'drink als je ooit een ongemakkelijke/cosmetische operatie hebt gehad',
	'laat de groep iemand kiezen die bij je/waarbij je op schoot moet zitten',
	'iedereen pakt zijn telefoon de speler die de kaart pakt moet de persoon uit de groep appen die hij/zij het aantrekkelijkst vind',
	'doe je ogen dicht, de groep kiest iemand uit de groep, die persoon moet zonder te praten jou duidelijk maken wie het is. als je het goed raad moet de rest van de groep 2 keer drinken als je het fout hebt moeten jullie 1 keer drinken',
	'doe je ogen dicht, de groep laat je iets aanraken naar keuze als je goed raad wat het is drinkt de groep 2 keer, heb je het fout drink 1 keer',
	'drink als er een barst in je telefoon zit',
	'iedereen bedenkt een nieuwe kaart voor het spel, daarna stemt iedereen op zijn favoriet (niet je eigen natuurlijk) iedereen behalve de winnaar moet 2 keer drinken',
	'wijs aan, wie later een sugar daddy/mommy heeft',
	'drink als je ooit hebt gekotst bij maurits thuis (wees eerlijk, no questions asked)',
	'kies met de hele groep een kledingstuk dat iedereen uit moet doen',
	'de laatste persoon die een kledingstuk uittrekt moet drinken',
	'laat elkaar je cijfers zien, de persoon met het laagste gemiddelde moet drinken',
	'drink als je ooit gezoend hebt met iemand je achteraf eigenlijk best wel lelijk vind',
	'overtuig iemand uit de groep om je een tikkie van minimaal 5 euro te betalen, lukt dit niet neem 4 slokken (geen blackmail)',
	'speel een potje flesje draaien',
	'cupido: laat de groep stemmen om iemand aan je te koppelen, deze persoon moet vanaf nu drinken wanneer jij moet drinken en andersom',
	'schrijf je naam op de borst van een persoon naar keuze',
	'wijs aan, wie het gierigst is',
	'iedereen bodyshot degene die het langst niet is klaargekomen',
	'drink als je ooit onder invloed bent geweest op school',
	'wijs aan bij wie je het liefst in huis zou willen trekken',
	'wijs aan, wie de kutste naam heeft',
	'vraag chatgpt om een dare voor je te bedenken, doe je dit niet moet je drinken',
	'de persoon met het laagste batterij percentage moet drinken',
	'Wijs aan, wie niet moet drinken, de rest moet drinken',
	'Drink 1 keer voor elke ouder die je hebt die niet uit nederland komt',
	'de personen met de langste en de kortste naam moeten drinken',
	'kies een persoon om een staarwedstrijd mee te doen de verliezer moet drinken',
	'raad de kleur van het ondergoed van iedereen uit de groep, voor elke fout die je maakt moet je 1 keer drinken',
	'wissel met een persoon naar keuze van telefoon',
	'hou een sales pitch voor een willekeurig object in de kamer als de groep je een onvoldoende geeft moet je drinken',
	'dobbel met 2 dobbelstenen, verdeel dat aantal slokken over de groep', 
	'drink als je in de laatste maand nicotine hebt geconsumeerd',
	'speel een potje truth or dare, iedereen die zijn truth/dare niet wil doen moet drinken',
	'wijs aan, wie het minst enthousiast mee doet, de winnaar moet 2 keer drinken', 
	'laat de groep 1 iemand van het zelfde geslacht kiezen en 1 iemand van het andere geslacht, doe steen papier schaar met de persoon van hetzelfde geslacht de winnaar moet zoenen met de persoon van het andere geslacht',
	'drink 1 keer voor elke ex je die hebt',
	'je krijgt 1 keer billenkoek van iedereen uit de groep, als je weigert moet je drinken',
	'wijs aan, wie je het irritants vind',
	'wijs aan, wie het goorst in bed is',
	'laat de groep iemand uit je contacten kiezen die je “ik heb gisteren over jou gedroomd” moet appen of drink 2 keer',
	'laat iemand naar keuze je een schoudermassage geven voor 1 minuut als je geluid maakt moet je drinken',
	'kies iemand om een lapdance aan iemand anders te geven voor 30 seconde, als de spelers weigeren moet iedereen uit de groep drinken',
	'kies 1 persoon die voor jou drinkt de volgende ronde',
	'als je een iemand van het andere geslacht uit de groep nu een naakt foto zou moeten sturen wie zou dat zijn en waarom?',
	'laat iemand aan je vinger zuigen voor 10 seconde als hij/zij weigert moeten jullie allebei drinken',
	'laat de groep iemand kiezen om je een zuigzoen te geven als je weigert moet je drinken',
	'wissel broek met iemand van het andere geslacht of de hele groep moet drinken',
	'iedereen uit de groep moet je voor de komende twee rondes daddy/mommy noemen',
	'doe je ogen dicht en laat iemand uit de groep iets in je mond doen, drink als je weigert',
	'drink elke keer als je praat totdat je weer aan de beurt bent',
	'wat is het ongemakkelijkste dat je deze week hebt meegemaakt',
	'zeg iets simpels in een andere taal, als iemand kan raden wat je zegt moet je drinken, als niemand het kan raden moet de groep drinken',
	'speel een potje vingeren totdat iemand twee keer heeft verloren',
	'wijs aan, wie het geilst is',
	'drink als je in de laatste 3 maanden gekotst hebt',
	'wijs aan, wie het preutst is',
	'drink als je ooit hebt gekotst door een ander middel dan alcohol',
	'drink als je wel eens onder invloed gewerkt hebt', 	'doe je ogen dicht, de groep moet 1 iemand uitkiezen om je te zoenen,  gebruik spin the wheel website om de bepalen waar (voorhoofd, lippen, wang, neck etc). als iedereen je het goed raad moet de groep drinken, als je het fout moet jij en de gekozen persoon drinken',
	'drink als je gelooft in god'
        // Voeg meer kaarten toe indien nodig
            // Voeg meer kaarten toe indien nodig
        ];

        // Shuffle the deck using Fisher-Yates algorithm
        for (var i = deck.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = deck[i];
            deck[i] = deck[j];
            deck[j] = temp;
        }

        // Update the remaining cards display
        updateRemainingCards();

        // Ensure the draw button is enabled
        document.getElementById('draw-button').disabled = false;
    }

    // Function to draw a card
    function drawCard() {
        if (deck.length === 0) {
            document.getElementById('card-display').innerText = 'Geen kaarten meer in de stapel!';
            document.getElementById('draw-button').disabled = true;
            return;
        }

        // Draw the top card
        var drawnCard = deck.pop();

        // Display the drawn card
        document.getElementById('card-display').innerText = drawnCard;

        // Update the remaining cards display
        updateRemainingCards();

        // Disable the draw button if the deck is now empty
        if (deck.length === 0) {
            document.getElementById('draw-button').disabled = true;
        }
    }

    // Function to shuffle the deck
    function shuffleDeck() {
        initializeDeck();

        // Update the game state
        document.getElementById('card-display').innerText = 'Kaarten Geschud';
    }

    // Function to update the remaining cards display
    function updateRemainingCards() {
        var remaining = deck.length;
        document.getElementById('remaining-cards').innerText = 'Kaarten over: ' + remaining;
    }
});
