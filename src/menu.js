export default (function () {
  const title = document.createElement('h1');
  title.innerText = 'Menu';

  const createPage = () => {
    const content = document.createElement('div');
    content.append(title);
    return content;
  };
  return { createPage };
}());
