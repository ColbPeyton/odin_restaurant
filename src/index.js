import home from './home';
import about from './about';
import menu from './menu';
import utility from './utility';

// DOM elements
const content = document.querySelector('#content');
const tabHome = document.querySelector('.tab-home');
const tabAbout = document.querySelector('.tab-about');
const tabMenu = document.querySelector('.tab-menu');
// Module Elements
const homeContent = home.appendElementsForDisplay();
const aboutContent = about.appendElementsForDisplay();
const menuContent = menu.appendElementsForDisplay();


// Render home on inital load
utility.appendToContainer(content, homeContent);

// events
tabHome.addEventListener('click', ()=>{
    utility.removeContents(content);
    utility.appendToContainer(content, homeContent);
    utility.updateActiveClass(tabHome, [tabAbout, tabMenu])
})
tabAbout.addEventListener('click', ()=>{
    utility.removeContents(content);
    utility.appendToContainer(content, aboutContent);
    utility.updateActiveClass(tabAbout, [tabHome, tabMenu])
})
tabMenu.addEventListener('click', ()=>{
    utility.removeContents(content);
    utility.appendToContainer(content, menuContent);
    utility.updateActiveClass(tabMenu, [tabAbout, tabHome])
})



 
