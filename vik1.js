// --- 1. KÜSIMUSTE ANDMEBAAS ---
// Lisage siia nii palju küsimusi kui soovite.
// Igal küsimusel peab olema 'question' (tekst) ja 'answers' (massiiv).
// Vastuste massiivis peab igal vastusel olema 'text' ja 'correct' (true/false).
const questions = [
    {
        question: "Mis on Eesti pealinn?",
        answers: [
            { text: "Tartu", correct: false },
            { text: "Tallinn", correct: true },
            { text: "Pärnu", correct: false },
            { text: "Narva", correct: false }
        ]
    },
    {
        question: "Mis aastal Eesti taasiseseisvus?",
        answers: [
            { text: "1989", correct: false },
            { text: "1990", correct: false },
            { text: "1991", correct: true },
            { text: "1992", correct: false }
        ]
    },
    {
        question: "Mis on Eesti kõrgeim tipp?",
        answers: [
            { text: "Munamägi", correct: false },
            { text: "Suur Munamägi", correct: true },
            { text: "Vallamägi", correct: false },
            { text: "Emumägi", correct: false }
        ]
    },
    {
        question: "Mitu värvi on Eesti lipul?",
        answers: [
            { text: "Kaks", correct: false },
            { text: "Kolm", correct: true },
            { text: "Neli", correct: false }
        ]
    }
];

// --- 2. HTML ELEMENTIDE VIITED ---
// Loome muutujad, et saaksime HTML elemente koodis kasutada.
const questionElement = document.getElementById("question");
const answerButtonsElement = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const quizElement = document.getElementById("quiz");
const resultsElement = document.getElementById("results");
const scoreTextElement = document.getElementById("score-text");
const retryButton = document.getElementById("retry-btn");

// --- 3. VIKTORIINI OLEKUMUUTUJAD ---
// Hoiame meeles, millise küsimuse juures oleme ja mis on skoor.
let currentQuestionIndex = 0;
let score = 0;

// --- 4. PÕHIFUNKTSIOONID ---

/**
 * Käivitab viktoriini algusest peale.
 */
function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Järgmine"; // Nupu tekst tagasi "Järgmine"
    
    // Peida tulemused ja näita viktoriini
    resultsElement.classList.add("hidden");
    quizElement.classList.remove("hidden");
    
    showQuestion();
}

/**
 * Kustutab vanad vastused ja kuvab praeguse küsimuse.
 */
function showQuestion() {
    resetState(); // Kustutab eelmise küsimuse nupud

    // Võta praegune küsimus andmebaasist
    let currentQuestion = questions[currentQuestionIndex];
    
    // Määra küsimuse tekst HTML elemendile
    questionElement.innerHTML = `${currentQuestionIndex + 1}. ${currentQuestion.question}`;

    // Loo iga vastusevariandi jaoks nupp
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn"); // Lisa CSS klass
        
        // Salvesta nupu sisse info, kas see on õige vastus
        if (answer.correct) {
            button.dataset.correct = "true";
        }
        
        // Lisa nupule klikkimise sündmus
        button.addEventListener("click", selectAnswer);
        
        // Lisa nupp vastuste konteinerisse
        answerButtonsElement.appendChild(button);
    });
}

/**
 * Puhastab eelmise küsimuse oleku (peidab "Järgmine" nupu ja eemaldab vanad vastused).
 */
function resetState() {
    nextButton.classList.add("hidden"); // Peida "Järgmine" nupp
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}

/**
 * Käivitub, kui kasutaja vajutab vastuse nupule.
 * @param {Event} e Klikkimise sündmus
 */
function selectAnswer(e) {
    const selectedButton = e.target;
    const isCorrect = selectedButton.dataset.correct === "true";

    // Kontrolli, kas vastus oli õige
    if (isCorrect) {
        selectedButton.classList.add("correct"); // Muuda nupp roheliseks
        score++; // Suurenda skoori
    } else {
        selectedButton.classList.add("incorrect"); // Muuda nupp punaseks
    }

    // Muuda kõik nupud mitteaktiivseks ja näita õiget vastust
    Array.from(answerButtonsElement.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct"); // Näita alati õiget vastust
        }
        button.disabled = true; // Keela nupud
    });

    // Näita "Järgmine" nuppu
    nextButton.classList.remove("hidden");
}

/**
 * Kuvab lõpptulemuse.
 */
function showResults() {
    // Peida viktoriin ja näita tulemusi
    quizElement.classList.add("hidden");
    resultsElement.classList.remove("hidden");

    // Kuva skoor
    scoreTextElement.innerHTML = `Sinu tulemus on ${score} punkti ${questions.length}-st!`;
}

/**
 * Otsustab, kas näidata järgmist küsimust või lõpptulemust.
 */
function handleNextButton() {
    currentQuestionIndex++; // Liigu järgmise küsimuse indeksi juurde
    
    if (currentQuestionIndex < questions.length) {
        // Kui küsimusi on veel, näita järgmist
        showQuestion();
    } else {
        // Kui küsimused on otsas, näita tulemusi
        showResults();
    }
}

// --- 5. SÜNDMUSTE KUULAJAD ---

// Mida teha, kui vajutatakse "Järgmine" nuppu
nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        // Kui viktoriin on juba läbi, siis see nupp käivitab uuesti
        startQuiz();
    }
});

// Mida teha, kui vajutatakse "Proovi uuesti" nuppu
retryButton.addEventListener("click", startQuiz);

// --- 6. KÄIVITAMINE ---
// Alusta viktoriiniga kohe, kui leht laeb
startQuiz();