// import contact from './contact';
// import menu from './menu';

(() => {
  // const contactpage = contact.createPage();
  // const menupage = menu.createPage();
  const content = document.querySelector('#content');
  const tabsUl = document.createElement('ul');
  const tabsLiContact = document.createElement('li');
  const tabsLiMenu = document.createElement('li');

  // Add text
  tabsLiContact.innerText = 'Our contact';
  tabsLiMenu.innerText = 'Our Menu';

  // Styling
  tabsUl.classList = 'tabs-ul';
  document.getElementsByTagName('li');

  tabsUl.append(tabsLiContact, tabsLiMenu);

  content.append(tabsUl);
})();
