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

const game = document.getElementById('game')

const startArea = document.querySelector('.startButtonArea')


let cardNumber = 0

// OBJECTS

let moneyValue = {
    value: 20
}

let knowledgeValue = {
    value: 20
} 

let socialValue = {
    value: 20
}


//CARDS

const cards = [
    {
        context: 'You were planning on studying this weekend but you recived an invite on linkedIn to an event going on this weekend for local developers',
        button1Social: 20,
        button1Knowledge: 5,
        button1Money: -5,
        button2Social: -5,
        button2Knowledge: 10,
        button2Money: 5,
        cardIMG: 'https://previews.123rf.com/images/saphatthachat/saphatthachat1803/saphatthachat180300162/98031934-vector-pixel-art-book-open-isolated-cartoon.jpg',
        button1Text: 'Go to the event!',
        button2Text: 'Best to study...',
    },
    {
        context: 'You are offered a small freelance project to build a program that helps a local company keep track of their customers',
        button1Social: 1,
        button1Knowledge: 10,
        button1Money: 20,
        button2Social: 1,
        button2Knowledge: 1,
        button2Money: 1,
        cardIMG: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTl3xXBxcRYm0FdEenBYLT3PM-DnLx0Ec2zQ&usqp=CAU',
        button1Text: 'Id be happy to take the job',
        button2Text: 'Sorry, im busy.',
    },
    {
        context: 'Your friends are joining at a local library to put together a study group, but you were planing on working on a freelance project',
        button1Social: 15,
        button1Knowledge: 15,
        button1Money: 0,
        button2Social: -5,
        button2Knowledge: 10,
        button2Money: 15,
        cardIMG: 'https://previews.123rf.com/images/saphatthachat/saphatthachat1803/saphatthachat180300162/98031934-vector-pixel-art-book-open-isolated-cartoon.jpg',
        button1Text: 'Id love to join!',
        button2Text: 'I need the money.',
    },
    {
        context: "You are interested in taking a Udemy course but the cost of it is a bit high. This will certainly help you out in the long run... but is it worth it",
        button1Social: 0,
        button1Knowledge: 15,
        button1Money: -20,
        button2Social: 0,
        button2Knowledge: 0,
        button2Money: 5,
        cardIMG: 'https://previews.123rf.com/images/saphatthachat/saphatthachat1803/saphatthachat180300162/98031934-vector-pixel-art-book-open-isolated-cartoon.jpg',
        button1Text: 'Lets take it',
        button2Text: "I'll pass",
    },
    {
        context: "Your Aunt hears about you trying to become a software engineer, she asks that instead of working on a project this weekend you come by to help her set up her printer",
        button1Social: 10,
        button1Knowledge: 0,
        button1Money: 10,
        button2Social: 0,
        button2Knowledge: 10,
        button2Money: 0,
        cardIMG: 'https://previews.123rf.com/images/saphatthachat/saphatthachat1803/saphatthachat180300162/98031934-vector-pixel-art-book-open-isolated-cartoon.jpg',
        button1Text: 'Sure, ill help',
        button2Text: 'Sorry, cars in the shop',
    },
    {
        context: "Bills are due",
        button1Social: 0,
        button1Knowledge: 0,
        button1Money: -15,
        button2Social: 0,
        button2Knowledge: 0,
        button2Money: -15,
        cardIMG: 'https://previews.123rf.com/images/saphatthachat/saphatthachat1803/saphatthachat180300162/98031934-vector-pixel-art-book-open-isolated-cartoon.jpg',
        button1Text: 'PAY UP',
        button2Text: 'YOU HEARD HIM',
    },
    {
        context: "Someone from a local brewery has reached out to you on LinkedIn to play a part in writing the program to sell their new line of beer 'Penquin Power Ale' online",
        button1Social: 5,
        button1Knowledge: 15,
        button1Money: 30,
        button2Social: 5,
        button2Knowledge: 15,
        button2Money: 30,
        cardIMG: 'https://previews.123rf.com/images/saphatthachat/saphatthachat1803/saphatthachat180300162/98031934-vector-pixel-art-book-open-isolated-cartoon.jpg',
        button1Text: 'Id be happy to work with you',
        button2Text: 'Do i get some free samples?',
    },
    {
        context: "Pop Quiz: What does DOM stand for",
        button1Social: 0,
        button1Knowledge: -20,
        button1Money: 0,
        button2Social: 0,
        button2Knowledge: 20,
        button2Money: 0,
        cardIMG: 'https://previews.123rf.com/images/saphatthachat/saphatthachat1803/saphatthachat180300162/98031934-vector-pixel-art-book-open-isolated-cartoon.jpg',
        button1Text: 'Document Orientation Model',
        button2Text: 'Document Object Model',
    },
    {
        context: "While working on the program for the local brewery you get a phonecall from Mom and she rants on about her day for what seems like forever... now what was the name of that new beer again?",
        button1Social: 20,
        button1Knowledge: 10,
        button1Money: 0,
        button2Social: -20,
        button2Knowledge: -10,
        button2Money: 0,
        cardIMG: 'https://previews.123rf.com/images/saphatthachat/saphatthachat1803/saphatthachat180300162/98031934-vector-pixel-art-book-open-isolated-cartoon.jpg',
        button1Text: 'Penquin Power Ale',
        button2Text: 'Penquins Pickup Drink',
    },
    {
        context: "A Codecademy course is on sale right now",
        button1Social: 0,
        button1Knowledge: 20,
        button1Money: -10,
        button2Social: 0,
        button2Knowledge: 0,
        button2Money: 20,
        cardIMG: 'https://previews.123rf.com/images/saphatthachat/saphatthachat1803/saphatthachat180300162/98031934-vector-pixel-art-book-open-isolated-cartoon.jpg',
        button1Text: 'Lets take it',
        button2Text: 'I should be saving',
    },
    {
        context: "A local event is going on this weekend for a popular new programing language",
        button1Social: 15,
        button1Knowledge: 10,
        button1Money: -5,
        button2Social: -5,
        button2Knowledge: -5,
        button2Money: 10,
        cardIMG: 'https://previews.123rf.com/images/saphatthachat/saphatthachat1803/saphatthachat180300162/98031934-vector-pixel-art-book-open-isolated-cartoon.jpg',
        button1Text: 'Sounds exciting',
        button2Text: 'I need to work',
    },
    {
        context: "Pop Quiz: which method removes the last element from an array and returns it?",
        button1Social: 0,
        button1Knowledge: 20,
        button1Money: 0,
        button2Social: 0,
        button2Knowledge: -20,
        button2Money: 0,
        cardIMG: 'https://previews.123rf.com/images/saphatthachat/saphatthachat1803/saphatthachat180300162/98031934-vector-pixel-art-book-open-isolated-cartoon.jpg',
        button1Text: 'pop()',
        button2Text: 'shift()',
    },
    {
        context: "While getting your morning coffe you start up a conversation with someone else in the Software Field",
        button1Social: 15,
        button1Knowledge: 5,
        button1Money: 0,
        button2Social: -15,
        button2Knowledge: -5,
        button2Money: 0,
        cardIMG: 'https://previews.123rf.com/images/saphatthachat/saphatthachat1803/saphatthachat180300162/98031934-vector-pixel-art-book-open-isolated-cartoon.jpg',
        button1Text: 'Talk about your latest project',
        button2Text: 'Talk about your pet',
    },
    // {
    //     context: "win card",
    //     button1Social: 50,
    //     button1Knowledge: 50,
    //     button1Money: 50,
    //     button2Social: -50,
    //     button2Knowledge: -50,
    //     button2Money: -50,
    //     cardIMG: 'https://previews.123rf.com/images/saphatthachat/saphatthachat1803/saphatthachat180300162/98031934-vector-pixel-art-book-open-isolated-cartoon.jpg',
    //     button1Text: 'win',
    //     button2Text: 'lose',
    // },
    {
        context:'You are ready to apply for a job, you send out your resume to your favorite local company and wish for the best',
        button1Social: 0,
        button1Knowledge: 0,
        button1Money: 0,
        button2Social: 0,
        button2Knowledge: 0,
        button2Money: 0,
        cardIMG: 'https://previews.123rf.com/images/saphatthachat/saphatthachat1803/saphatthachat180300162/98031934-vector-pixel-art-book-open-isolated-cartoon.jpg',
        button1Text: 'I hope i get it...',
        button2Text: 'but what if i dont?',
    }
]



// FUNCTIONS


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

const createCards = () => {
    for (let i = 0; i < cards.length; i++) {
        let createCards = document.createElement('div')
        createCards.setAttribute('class', 'game--card')
        let newImg = document.createElement('img')
        newImg.setAttribute('src', `${cards[i].cardIMG}`)
        createCards.appendChild(newImg)
        let newP = document.createElement('p')
        newP.setAttribute('class', 'pContext')
        newP.innerHTML = `${cards[i].context}`
        createCards.appendChild(newP)
    
        displayCardArea.appendChild(createCards)
        
    }
}


const initCards = (card, index) => {
    var newCards = document.querySelectorAll('.game--card:not(.removed)');
  
    newCards.forEach(function (card, index) {
      card.style.zIndex = cards.length - index;
      card.style.transform = 'scale(' + (20 - index) / 20 + ') translateY(-' + 30 * index + 'px)';
      card.style.opacity = (10 - index) / 10;
    });
    
    displayCardArea.classList.add('loaded');
  }
  

  function createButtonListener(bool) {
    return function (event) {
      var allCards = document.querySelectorAll('.game--card:not(.removed)');
      var moveOutWidth = document.body.clientWidth * 1.5;
      console.log(allCards)
  
      if (!cards.length) return false;
  
      var card = allCards[0];
  
      card.classList.add('removed');
  
      if (bool) {
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

  const startGame = () => {
    startArea.style.display ='none'
    createCards()
    initCards()
    buttonOne.setAttribute('class', 'nes-btn is-warning')
    buttonTwo.setAttribute("class", 'nes-btn is-warning')
    game.setAttribute('class', 'game')
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
    if(socialValue.value >= 75 && knowledgeValue.value >= 75 && moneyValue.value >= 75) {
        document.body.setAttribute('class', 'gameEndWin')
        document.body.innerHTML = '<div class="gameEnd nes-container is-rounded is-dark"><p>You got the job!<br><br><a onClick="window.location.reload()">Play again?</a></p></div>'
    } else {
        document.body.setAttribute('class', 'gameEndLose')
        document.body.innerHTML = '<div class="gameEnd nes-container is-rounded is-dark"><p>Better luck next time...<br><br><a onClick="window.location.reload()">Try again?</a></p></div>'
    }
}



    
  
  //MISC
const noListener = createButtonListener(false);
const yesListener = createButtonListener(true);

buttonOne.addEventListener('click', noListener);
buttonTwo.addEventListener('click', yesListener);
  
const startButtonGame = document.getElementById('startGameButton')

startButtonGame.addEventListener('click', startGame)