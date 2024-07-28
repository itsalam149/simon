let gameSeq = [];
let userSeq = [];

let highScore = 0;

let started = false;
let level = 0;

let btns = ["green", "purple", "blue", "yellow"];

let h2 = document.querySelector("h2");

let high = document.querySelector("#highScore");

high.innerText = `High Score - ${highScore}`;

document.addEventListener("keypress", function () {
    if (started == false) {
        console.log("game started!");
        started = true;
        levelUp();
    }
}); 

document.addEventListener("click", function () {
    if (started == false) {
        console.log("game started!");
        started = true;
        levelUp();
    }
});

function gameFlash(btn) {
    btn.classList.add("flash");

    setTimeout(function () {
        btn.classList.remove("flash")
    }, 250);
};

function userFlash(btn) {
    btn.classList.add("userflash");

    setTimeout(function () {
        btn.classList.remove("userflash")
    }, 250);
};

function levelUp() {
    userSeq = [];
    level++;
    h2.innerText = `level ${level}`;

    // random btn choose
    let ranIndx = Math.floor(Math.random() * 4);
    let ranColor = btns[ranIndx];
    let ranBtn = document.querySelector(`.${ranColor}`);
    gameSeq.push(ranColor);
    gameFlash(ranBtn);
};

function checkAns(idx) {
    // console.log("current level : ", level);

    if (userSeq[idx] === gameSeq[idx]) {
        if (userSeq.length == gameSeq.length) {
            setTimeout(levelUp, 1000);
        }
    }
    else {
        highScore = level;
        h2.innerHTML = `Game over! Your Score is <b>${level}</b> </br>Press any key to start.`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function () {
            document.querySelector("body").style.backgroundColor = "white";
        }, 250);
        reset();
    }
}

function btnPress() {
    let btn = this;
    userFlash(btn);

    userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    checkAns(userSeq.length - 1);
};

let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns) {
    btn.addEventListener("click", btnPress);
};

function reset() {
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
};