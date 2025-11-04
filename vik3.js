//algne kood pärines tehisarult


// Siin on küsimuste loetelu
const questions = [
    {
        question: "Kui suur on inimese ja šimpansi DNA sarnasus?",
        answers: [
            { text: "69%", correct: "" },
            { text: "88%", correct: "" },
            { text: "96~98%", correct: true },
            { text: "99,9%", correct: "" }
        ]
    },
    {
        question: "Milline käitumine on täheldatud nii inimestel kui ka šimpansitel pärast konflikti?",
        answers: [
            { text: "Vastastikune ignoreerimine", correct: "" },
            { text: "Üksteise toidu varastamine", correct: "" },
            { text: "Grupist lahkumine", correct: "" },
            { text: "Leppimine ja kallistamine", correct: true }
        ]
    },
    {
        question: "Milline primaat kasutab looduses tööriistu kõige sarnasemas võtmes inimesega?",
        answers: [
            { text: "Orangutan", correct: "" },
            { text: "Gorilla", correct: "" },
            { text: "Šimpans", correct: true },
            { text: "Kaputsiinahv", correct: "" }
        ]
    },
    {
        question: "Milline inimlik oskus on täheldatud mõnel ahvil isegi vangistuses?",
        answers: [
            { text: "Õppida viipekeelt või sümbolite kasutamist", correct: true },
            { text: "Arvutada kümnendmurde", correct: "" },
            { text: "Mängida muusikainstrumenti", correct: "" },
            { text: "Kasutada mobiiltelefoni", correct: "" }
        ]
    },
    {
        question: "Mis teeb orangutanid eriti “inimlikuks” oma igapäevastes harjumustes?",
        answers: [
            { text: "Nad punuvad endale ööseks voodi või pesa", correct: true },
            { text: "Nad pesevad käsi enne sööki", correct: "" },
            { text: "Nad hoiavad tööriistu spetsiaalsetes “taskutes”", correct: "" },
            { text: "Nad valmistavad oma toidule maitseaineid", correct: "" }
        ]
    },
    {
        question: "Milline neist inimlikest tunnetest on teaduslikult tõestatud ka šimpansitel?",
        answers: [
            { text: "Häbi", correct: "" },
            { text: "Empaatia", correct: true },
            { text: "Dekadents", correct: "" },
            { text: "Armukadedus", correct: "" }
        ]
    },
    {
        question: "Millist tegevust on täheldatud nii inimestel kui ka ahvidel peegli ees?",
        answers: [
            { text: "Enese ära tundmine ja välimuse uurimine", correct: true },
            { text: "Peegli vastu “rääkimine”", correct: "" },
            { text: "Peegliga mängimine kui mänguasjaga", correct: "" },
            { text: "Peegli ees tantsimine", correct: "" }
        ]
    },
    {
        question: "Milline “inimlik” haigus esineb ka ahvidel?",
        answers: [
            { text: "Migreen", correct: "" },
            { text: "Diabeet", correct: "" },
            { text: "Kõrge vererõhk", correct: "" },
            { text: "Kõik eeltoodud", correct: true }
        ]
    },
    {
        question: "Milline järgmine tegevus on täheldatud metsikutel kaputsiinahvidel ja meenutab inimühiskonna sotsiaalseid mustreid?",
        answers: [
            { text: "Nad vahetavad toitu “teenuste” eest (nt sügamise vastu)", correct: true },
            { text: "Nad korraldavad “kohtupidamisi”", correct: "" },
            { text: "Nad valivad juhti hääletusega", correct: "" },
            { text: "Nad tähistavad “pühapäevi” puhkusega", correct: "" }
        ]
    },
    {
        question: "Mis on üks naljakas, kuid tõsine põhjus, miks inimesed ja ahvid kipuvad samades olukordades vigu tegema?",
        answers: [
            { text: "Sarnane ajuotsustusmehhanism ehk eelistus lühiajalisele kasule", correct: true },
            { text: "Liigne uudishimu", correct: "" },
            { text: "Järjekindel hierarhia mõtlemine", correct: "" },
            { text: "Ajuhälve", correct: "" }
        ]
    }
];

//siin on lisainfo võimalus. 
//esimene lahter on 1 kui on tegu pildiga ja 0 kui tekstiga
//teine lahter on vastavalt kas allikas või tekst
//kolmas on info kasti kaugus vasakust seinast pikslites
//neljas on kaugus põhjast
//viies on laius protsentides
//kuues on pikkus protsentides (tekstil ei ole pikkust)
const Data = [
    [[1, "https://media.istockphoto.com/id/117144838/photo/baboon-and-man-in-yelling-match.jpg?s=612x612&w=0&k=20&c=zKgkAFA2jg-lIwXeGCyJ0lF6TU2GpqMUDzSWmrV3xp4=", "0vw", "30vh", "25vw", "20vw"], [1, "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da84edaca86ed8862579f3d681be","70vw", "30vh", "30vw", "25vw"]],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    []
];

//need muutujad on viidad html faili elementidele 
const piltElement = document.getElementById("pilt")
const questionElement = document.getElementById("question");
const answerButtonsElement = document.getElementById("answerButtons");
const quizElement = document.getElementById("quiz");
const endElement = document.getElementById("end");
const nextButtonElement = document.getElementById("järgmine");

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
    
    // Keela "Järgmine" nupp kuni kasutaja valib vastuse
    nextButtonElement.disabled = true;

    
    let currentData = Data[currentQuestionIndex]

    piltElement.replaceChildren();

    currentData.forEach(kastike => {
        if(kastike[0]){
            a = document.createElement("div")
            a.style.backgroundColor = "#ffffff";
            a.style.borderRadius = "1vmin";
            a.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.1)";
            a.style.position = "fixed";
            a.style.left = kastike[2];
            a.style.bottom = kastike[3];
            a.style.padding = "2vmin";
            a.style.boxSizing = "border-box";

            const kast = document.createElement("img");
            kast.src = kastike[1];
            kast.style.width = kastike[4];
            kast.style.height = kastike[5]; 

            a.appendChild(kast)
            piltElement.appendChild(a);
        }
        else{
            a = document.createElement("div")
            a.style.backgroundColor = "#ffffff";
            a.style.borderRadius = "1vmin";
            a.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.1)";
            a.style.position = "fixed";
            a.style.left = kastike[2];
            a.style.bottom = kastike[3];
            a.style.width = kastike[4];
            a.style.padding = "2vmin";
            a.style.boxSizing = "border-box";

            const kast = document.createElement("div");
            kast.innerHTML = kastike[1]; 
            
            a.appendChild(kast)
            piltElement.appendChild(a);
        };
        
        
    });
    
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
    
    // Luba "Järgmine" nupp pärast vastuse valimist
    nextButtonElement.disabled = false;
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

//Alustab viktoriiniga kohe, kui leht ära laeb
startQuiz();