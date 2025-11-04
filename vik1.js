//algne kood pärines tehisarult


// Siin on küsimuste loetelu
const questions = [
    {
        question: "Mis on rekurentsete jadade kontekstis püsipunkt?",
        answers: [
            { text: "Püsipunkt on iga jada piirväärtus.", correct: "" },
            { text: "Püsipunkt on punkt, mille puhul f(x) = x.", correct: "" },
            { text: "Püsipunkt on punkt, mille puhul f^n(x)=x mingi naturaalarvu n puhul.", correct: true },
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
            { text: "Stabiilne püsipunkt on püsipunkt mille puhul kõik võimalikud alguspunktid koonduvad sellesse püsipunkti.", correct: "" },
            { text: "Püsipunkt (m,n) on stabiilne siis kui, leidub reaalarv r > 0 nii et rekurentsed jadad algusega hulgas {m-r,m+r} koonduvad püsipunkti.", correct: true },
            { text: "Stabiilne püsipunkt on püsipunkt, millesse koondub rohkem kui üks rekurentne jada.", correct: "" },
            { text: "Stabiilne püsipunkt on püsipunkt, mille puhul meie valitud potentsiaalse energia funktsioon on minimaalne.", correct: "" }
        ]
    },
    {
        question: "Mida võiks näidata bifurkatsiooni diagramm?",
        answers: [
            { text: "Funktsiooni püsipunkte sõltuvalt parameetrist.", correct: "" },
            { text: "Funktsiooni stabiilseid püsipunkte sõlutvalt parameetrist.", correct: true },
            { text: "Funktsiooni püsipunkte sõltuvalt funktsiooni muutujast.", correct: "" },
            { text: "Funktsiooni stabiilseid püsipunkte sõltuvalt muutujast.", correct: "" }
        ]
    },
    {
        question: "Miks püsipunktide arv kasvab?",
        answers: [
            { text: "Kuna kui seda funktsiooni itereerida, siis funktsioon muutub loogelisemaks.", correct: "true" },
            { text: "Kuna funktsiooni rx(1-x) itereerides kasvab võimalik arv lõikepunkte ning r kasvades reaaliseerub suurem arv võimalikest lõikepunktidest.", correct: true },
        ]
    },
    {
        question: "Mis on kompleks arv?",
        answers: [
            { text: "Need on nelja liikmega arvud mille puhul i² = j² = k² = ijk = −1.", correct: "" },
            { text: "vektorilaadne arv nii et kahe kompleks arvu korrutamisel suurused liidetakse, nurgad korrutatakse.", correct: "" },
            { text: "Kompleksarvud on algebraaliste arvude laiendus, mis teeb nii et iga cauchy jada piirväärtus on selles hulgas.", correct: "" },
            { text: "Arvud kujul a + i*b, kus i = sqrt(-1)", correct: "true" }
        ]
    },
    {
        question: "Kuidas nad töötavad",
        answers: [
            { text: "Korrutades kahte kompleksarvu korrutatakse suurused ja liidetakse nurgad. Kompleksarvu suurus on võrdne kompleksarvu ja kompleksarvu konjugaadi korrutise ruutjuurega.", correct: true },
            { text: "Korrutades kahte kompleksarvu suurused ja koosinus nende omavahelisest nurgast. Kompleksarvu suurus on võrdne kompleks arvu reaalosa ja imaginatuurosa ruutude summa ruutjuurega.", correct: "" },
            { text: "Korrutades kahte kompleksarvu korrutatakse suurused ja korrutise nurk on võrdne kahe teguri suurema nurgaga. Kompleksarvu suurus on võrdne kompleksarvu ja kompleksarvu konjugaadi korrutise ruutjuurega.", correct: "" },
            { text: "Korrutades kahte kompleksarvu suurused korrutatakse mod(n) kus n on kompleksarude numbrite summa ja nurgad liidetakse.", correct: "" }
        ]
    },
    {
        question: "Miks on funktsioonid rx(1-x) ja x^2+c sarnased?",
        answers: [
            { text: "Kuna mõlema suurim polinoomi muutja aste on 2.", correct: "" },
            { text: "Kuna mõlemal on 2 muutujat.", correct: "" },
            { text: "Kuna üks on teise lineaarne teisendus.", correct: true }
        ]
    },
    {
        question: "Mis on suurim väärtus, mis saab olla mandlebrot hulga elemendi suurus?",
        answers: [
            { text: "1", correct: "" },
            { text: "2", correct: true },
            { text: "0.5", correct: "" },
            { text: "4", correct: "" }
        ]
    },
    {
        question: "Mis on suurim puhtreaalarvuline väärtus mandlebrot hulgas?",
        answers: [
            { text: "0", correct: "" },
            { text: "0.25", correct: true },
            { text: "0.5", correct: "" },
            { text: "1", correct: "" }
        ]
    }
];

//siin on lisainfo võimalus. 
//esimene lahter on 1 kui on tegu pildiga ja 0 kui tekstiga
//teine lahter on vastavalt kas allikas või tekst
//kolmas on info kasti kaugus vasakust seinast
//neljas on kaugus põhjast
//viies on laius 
//kuues on pikkus
const Data = [
    [[0, "Selles viktoriinis on enamasti kõik vastused puudulikud, ebamäärased või lihtsalt valed, teie ülesanne on lugeda autori mõtteid ja valida vastus, mis oli autori arvates kõige õigem antud vastustest.", "0.5vw", "63vh", "26vw"],[0, "Mõnes mõttes see on nagu tavaline kool/test, lihtalt autor on rumalam/ebaprofessionaalsem kui õpetaja.", "0.5vw", "48vh", "26vw"]],
    [[1, "https://github.com/Kent-Clark-Valge/TU-stuff/blob/main/Screenshot%202025-11-04%20110135.png?raw=true", "0.5vw", "35vh", "24vw", "60vh"], [0, "Roheline graafik on funktsioon y=(1+x)/(2-x), sinine joon on y=x, kiire algväärtus on 3", "0.5vw", "24vh", "26vw"]],
    [[1,"https://github.com/Kent-Clark-Valge/TU-stuff/blob/main/Screenshot%202025-11-04%20114009.png?raw=true","0.5vw","27.5vh","24vw","60vh  "],[0, "Roheline graafik on funktsioon y=2x(1-x), sinine joon on y=x", "0.5vw", "16.5vh", "26vw"]],
    [[1, "https://www.vanderbilt.edu/AnS/psychology/cogsci/chaos/workshop/Fig2.9.GIF", "0.5vw", "60.2vh", "24vw", "24vh"], [1,"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJR2WOkupOk2kmTC8bSkz0HjjlO3UH4uyvNg&s","0.5vw", "31.5vh", "24vw", "24vh"],[0, "Funktsiooni rx(1-x) bifurkatsiooni diagramm vastavalt määramispiirkondades [0,4] ja [2.4,4]","0.5vw", "17.3vh", "26vw"]],
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