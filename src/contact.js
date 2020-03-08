import Page from "./page";

function contact() {
  const header = document.createElement('h1');
  const body = document.createElement('ul');
  body.innerHTML = `
  <li>Monday - Thursday : 8am 10pm</li>
  <li>Friday : 8am - 11pm</li>
  <li>Weekends : 8am 1am</li>`;
  header.innerText = 'Contact us today.';


  const page = new Page(header,body)
  return page.createPage();
}

export default contact;