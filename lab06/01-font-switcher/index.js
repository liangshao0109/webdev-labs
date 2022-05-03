var contentFontSize = 1.4;
var headerFontSize = 1;

const makeBigger = () => {
   contentFontSize += 0.2;
   headerFontSize += 0.1;
   document.querySelector('.content').style.fontSize = contentFontSize + "em";
   document.querySelector('header').style.fontSize = headerFontSize + "em";   
};

const makeSmaller = () => {
   contentFontSize -= 0.2;
   headerFontSize -= 0.1;
   document.querySelector('.content').style.fontSize = contentFontSize + "em";
   document.querySelector('header').style.fontSize = headerFontSize + "em";
};

document.querySelector('#a1').addEventListener('click', makeBigger);
document.querySelector('#a2').addEventListener('click', makeSmaller);

