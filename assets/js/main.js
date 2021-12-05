let randomArr = ['paper', 'rock', 'sissors']
let userPaper = document.getElementById('userPaper')
let userRock = document.getElementById('userRock')
let userSissors = document.getElementById('userSissors')
let inputUser = document.getElementById('inputUser')
let inputKi = document.getElementById('inputKi')
let inputZahl1 = document.getElementById('inputZahl1')
let inputZahl2 = document.getElementById('inputZahl2')
let round3 = document.getElementById('round3')
let round5 = document.getElementById('round5')
let round10 = document.getElementById('round10')
let round15 = document.getElementById('round15')
let runden = document.getElementById('runden')
let result = document.getElementById('result')
let endNone = document.getElementById('endNone')
let startNone = document.getElementById('startNone')
let dropMenu = document.getElementById('dropMenu')
let colorStart = document.getElementById('colorStart')
let win1 = 0
let win2 = 0
let counter = 0
let rounds = 0

//Rounds and output
let counting = () => {
    if (round3.checked) {
        rounds = 3
        runden.innerHTML = `${counter}/3`
    } else if (round5.checked) {
        rounds = 5
        runden.innerHTML = `${counter}/5`
    } else if (round10.checked) {
        rounds = 10
        runden.innerHTML = `${counter}/10`
    } else if (round15.checked) {
        rounds = 15
        runden.innerHTML = `${counter}/15`
    }
    if (win1 > win2) {
        endNone.innerHTML = `You are Win<br>${win1} : ${win2} <br> Press reset for new Game `
    } else if (win1 < win2) {
        endNone.innerHTML = `You Suck <br>${win1} : ${win2} <br> Press reset for new Game `
    } else {
        endNone.innerHTML = `Draw <br>${win1} : ${win2} <br> Press reset for new Game `
    }
}

//Event for Button paper
userPaper.addEventListener("click", () => {
    userPaper = 'paper'
    counter++
    let randomKi = Math.floor(Math.random() * randomArr.length)
    counting()
    //Round-Counter
    if (counter == rounds) {
        endNone.style.zIndex = '1'
    }
    if (userPaper + randomArr[randomKi] == 'paperpaper') {
        inputUser.innerHTML = '<i class="far fa-hand-paper" ></i>'
        inputKi.innerHTML = '<i class="far fa-hand-paper" ></i>'
    } else if (userPaper + randomArr[randomKi] == 'paperrock') {
        inputUser.innerHTML = '<i class="far fa-hand-paper" ></i>'
        inputKi.innerHTML = '<i class="far fa-hand-rock" ></i>'
        win1 += 1
        inputZahl1.innerHTML = win1
    } else if (userPaper + randomArr[randomKi] == 'papersissors') {
        inputUser.innerHTML = '<i class="far fa-hand-paper" ></i>'
        inputKi.innerHTML = '<i class="far fa-hand-scissors" ></i>'
        win2 += 1
        inputZahl2.innerHTML = win2
    }
})
//Event for Button rock
userRock.addEventListener("click", () => {
    userRock = 'rock'
    counter++
    let randomKi = Math.floor(Math.random() * randomArr.length)
    counting()
    //Round-Counter
    if (counter == rounds) {
        endNone.style.zIndex = '1'
    }
    if (userRock + randomArr[randomKi] == 'rockrock') {
        inputUser.innerHTML = '<i class="far fa-hand-rock" ></i>'
        inputKi.innerHTML = '<i class="far fa-hand-rock" ></i>'
    } else if (userRock + randomArr[randomKi] == 'rocksissors') {
        inputUser.innerHTML = '<i class="far fa-hand-rock" ></i>'
        inputKi.innerHTML = '<i class="far fa-hand-scissors" ></i>'
        win1 += 1
        inputZahl1.innerHTML = win1
    } else if (userRock + randomArr[randomKi] == 'rockpaper') {
        inputUser.innerHTML = '<i class="far fa-hand-rock" ></i>'
        inputKi.innerHTML = '<i class="far fa-hand-paper" ></i>'
        win2 += 1
        inputZahl2.innerHTML = win2
    }
})
//Event for Button sissors
userSissors.addEventListener("click", () => {
    userSissors = 'sissors';
    counter++
    let randomKi = Math.floor(Math.random() * randomArr.length);
    counting()
    //Round-Counter
    if (counter == rounds) {
        endNone.style.zIndex = '1'
    }
    if (userSissors + randomArr[randomKi] == 'sissorssissors') {
        inputUser.innerHTML = '<i class="far fa-hand-scissors" ></i>'
        inputKi.innerHTML = '<i class="far fa-hand-scissors" ></i>'
    } else if (userSissors + randomArr[randomKi] == 'sissorspaper') {
        inputUser.innerHTML = '<i class="far fa-hand-scissors" ></i>'
        inputKi.innerHTML = '<i class="far fa-hand-paper" ></i>'
        win1 += 1
        inputZahl1.innerHTML = win1
    } else if (userSissors + randomArr[randomKi] == 'sissorsrock') {
        inputUser.innerHTML = '<i class="far fa-hand-scissors" ></i>'
        inputKi.innerHTML = '<i class="far fa-hand-rock" ></i>'
        win2 += 1
        inputZahl2.innerHTML = win2
    }

})
// Menu open and close/Start-Game
let roundMenu = () => {
    dropMenu.style.opacity = "1"
}
let closeMenu = () => {
    dropMenu.style.display = 'none'
    startNone.style.display = 'none'
}
let startGame = () => {
    startNone.style.color = 'white'
    colorStart.style.color = '#333333'
}