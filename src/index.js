import contact from './contact'
import menu from './menu'
(()=>{
  const contactpage = contact.createPage();
  const menupage = menu.createPage();
  const content = document.querySelector('#content');
  const tabsUl = document.createElement('ul');
  const tabsLiContact = document.createElement('li');
  const tabsLiMenu = document.createElement('li');

  //Styling
  tabsUl.classList="tabs-ul"

  tabsUl.append(tabsLiContact, tabsLiMenu)

  console.log(menupage);
  content.append(tabsUl)
})()