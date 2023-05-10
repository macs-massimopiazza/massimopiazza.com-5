const playground = document.getElementById('playground');
const player = document.getElementById('player');
const obstacle = document.getElementById('obstacle');
const playBtn = document.getElementById('play-btn');
const closeBtn = document.getElementById('close-btn');
const btnsWrapper = document.querySelector('#playground .game-buttons')
const scoreCounter = document.getElementById('score');
const gameWrapper = document.getElementById('game-wrapper');
const openGameBtn = document.getElementById('open-game-btn');
const openGameCta = document.getElementById('open-game-cta');
let gameRuntime;
let score = 0;

openGameBtn.addEventListener('click',() => {
    gameWrapper.classList.remove('hide');
})
openGameCta.addEventListener('click',() => {
    gameWrapper.classList.remove('hide');
})

closeBtn.addEventListener('click', () => {
    gameWrapper.classList.add('hide');
});

playBtn.addEventListener('click', (e) => { startGame(e) });

function startGame(e) {
    e.stopPropagation();
    score = 0;
    playground.classList.remove('blurred');
    btnsWrapper.classList.add('hide');
    document.addEventListener('keydown', (e) => { 
        if (!['Space', 'KeyW', 'ArrowUp'].includes(e.code)) return;
        jump();
    });
    playground.addEventListener('click', jump);
    obstacleAdvance();
}

function jump() {
    player.classList.add('jump');
    player.addEventListener('animationend', () => {
        player.classList.remove('jump');
    })
}

function obstacleAdvance() {
    obstacle.classList.add('advancing');
    gameRuntime = setInterval(() => {
        if(collide()) endGame();
        score = score + 6.9
        scoreCounter.innerHTML = parseInt(score);
    }, 50);
}

function collide() {
    const obsRight = parseInt(getStyle(obstacle, 'right'));
    const plrBottom = parseInt(getStyle(player, 'bottom'));
    const playgroundWidth = parseInt(getStyle(playground, 'width'));
    const hitboxSX = playgroundWidth - 80;
    const hitboxDX = hitboxSX - 60;
    return obsRight >= hitboxDX && obsRight <= hitboxSX && plrBottom <= 40
}

function endGame() {
    obstacle.classList.remove('advancing');
    clearInterval(gameRuntime);
    playground.classList.add('blurred');
    btnsWrapper.classList.remove('hide');
}

function getStyle(el,styleProp)
{
    let x = el;
    let y;
    if (x.currentStyle) y = x.currentStyle[styleProp];
    else if (window.getComputedStyle) y = document.defaultView.getComputedStyle(x,null).getPropertyValue(styleProp);
    return y;
}
