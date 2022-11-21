const myImage = document.querySelector('img');
const originalImgPath = "images/farm-rpg-logo.jpg"
const newImgPath = 'images/melvor-logo.jpg'

myImage.onclick = () => {
    const mySrc = myImage.getAttribute('src');
    if (mySrc === originalImgPath) {
        myImage.setAttribute('src', newImgPath);
    } else {
        myImage.setAttribute('src', originalImgPath);
    }
};

let myButton = document.querySelector('button')
let myHeading = document.querySelector('h1')

function setUserName() {
    const myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = `Mozilla is cool, ${myName}`;
}

if (!localStorage.getItem('name')) {
    setUserName();
} else {
    const storedName = localStorage.getItem('name');
    myHeading.textContent = `Mozilla is cool, ${myName}`;
}

myButton.onclick = () => {
    setUserName();
};