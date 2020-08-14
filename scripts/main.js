const myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';

let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/firefox-icon.png') {
      myImage.setAttribute('src','images/firefox2.png');
    } else {
      myImage.setAttribute('src','images/firefox-icon.png');
    }
}


let myButton = document.querySelector('button');
//let myHeading = document.querySelector('h1'); comento porque ya existe arriba 

function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName) {
      setUserName();
    } else {
      localStorage.setItem('name', myName);
      myHeading.innerHTML = 'Mozilla is cool, ' + myName;
    }
  }

  if(!localStorage.getItem('name')) { //es decir , si no existe data el localStorage name
    setUserName();                      //llamo a la funcion que me pide el nombre
  } else {
    let storedName = localStorage.getItem('name');      //storedName toma el valor del nombre guardado en localstorage name
    myHeading.textContent = 'Mozilla is cool, ' + storedName; //lo muestro
  }

  myButton.onclick = function() {   //le agrego a mi botón la propiedad de que cuando le haga click llame a la funcion setUserName
    setUserName();          //el boton se llama myButton, està definido mas arriba.
  }