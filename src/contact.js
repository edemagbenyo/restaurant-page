import Page from './page';

function contact() {
  const header = document.createElement('h1');
  const hours = document.createElement('ul');
  hours.innerHTML = `
  <li>Working hours</li>
  <li>Monday - Thursday : 8am 10pm</li>
  <li>Friday : 8am - 11pm</li>
  <li>Weekends : 8am 1am</li>`;
  const info = document.createElement('ul');
  info.innerHTML = `
  <li>Contact information</li>
  <li>Tel - +233 555 065 430</li>
  <li>Email :edem.agbenyo@gmail.com</li>
  <li>Address : Lemon st. Accra, Ghana</li>`;
  header.innerText = 'Contact us today.';

  // Styling
  hours.classList = 'hours-ul';
  info.classList = 'info-ul';

  const body = document.createElement('div');
  body.append(hours, info);
  const page = new Page(header, body);
  return page.createPage();
}

export default contact;