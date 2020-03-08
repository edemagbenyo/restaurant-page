import contact from './contact';
import menu from './menu';
import './styles/main.css';

(() => {
  const contactpage = contact();
  const menupage = menu();
  const content = document.querySelector('#content');
  const tabsUl = document.createElement('ul');
  const tabsLiContact = document.createElement('li');
  const tabsLiMenu = document.createElement('li');
  const title = document.createElement('h1');

  // Add text
  tabsLiContact.innerText = 'Our contact';
  tabsLiContact.setAttribute('id', 'contact-page');
  tabsLiMenu.innerText = 'Our Menu';
  tabsLiMenu.setAttribute('id', 'menu-page');
  title.innerText = 'Welcome to restaurant El Chapo';

  // Styling
  tabsUl.classList = 'tabs-ul';
  tabsLiContact.classList = 'tabs-li';
  tabsLiMenu.classList = 'tabs-li';
  tabsUl.append(tabsLiContact, tabsLiMenu);
  // All tab list to the page
  content.append(title, tabsUl);

  // show first li on the tabs
  content.append(contactpage);
  tabsLiContact.style.backgroundColor = 'white';


  tabsUl.addEventListener('click', (e) => {
    if (e.target.getAttribute('id') === 'contact-page') {
      content.append(contactpage);
      tabsLiContact.style.backgroundColor = 'white';

      tabsLiMenu.style.removeProperty('background-color');
      menupage.remove();
    } else if (e.target.getAttribute('id') === 'menu-page') {
      contactpage.remove();
      content.append(menupage);
      tabsLiMenu.style.backgroundColor = 'white';
      tabsLiContact.style.removeProperty('background-color');
    }
  });
})();
