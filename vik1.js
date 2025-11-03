//algne kood pärines tehisarult


// Siin on küsimuste loetelu
const questions = [
    {
        question: "Mis on rekurentsete jadade kontekstis püsipunkt?",
        answers: [
            { text: "1", correct: "" },
            { text: "1", correct: "" },
            { text: "1", correct: true },
            { text: "1", correct: "" }
        ]
    },
    {
        question: "Miks sellist kiirt jälgides jõutakse rekurentse jada püsipunkti(desse)?",
        answers: [
            { text: "Kuna kui funktsioon ei lõika y=x graafi, siis kiir ei jää vale vastuse taha kinni.", correct: "" },
            { text: "Kuna kiire iga murdumine toimub sellel kõrgusel/kaugusel mis on järgmise liikme väärtus.", correct: true },
            { text: "Kuna graafikul olev funktsioon on üksühene oma määramispiirkonnas ja ei teki olukorda, kus kaks kiirt satuvad samale rajale.", correct: "" },
            { text: "Kuna selle funktsiooni pöördfunktsioon on see sama funktsioon ainult nihutatud, seega juhtus nii, et seda funktsiooni iseenda peal kuus korda rakendades muutub see funktsioon funktsiooniks y=x ehk f(f(f(f(f(f(x))))))=x ning see on miks vastu y=x funktsiooni peegeldades jõuab püsipunktini.", correct: "" }
        ]
    },
    {
        question: "Mis on stabiilne püsipunkt?",
        answers: [
            { text: "1", correct: "" },
            { text: "1", correct: true },
            { text: "1", correct: "" },
            { text: "1", correct: "" }
        ]
    },
    {
        question: "Bifurkatsiooni diagramm",
        answers: [
            { text: "1", correct: "" },
            { text: "1", correct: true },
            { text: "1", correct: "" },
            { text: "1", correct: "" }
        ]
    },
    {
        question: "Miks püsipunktide arv kasvab?",
        answers: [
            { text: "1", correct: "" },
            { text: "1", correct: true },
            { text: "1", correct: "" },
            { text: "1", correct: "" }
        ]
    },
    {
        question: "Mis on kompleks arv?",
        answers: [
            { text: "1", correct: "" },
            { text: "1", correct: true },
            { text: "1", correct: "" },
            { text: "1", correct: "" }
        ]
    },
    {
        question: "Kuidas nad töötavad",
        answers: [
            { text: "1", correct: "" },
            { text: "1", correct: true },
            { text: "1", correct: "" },
            { text: "1", correct: "" }
        ]
    },
    {
        question: "change of variables",
        answers: [
            { text: "1", correct: "" },
            { text: "1", correct: true },
            { text: "1", correct: "" },
            { text: "1", correct: "" }
        ]
    },
    {
        question: "mandlebrot set I",
        answers: [
            { text: "1", correct: "" },
            { text: "1", correct: true },
            { text: "1", correct: "" },
            { text: "1", correct: "" }
        ]
    },
    {
        question: "mandlebrot set II",
        answers: [
            { text: "1", correct: "" },
            { text: "1", correct: true },
            { text: "1", correct: "" }
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
    [[1, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDwaUd677T_vbYjoh0Ks7enDDSZGWcEiHhrA&s", "10vw", "20vh", "20vw", "23vh"], [0, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", "1vw", "70vh", "25vw"],[1, "https://media.timeout.com/images/106006274/image.jpg", "66vw", "45vh", "23vw", "33vh"]],
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