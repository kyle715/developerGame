// GLOBAL VARIABLES

const social = document.querySelector('.social')

const knowledge = document.querySelector('.knowledge')

const money = document.querySelector('.money')

const card = document.querySelector('.cardContext')

const buttonOne = document.getElementById('button1')

const buttonTwo = document.getElementById('button2')

const buttonAreaSelect = document.querySelector('.buttons')

const startButton = document.getElementById('startGameButton')

const socialProgress = document.getElementById('social')

const knowledgeProgress = document.getElementById('knowledge')

const moneyProgress = document.getElementById('money')

const displayCardArea = document.querySelector('.card')

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
        button2Text: 'I need the money.',
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
    buttonOne.innerText = `${cards[cardNumber].button1Text}`
    buttonTwo.innerText = `${cards[cardNumber].button2Text}`
    buttonOne.addEventListener('click',(e) => {
        playCards(e)
    })
    buttonTwo.addEventListener('click',(e) => {
    playCards(e)
    })
}

const playCards = (e) => {
    if(cardNumber + 1 === cards.length) {
        endGame()
    } else if(e.target.id == 'button1') {
        socialValue.value += cards[cardNumber].button1Social
        socialProgress.value = socialValue.value
        knowledgeValue.value += cards[cardNumber].button1Knowledge
        knowledgeProgress.value = knowledgeValue.value
        moneyValue.value += cards[cardNumber].button1Money
        moneyProgress.value = moneyValue.value
        cardNumber += 1
        buttonOne.innerText = `${cards[cardNumber].button1Text}`
        buttonTwo.innerText = `${cards[cardNumber].button2Text}`
        console.log(cards.length)
        console.log(cardNumber)
    } else if (e.target.id == 'button2') {
        socialValue.value += cards[cardNumber].button2Social
        socialProgress.value = socialValue.value
        knowledgeValue.value += cards[cardNumber].button2Knowledge
        knowledgeProgress.value = knowledgeValue.value
        moneyValue.value += cards[cardNumber].button2Money
        moneyProgress.value = moneyValue.value
        cardNumber += 1
        buttonOne.innerText = `${cards[cardNumber].button1Text}`
        buttonTwo.innerText = `${cards[cardNumber].button2Text}`
        console.log(cards.length)
        console.log(cardNumber)
    }
}



const endGame = () => {
    if(socialValue.value > 80 && knowledgeValue.value > 80 && moneyValue.value > 80) {
        card.innerHTML = 'you got the job!'
    } else {
        card.innerHTML = 'better luck next time...'
    }
}

const createCards = () => {
    for (let i = 0; i < cards.length; i++) {
        let createCards = document.createElement('div')
        createCards.setAttribute('class', 'game--card')
        let newh3 = document.createElement('h3')
        newh3.innerHTML = 'card title'
        createCards.appendChild(newh3)
        let newP = document.createElement('p')
        newP.innerHTML = `${cards[i].context}`
        createCards.appendChild(newP)
    
        displayCardArea.appendChild(createCards)
        
    }
}
createCards()


const initCards = (card, index) => {
    var newCards = document.querySelectorAll('.game--card:not(.removed)');
  
    newCards.forEach(function (card, index) {
      card.style.zIndex = cards.length - index;
      card.style.transform = 'scale(' + (20 - index) / 20 + ') translateY(-' + 30 * index + 'px)';
      card.style.opacity = (10 - index) / 10;
    });
    
    displayCardArea.classList.add('loaded');
    // displayCardArea.setAttribute('class', 'loaded')
  }
  
  initCards();

  function createButtonListener(love) {
    return function (event) {
      var allCards = document.querySelectorAll('.game--card:not(.removed)');
      var moveOutWidth = document.body.clientWidth * 1.5;
      console.log(allCards)
  
      if (!cards.length) return false;
  
      var card = allCards[0];
  
      card.classList.add('removed');
  
      if (love) {
        card.style.transform = 'translate(' + moveOutWidth + 'px, -100px) rotate(-30deg)';
        console.log('hi')
      } else {
        card.style.transform = 'translate(-' + moveOutWidth + 'px, -100px) rotate(30deg)';
        console.log('ohai')
      }
  
      initCards();
  
      event.preventDefault();
    };
  }
  
  
  var noListener = createButtonListener(false);
  var yesListener = createButtonListener(true);

  buttonOne.addEventListener('click', noListener);
  buttonTwo.addEventListener('click', yesListener);


//MISC

const startButtonGame = document.getElementById('startGameButton')

startButtonGame.addEventListener('click', startGame)