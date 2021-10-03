/* JAVASCRIPT CODE FOR FRONT END WEB DEVELOPPING */


/* CHANGES HEADING TO HELLO WORLD, IT WAS DIARIO DE UN PEDOFILIO

In this section, you will learn how to use JavaScript and DOM API 
features to alternate the display of one of two images. This change
 will happen as a user clicks the displayed image..... */
 
 let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'zombie-1.jpg/image') {
      myImage.setAttribute('src','images/zombie-1.jpg');
    } else {
      myImage.setAttribute('src','images/zombie-1.jpg');
    }
}






function setUserName() {
	
  let myName = prompt('Please enter your name.');
  
  if(!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Mozilla is cool, ' + myName;
  }
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'Mozilla is cool, ' + storedName;
}



let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');