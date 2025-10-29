//html faili ei saa vst commente panna seega
//kui sa soovid html faili kuvada, siis leia see üles file exploreris ja "open with" ning vali brauser, millega seda avada.
//kui sa proovid js failist vigu otsida siis console.log(); aitab

// Siin on küsimuste loetelu
const questions = [
    {
        question: "Iterative maps",
        answers: [
            { text: "1", correct: "" },
            { text: "2", correct: true },
            { text: "3", correct: "" },
            { text: "4", correct: "" }
        ]
    },
    {
        question: "Turing machine?",
        answers: [
            { text: "1989", correct: "" },
            { text: "1990", correct: "" },
            { text: "1991", correct: true },
            { text: "1992", correct: "" }
        ]
    },
    {
        question: "hypothalamus to cortext data biased learning when sleeping?",
        answers: [
            { text: "Munamägi", correct: "" },
            { text: "Suur Munamägi", correct: true },
            { text: "Vallamägi", correct: "" },
            { text: "Emumägi", correct: "" }
        ]
    },
    {
        question: "Reaalarvude suurus, pole järjestatav?",
        answers: [
            { text: "Munamägi", correct: "" },
            { text: "Suur Munamägi", correct: true },
            { text: "Vallamägi", correct: "" },
            { text: "Emumägi", correct: "" }
        ]
    },
    {
        question: "Realarvud, Cauchy sequences",
        answers: [
            { text: "Munamägi", correct: "" },
            { text: "Suur Munamägi", correct: true },
            { text: "Vallamägi", correct: "" },
            { text: "Emumägi", correct: "" }
        ]
    },
    {
        question: "Kui su input biti stringi pikkus on n siis mitu erinevat binaarset funktsiooni leidub sellele bit stringile?",
        answers: [
            { text: "Munamägi", correct: "" },
            { text: "Suur Munamägi", correct: true },
            { text: "Vallamägi", correct: "" },
            { text: "Emumägi", correct: "" }
        ]
    },
    {
        question: "Midagi maatriksite kohta",
        answers: [
            { text: "Munamägi", correct: "" },
            { text: "Suur Munamägi", correct: true },
            { text: "Vallamägi", correct: "" },
            { text: "Emumägi", correct: "" }
        ]
    },
    {
        question: "On rohkem tõeseid fakte kui tõestatavaid fakte",
        answers: [
            { text: "Munamägi", correct: "" },
            { text: "Suur Munamägi", correct: true },
            { text: "Vallamägi", correct: "" },
            { text: "Emumägi", correct: "" }
        ]
    },
    {
        question: "4 värvi teoreem, tõeastati puhtalt arvutiga",
        answers: [
            { text: "Munamägi", correct: "" },
            { text: "Suur Munamägi", correct: true },
            { text: "Vallamägi", correct: "" },
            { text: "Emumägi", correct: "" }
        ]
    },
    {
        question: "Tõesta Riemann hypothesis",
        answers: [
            { text: "Kaks", correct: "" },
            { text: "Kolm", correct: true },
            { text: "Neli", correct: "" }
        ]
    }
];

//need muutujad on viidad html faili elementidele 
const questionElement = document.getElementById("question");
const answerButtonsElement = document.getElementById("answerButtons");
const nextButton = document.getElementById("next-btn");
const quizElement = document.getElementById("quiz");
const endElement = document.getElementById("end");
const retryButton = document.getElementById("retry-btn");

// muutuja, mis hoiab meeles mitmenda küsimuse juures oleme
let currentQuestionIndex = 0;


//Käivitab viktoriini uuesti
function startQuiz() {
    currentQuestionIndex = 0;
 
    // muudab klasse nii et küsimusi oleks näha ja tulemust mitte
    endElement.classList.add("hidden");
    quizElement.classList.remove("hidden");
    
    showQuestion();
}


//Kustutab vana küsimuse ja vastused. Kuvab praeguse küsimuse ja vastused
function showQuestion() {

    // Võtab praeguse küsimuse andmebaasist
    let currentQuestion = questions[currentQuestionIndex];
    
    // Määrab küsimuse teksti HTML elemendile
    //${} on muutuja, mis tehakse stringiks
    //see on kujul "number. küsimus"
    questionElement.innerHTML = `${currentQuestionIndex + 1}. ${currentQuestion.question}`;

    //tühjendab vastuste elemendi
    answerButtonsElement.replaceChildren();

    //Loo iga vastusevariandi jaoks nupp
    //for loop iga vastusega (vastus on kujul {text: "tekst", correct: true})
    currentQuestion.answers.forEach(vastus => {
        //loob uue <button> elemendi
        const button = document.createElement("button");

        //määrab <button> tekstiks vastuse teksti
        button.innerHTML = vastus.text;

        //määrab css stiili
        button.classList.add("btn");
        
        // Salvestab nupu sisse info, kas see vastus on tõene
        //data atribuut saab salvestada ainult stringe, see on miks false asemel on ""
        button.dataset.correct = vastus.correct;
        
        // Lisab nupule klikkimise selectAnswer sündmuse, kui sa klikid nuppu siis aktiveerub selectAnswer funktsioon
        button.addEventListener("click", selectAnswer);
        
        // Lisab nupu vastuste elementi
        answerButtonsElement.appendChild(button);
    });
}


//Käivitub, kui kasutaja vajutab vastuse nupule.
function selectAnswer(event) {
    //see on viit sellele nupule mida vajutati
    const selectedButton = event.target;
    
    // Kontrolli, kas vastus oli õige ja muuda nupu värv vastavalt
    if (selectedButton.dataset.correct) {
        selectedButton.classList.add("correct"); // Muuda nupp roheliseks
    } else {
        selectedButton.classList.add("incorrect"); // Muuda nupp punaseks
    }

    // Muuda kõik nupud mitteaktiivseks ja muuda õige vastuse nupu värv roheliseks
    Array.from(answerButtonsElement.children).forEach(button => {
        
        if (button.dataset.correct) {
            button.classList.add("correct"); //õige nupu värv roheliseks
        }
        button.disabled = true; //"invaliidistab" (disables) nupu et seda ei saaks teist korda vajutada
        
    });
}


//Otsustab, kas näidata järgmist küsimust või lõpptulemust.
function handleNextButton() {
    currentQuestionIndex++; //suurendab indeksit ühe võrra
    
    if (currentQuestionIndex < questions.length) {
        // Kui küsimusi on veel, näita järgmist
        showQuestion();
    } else {
        // Kui küsimused on otsas, näita tulemusi
        showResults();
    }
}


// Peidab küsimused ja kuvab lõpusõna
function showResults() {
    quizElement.classList.add("hidden");
    endElement.classList.remove("hidden");
}

//Alustab viktoriiniga kohe, kui leht laeb
startQuiz();