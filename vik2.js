//algne kood pärines tehisarult


// Siin on küsimuste loetelu
const questions = [
    {
        question: "Kes oli Edward A. Murphy Jr., kelle nime järgi Murphy seadus sai tuntuks?",
        answers: [
            { text: "Komöödianäitleja", correct: "" },
            { text: "Insener ja testpilootide ohutusspetsialist", correct: true },
            { text: "Füüsik ja leiutaja", correct: "" },
            { text: "Ameerika kindral", correct: "" }
        ]
    },
    {
        question: "Millises kontekstis Murphy seadus esmakordselt formuleeriti?",
        answers: [
            { text: "NASA raketikatsetused", correct: "" },
            { text: "Auto turvavööde testimised", correct: "" },
            { text: "Õhujõudude kiirenduskatsetused (G-jõud)", correct: true },
            { text: "Lennukite autopiloodi arendus", correct: "" }
        ]
    },
    {
        question: "Kuidas kõlas Murphy seaduse algne versioon või mõte?",
        answers: [
            { text: "“Kõik, mis võib valesti minna, lähebki valesti.", correct: "" },
            { text: "Kui midagi saab teha valesti, keegi seda ka teeb.", correct: true },
            { text: "Kui midagi saab valesti minna, siis see läheb valesti kõige ebasobivamal ajal.", correct: "" },
            { text: "Eksimusi ei juhtu juhuslikult.", correct: "" }
        ]
    },
    {
        question: "Milline järgnevast EI ole klassikaline Murphy seaduse variatsioon?",
        answers: [
            { text: "Parkimiskohta leiad alles siis, kui enam seda ei vaja.", correct: "" },
            { text: "Leivaviil kukub alati võiga alla.", correct: "" },
            { text: "Kui jätad vihmavarju koju, hakkab sadama.", correct: "" },
            { text: "Kui oled valmis kõigeks, ei juhtu midagi.", correct: true }
        ]
    },
    {
        question: "Kellele omistatakse ütlus “Murphy oli optimist”?",
        answers: [
            { text: "Murphy enda kolleegile John Stappile", correct: true },
            { text: "Albert Einsteinile", correct: "" },
            { text: "Winston Churchilli naljana", correct: "" },
            { text: "Tundmatule netikommentaatorile", correct: "" }
        ]
    },
    {
        question: "Milline neist on teaduslikult kõige lähedasem “Murphy seaduse” tõestus?",
        answers: [
            { text: "Entroopia seadus termodünaamikas", correct: true },
            { text: "Newtoni kolmas seadus", correct: "" },
            { text: "Schrödingeri kass", correct: "" },
            { text: "Gaussi jaotus", correct: "" }
        ]
    },
    {
        question: "Kuidas seletab Murphy seadust tõenäosusteooria?",
        answers: [
            { text: "Väga ebatõenäolised sündmused juhtuvad alati", correct: "" },
            { text: "Kui sündmusi on palju, siis vähemalt üks negatiivne kindlasti juhtub", correct: true },
            { text: "Murphy seadus rikub tõenäosusteooria", correct: "" },
            { text: "See on kvantfääris nähtus", correct: "" }
        ]
    },
    {
        question: "Mis on “Finagle’i seadus”, mida sageli peetakse Murphy seaduse “laienduseks”?",
        answers: [
            { text: "“Kõik, mis võib valesti minna, läheb valesti kõige hullemal võimalikul viisil.”", correct: true },
            { text: "“Kui asju saab valesti mõista, siis neid ka valesti mõistetakse.”", correct: "" },
            { text: "“Iga probleem lahendatakse, kuni see muutub hullemaks.”", correct: "" },
            { text: "“Õnn soosib ettevalmistunuid.”", correct: "" }
        ]
    },
    {
        question: "Milline popkultuuri teos tegi Murphy seaduse eriti kuulsaks 20. sajandil?",
        answers: [
            { text: "“Apollo 13”", correct: true },
            { text: "“Airplane!”", correct: "" },
            { text: "“The X-Files”", correct: "" },
            { text: "“Star Trek”", correct: "" }
        ]
    },
    {
        question: "Milline nendest paroodilistest “seadustest” sobib Murphy filosoofiasse kõige paremini?",
        answers: [
            { text: "Parkinsoni seadus: töö laieneb, et täita kogu olemasolev aeg", correct: true },
            { text: "Moore'i seadus: mikrokiipide võimsus kahekordistub iga kahe aastaga", correct: "" },
            { text: "Newtoni seadus: jõud on võrdne massi ja kiirenduse korrutisega", correct: "" },
            { text: "Godwini seadus: internetiväitlus jõuab lõpuks Hitlerini", correct: "" }
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
    [],
    [[1, "https://substackcdn.com/image/fetch/$s_!QJsN!,w_1456,c_limit,f_webp,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F53fa8301-e79a-42a6-b54c-a3f47b31d8f0_600x391.jpeg", "0vw", "20vh", "25vw", "40vh"]],
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