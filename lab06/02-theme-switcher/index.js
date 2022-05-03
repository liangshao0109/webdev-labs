/*
    Hints: 
    1. Attach click event handlers to all four of the 
       buttons (#default, #ocean, #desert, and #high-contrast).
    2. Modify the className property of the body tag 
       based on the button that was clicked.
*/

const clickDefault = () => {
   document.querySelector('body').className = 'defalut';
}

const clickOcean = () => {
   document.querySelector('body').className = 'ocean';
}

const clickDesert = () => {
   document.querySelector('body').className = 'desert';
}

const clickHighContrast = () => {
   document.querySelector('body').className = 'high-contrast';
}

document.querySelector('#default').addEventListener('click', clickDefault);
document.querySelector('#ocean').addEventListener('click', clickOcean);
document.querySelector('#desert').addEventListener('click', clickDesert);
document.querySelector('#high-contrast').addEventListener('click', clickHighContrast);