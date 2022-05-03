/* 
  See Smashing Magazine Tutorial:
  https://www.smashingmagazine.com/2021/11/dyslexia-friendly-mode-website/
*/

const clickBtn = () => {
  document.querySelector('.container').classList.toggle("dyslexia-mode");
}

document.querySelector('#dyslexia-toggle').addEventListener('click', clickBtn);