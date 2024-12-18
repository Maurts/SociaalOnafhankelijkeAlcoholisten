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
    document.getElementById('shuffle-button').addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default behavior
        openConfirmationModal();
    });

    // Function to initialize and shuffle the deck
    function initializeDeck() {
        // Reset the deck with Dutch card names
        deck = [

	'drink als je ooit een crush hebt gehad op iemand in dit gezelschap', 'drink als je ooit gelogen hebt over je leeftijd om iemand te versieren', 
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
	'doe je ogen dicht, de groep kiest iemand uit de groep, die persoon moet zonder te praten jou duidelijk maken wie het is, als je het goed raad moet de rest van de groep 2 keer drinken als je het fout hebt moeten jullie 1 keer drinken',
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
	'kies iemand uit de groep om je een zuigzoen te geven',
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
	'drink als je wel eens onder invloed gewerkt hebt',	'doe je ogen dicht, de groep moet 1 iemand uitkiezen om je te zoenen,  gebruik spin the wheel website om de bepalen waar (voorhoofd, lippen, wang, neck etc), als je goed raad wie de persoon is moet de groep drinken, als je het fout hebt moeten jij en de gekozen persoon drinken',
	'drink als je gelooft in god',
	'drink als je in de laatste 10 minuten op je telefoon hebt gezeten', 'zoen franka of je moet drinken',
	'neem een slok en geef hem door naar de persoon die door de groep gekozen wordt',
	'wijs aan, wie zijn/haar shirt moet uittrekken',
	'in welk jaar vond je jezelf het kutst? drink als dat in de laatste 3 jaar was',
	'laat de groep een persoon kiezen die jij moet bodyshotten',
	'drink als je 1 man 1 jar hebt gezien',
	'drink als 2 of meer kledingstukken in je outfit van zara zijn',
	'wie zou je sneller doen de persoon links van je of de persoon rechts van je?',
	'wijs aan, wie heeft gezoend met de lelijkste persoon',
	'iedereen behalve jij in de groep doet zijn ogen dicht, tik de persoon aan die je het liefst zou doen',
	'drink 1 keer als je iemand rond dezelfde leeftijd kent met dezelfde naam, drink 2 keer als jij de betere versie bent',
	'drink als je in de laatste 7 dagen iets hebt besteld',
	'drink 1 keer voor elk nike kledingstuk dat je aan hebt',
	'kies een iemand van het andere geslacht, doe een potje steen papier schaar, iedereen van het geslacht van de verliezer moet drinken',
	'wijs aan, wie de slechtste muziek smaak heeft',
	'wijs aan, wie beter voor zichzelf moet zorgen',
	'wijs aan, wie het best kan zingen',
	'wijs aan, wie de grootste sfeermaker is, iedereen behalve de winnaar moet drinken',
	'wijs aan, wie het snelst zou vreemdgaan',
	'wat vind je het meest aantrekkelijk aan de persoon links van je',
	'laat de groep iemand van het andere geslacht kiezen, neem met die persoon een foto met jullie voorhoofden tegen elkaar en plaats het op privé verhaal',
	'de groep kiest iemand uit de groep voor je uit, vertel hoe jullie eerste date er uit zou zien, laat de persoon van het andere geslacht je plan beoordelen als je lager dan een 6 hebt moet je drinken',
	'drink als je wel eens hebt gedroomd over iemand uit de vriendengroep',
	'zeg de achternaam van iedereen uit de groep, drink 1 keer voor elke fout die je maakt',
	'laat de groep iemand kiezen waar jij van moet vertellen wat je het aantrekkelijkst vind aan die persoon',
	'steek je hand op als je in de laatste 2 maanden niet gezoend hebt, is het getal even? maak dan koppels en zoen elkaar, is het getal oneven? moeten jullie drinken',
	'iedereen met een voornaam die begint met dezelfde letter als de persoon die deze kaart voorleest moet drinken',
	'laat de groep je laatst geopende notitie zien of drink 2 keer',
	'steel een kledingstuk van iemand naar keuze',
	'doe een potje flesje draaien alleen dan met op schoot zitten',
	'drink als je no nut november hebt gefaald',
	'drink als je in de laatste 2 maanden zo dronken bent geweest dat je gaten had',
	'de persoon die dit jaar met de meeste mensen heeft gezoend moet drinken',
	'de laatste persoon die niet bij iemand zit of iemand op schoot heeft zitten moet drinken',
	'drink als je iets van iemand anders uit de groep in je eigen huis hebt liggen',
	'laat de groep iemand kiezen die jou moet flashen',
	'de langste in het gezelschap moet drinken',
	'drink als je een vape hebt',
	'wijs aan, wie het slechtst met geld om kan gaan',
	'de groep moet twee mensen van plek wisselen',
	'laat de groep twee koppels kiezen om elkaar te tongen het koppel dat het het minst lang volhoud moet een atje doen',
	'beschrijf iemand die hier niet is zonder zijn of haar naam te zeggen in maximaal 3 woorden, als het de groep niet lukt om te raden moet iedereen drinken',
	'kijk wie het meeste kan drinken in 15 seconden, de winnaar heeft 1 free pass on niet te hoeven drinken',
	'drink als je een domme hobby hebt gehad drink 2 keer als je niet wil vertellen wat het is',
	'wijs aan, wie het beste kan dansen',
	'wijs aan, wie de grootste junkie is',
	'Laat de groep kiezen met wie je 5 minuten naar de wc moet gaan',
	'iedereen geeft iets kuts toe dat ze ooit gedaan hebben, de groep stemt op wie het kutste ding heeft gedaan',
	'drink als je ooit een naaistreek bij iemand uit de groep hebt uitgehaald, drink twee keer als je het niet wil zeggen',
	'wijs aan, wie naar de goorste porno kijkt',
	'het geslacht die de meerderheid heeft in het spel moet het aantal keer drinken dat er meer mensen van dat geslacht zijn',
	'de groep moet een roddel vertellen die over de persoon die deze kaart trekt gaat, de persoon die de kaart trekt moet bevestigen of het klopt of niet',
	'speel het spel vanaf nu tegen de klok in',
	'wijs aan, aan wie de persoon die deze kaart trekt €2,50 moet overmaken',
	'de persoon die deze kaart trekt moet de volgende vraag/opdracht geven aan iemand anders, deze persoon mag niet weigeren',
	'geef iemand naar keuze een klap',
	'wijs aan, wie de knapste broer of zus heeft',
	'wijs aan, wie er als een sloeber uitziet',
	'speel een potje stef stuntpiloot totdat iemand twee keer heeft verloren',
	'de persoon die het verste weg woont moet drinken',
	'geef een knuffel aan iemand die niet aan het spel mee doet',
	'drink als je denkt dat iemand uit de groep je leuk vind'
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

    /* Modal Functionality */

    // Function to open the confirmation modal
    function openConfirmationModal() {
        document.getElementById('confirmation-modal').style.display = 'block';
    }

    // Function to close the confirmation modal
    function closeConfirmationModal() {
        document.getElementById('confirmation-modal').style.display = 'none';
    }

    // Event listener for "Ja" button
    document.getElementById('confirm-yes').addEventListener('click', function() {
        // Proceed with shuffling
        shuffleDeck();
        // Close the modal
        closeConfirmationModal();
    });

    // Event listener for "Nee" button
    document.getElementById('confirm-no').addEventListener('click', function() {
        // Simply close the modal without shuffling
        closeConfirmationModal();
    });

    // Close modal when clicking outside the modal content
    window.addEventListener('click', function(event) {
        var modal = document.getElementById('confirmation-modal');
        if (event.target == modal) {
            closeConfirmationModal();
        }
    });
});
