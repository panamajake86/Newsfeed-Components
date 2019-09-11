/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

/* 

  Step 1: Write a function that will create a menu component as seen below:

  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>

  The function takes an array as its only argument.

  Step 2: Inside this function, iterate over the array creating a list item <li> element for each item in the array. 
  Add those items to the <ul>

  Step 3: Using a DOM selector, select the menu button (the element with a class of 'menu-button') currently on the DOM.

  Step 4: add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on the menu (your div with a 'menu' class).

  Step 5: return the menu component.

  Step 6: add the menu component to the DOM.
  
*/

function createMenu(schtuff) {
  const menuButton = document.querySelector('.menu-button');
  const main = document.createElement('div');
  const unord = document.createElement('ul');
  const item0 = document.createElement('li');
  const item1 = document.createElement('li');
  const item2 = document.createElement('li');
  const item3 = document.createElement('li');
  const item4 = document.createElement('li');
  const item5 = document.createElement('li');  

main.appendChild(unord);
unord.appendChild(item0);
unord.appendChild(item1);
unord.appendChild(item2);
unord.appendChild(item3);
unord.appendChild(item4);
unord.appendChild(item5);

item0.textContent = schtuff[0];
item1.textContent = schtuff[1];
item2.textContent = schtuff[2];
item3.textContent = schtuff[3];
item4.textContent = schtuff[4];
item5.textContent = schtuff[5];

main.classList.add('menu');
unord.classList.add('ul');
item0.classList.add('li');
item1.classList.add('li');
item2.classList.add('li');
item3.classList.add('li');
item4.classList.add('li');
item5.classList.add('li');

menuButton.addEventListener('click', e => {
  main.classList.toggle('menu--open');
  e.stopPropagation();
}, false)

return main;
};

const menu = document.querySelector('.header h1');
const head = document.querySelector('.header');

head.insertBefore(createMenu(menuItems), menu);
