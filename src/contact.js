export default (function () {
  const title = document.createElement('h1');
  title.innerText = 'Contact us today.';

  const createPage = () => {
    const content = document.createElement('div');
    content.append(title);
    return content;
  };
  return { createPage };
}());
