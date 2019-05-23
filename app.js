let user = document.getElementById("user-label");
user.innerHTML=name;
// defaultGiris.classList.add('user');
// defaultGiris.append(" : Welcome " + name);
let userScore = 0;
let computerScore = 0;
// First catch the dump - HTML variables that store dump elements  ! Span tag içerisinde tanımlı olduğu için bu const span ile isimlendirildi.
// Her seferinde elementlerin ID'leriyle bulup innerHTML üstünden değer atamayla uğraşmamak için onları bir HTML elemente dönüştürdük.
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
// Class'ı yakalarken querySelector kullandık - tag ile bakmamamak için.
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result>p");
const actionMessage_p=document.getElementById("action-message");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");
const smallUserWord = name.fontsize(3).sup().fontcolor('red');// user tanımlayınca burasını güncelle.
const smallCompWord = "bilgisayar".fontsize(3).sup().fontcolor('orange');

main();

function main() {
    rock_div.addEventListener('click', () => game("r"));
    paper_div.addEventListener('click', () => game("p"));
    scissors_div.addEventListener('click', () => game("s"));
}
function getRandomChoice() {
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function convertToWord(letter) {
    if (letter === "r") return "Taş";
    if (letter === "s") return "Makas";
    else return "Kağıt";
}

function game(userChoice) {
    const computerChoice = getRandomChoice();
    switch (userChoice + computerChoice) {
        case "pr":
        case "rs":
        case "sp":
            win(userChoice, computerChoice);
            break;
        case "ps":
        case "rp":
        case "sr":
            lose(userChoice, computerChoice);
            break;
        case "pp":
        case "rr":
        case "ss":
            draw(userChoice, computerChoice);
            break;
    }
};


function win(userChoice, computerChoice) {
    userScore++;
    update();
    // Es6 ile $ kullanımı geldi! 
    const userChoice_div = document.getElementById(userChoice);
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} ➡️ ${convertToWord(computerChoice)}${smallCompWord}`;
    actionMessage_p.innerHTML="Kazandın!!!🌊";
    // .classList DOM'la gelen ve bize o elemente ait bütün classları dizi olarak dönen metot. Add ile yeni metot ekledik. Green-glow class'ını verdik.
    userChoice_div.classList.add('green-glow');
    setTimeout(function () { userChoice_div.classList.remove('green-glow') }, 600);
};

function lose(userChoice, computerChoice) {
    computerScore++;
    const compChoice_div = document.getElementById(computerChoice);
    update();
    result_p.innerHTML = `${convertToWord(computerChoice)} ${smallCompWord} ⬅️ ${convertToWord(userChoice)} ${smallUserWord}`;
    actionMessage_p.innerHTML="Kaybettin !!!🤖";
    compChoice_div.classList.add('red-glow');
    setTimeout(function () { compChoice_div.classList.remove('red-glow') }, 600);
    
};
function draw(userChoice, computerChoice) {
    // userScore++;
    // computerScore++;
    const userChoice_div = document.getElementById(userChoice);
    result_p.innerHTML = `${convertToWord(computerChoice)} ${smallCompWord} 🔃 ${convertToWord(userChoice)} ${smallUserWord}`;
    actionMessage_p.innerHTML="Berabere !!!🤝";

    userChoice_div.classList.add('gray-glow');
    setTimeout(function () { userChoice_div.classList.remove('gray-glow') }, 600);
    // update();

};

function update() {
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
};


