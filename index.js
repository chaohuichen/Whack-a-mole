let score = 0;
const gameArea = document.getElementById('whack-a-mole');
const scoreDom = document.getElementById('score');
let holes = document.getElementsByClassName('hole');

setInterval(() => {
  const randomIdx = Math.floor(Math.random() * holes.length);
  holes[randomIdx].classList.toggle('mole');
}, 300);

gameArea.addEventListener('click', function (clickEvent) {
  if (clickEvent.target.matches('.mole')) {
    clickEvent.target.classList.remove('mole');
    score++;
    scoreDom.innerText = score;
  }
});
