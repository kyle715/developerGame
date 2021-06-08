// GLOBAL VARIABLES

const social = document.querySelector('.social')

const knowledge = document.querySelector('.knowledge')

const money = document.querySelector('.money')

const card = document.querySelector('.cardContext')

const buttonOne = document.getElementById('button1')

const buttonTwo = document.getElementById('button2')

const buttonAreaSelect = document.querySelector('.buttons')

const startButton = document.getElementById('startGameButton')

let cardNumber = 0

// OBJECTS

let moneyValue = {
    value: 50
}

let knowledgeValue = {
    value: 50
} 

let socialValue = {
    value: 50
}

// FUNCTIONS

// let randomCard = Math.floor(Math.random() * 4)



const updateSocial = (value) => {
    socialValue.value -= value
    social.innerHTML = `Social :${socialValue.value}/100`
}

const updateKnowledge = (value) => {
    knowledgeValue.value -= value
    knowledge.innerHTML = `Knowledge :${knowledgeValue.value}/100`
}

const updateMoney = (value) => {
    moneyValue.value -= value
    money.innerHTML = `Money :${moneyValue.value}/100`
}


//CARDS

const cards = [
    {
        context: 'You were planning on studying this weekend but you recived an invite on linkedIn to an event going on this weekend for local developers',
        button1Social: 20,
        button1Knowledge: 5,
        button1Money: -5,
        button2Social: -5,
        button2Knowledge: 20,
        button2Money: 5,
        button1Text: 'Go to the event!',
        button2Text: 'Best to study...',
    },
    {
        context: 'You are offered a small freelance project to build a program that helps a local company keep track of their customers',
        button1Social: 1,
        button1Knowledge: 10,
        button1Money: 30,
        button2Social: 1,
        button2Knowledge: 1,
        button2Money: 1,
        button1Text: 'Id be happy to take the job',
        button2Text: 'Sorry, im busy.',
    },
    {
        context: 'Your friends are joining at a local library to put together a study group, but you were planing on working on a freelance project',
        button1Social: 20,
        button1Knowledge: 20,
        button1Money: 0,
        button2Social: -5,
        button2Knowledge: 1,
        button2Money: 30,
        button1Text: 'Id love to join!',
        button2Text: '',
    },
    {
        context: "win card",
        button1Social: 50,
        button1Knowledge: 50,
        button1Money: 50,
        button2Social: -50,
        button2Knowledge: -50,
        button2Money: -50,
        button1Text: 'win',
        button2Text: 'lose',
    },
    {
        context:'You are ready to apply for a job, you send out your resume to your favorite local company and wish for the best',
        button1Social: 0,
        button1Knowledge: 0,
        button1Money: 0,
        button2Social: 0,
        button2Knowledge: 0,
        button2Money: 0,
        button1Text: 'I hope i get it...',
        button2Text: 'but what if i dont?',
    }
]

const startGame = () => {
    startGameButton.style.display ='none'
    buttonOne.setAttribute('class', 'buttonStyle')
    buttonTwo.setAttribute("class", 'buttonStyle')
    buttonAreaSelect.removeEventListener('click', startGame)
    buttonAreaSelect.addEventListener('click', displayCard)
    displayCard()
}

const displayCard = () => {
    card.innerHTML = `${cards[cardNumber].context}`
    buttonOne.innerText = `${cards[cardNumber].button1Text}`
    buttonTwo.innerText = `${cards[cardNumber].button2Text}`
    buttonAreaSelect.removeEventListener('click', displayCard)
    buttonAreaSelect.addEventListener('click',(e) => {
        playCards(e)
})
}

const playCards = (e) => {
    if(cardNumber + 1 === cards.length) {
        endGame()
    } else if(e.target.id == 'button1') {
        socialValue.value += cards[cardNumber].button1Social
        social.innerHTML = `Social: ${socialValue.value}/100`
        knowledgeValue.value += cards[cardNumber].button1Knowledge
        knowledge.innerHTML = `Knowledge: ${knowledgeValue.value}/100`
        moneyValue.value += cards[cardNumber].button1Money
        money.innerHTML = `Money: ${moneyValue.value}/100`
        cardNumber += 1
        card.innerHTML = `${cards[cardNumber].context}`
        buttonOne.innerText = `${cards[cardNumber].button1Text}`
        buttonTwo.innerText = `${cards[cardNumber].button2Text}`
        console.log(cards.length)
        console.log(cardNumber)
    } else if (e.target.id == 'button2') {
        socialValue.value += cards[cardNumber].button2Social
        social.innerHTML = `Social: ${socialValue.value}/100`
        knowledgeValue.value += cards[cardNumber].button2Knowledge
        knowledge.innerHTML = `Knowledge: ${knowledgeValue.value}/100`
        moneyValue.value += cards[cardNumber].button2Money
        money.innerHTML = `Money: ${moneyValue.value}/100`
        cardNumber += 1
        card.innerHTML = `${cards[cardNumber].context}`
        buttonOne.innerText = `${cards[cardNumber].button1Text}`
        buttonTwo.innerText = `${cards[cardNumber].button2Text}`
        console.log(cards.length)
        console.log(cardNumber)
        // 12345
    }
}



const endGame = () => {
    if(socialValue.value > 80 && knowledgeValue.value > 80 && moneyValue.value > 80) {
        card.innerHTML = 'you got the job!'
    } else {
        card.innerHTML = 'better luck next time...'
    }
}



//MISC


buttonAreaSelect.addEventListener('click', startGame)