var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/prague-the-capital.png') {
        myImage.setAttribute ('src','images/test-pic.jpg');
    } else {
        myImage.setAttribute ('src','images/prague-the-capital.png');
    }
}
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');
function setUserName() {
    var myName = prompt('Пожалуйста введите свое имя.');
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Прага как раз для тебя, ' + myName;
}
if(!localStorage.getItem('name')) {
    setUserName();
} else {
    var storedName = localStorage.getItem('name');
    myHeading.innerHTML = 'Прага как раз для тебя, ' + storedName;
}
myButton.onclick = function() {
    setUserName();
}