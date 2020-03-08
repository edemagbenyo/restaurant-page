function contact() {
  const title = document.createElement('h1');
  const workingsUl = document.createElement('ul');
  workingsUl.innerHTML = `
  <li>Monday - Thursday : 8am 10pm</li>
  <li>Friday : 8am - 11pm</li>
  <li>Weekends : 8am 1am</li>`;
  title.innerText = 'Contact us today.';

  const createPage = () => {
    const content = document.createElement('div');
    content.classList = 'tab-content';
    content.append(title, workingsUl);
    return content;
  };
  return { createPage };
}

export default contact;