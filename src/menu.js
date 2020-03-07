export default (function () {
  const title = document.createElement('h1');
  const menuFoodUl = document.createElement('ul');
  menuFoodUl.innerHTML = `
  <li>Wild Flower Honey Butter Toast - $15</li>
  <li>Warm Banana Bread - $15</li>
  <li>Sheep’s Milk Ricotta - $15</li>
  <li>Crispy Fingerling Potatoes - $15</li>
  <li>Crispy Cauliflower - $15</li>
  <li>Salad of Organic Spring Greens - $15</li>
  `
  title.innerText = 'Menu';

  const createPage = () => {
    const content = document.createElement('div');
    content.classList = 'tab-content'
    content.append(title,menuFoodUl);
    return content;
  };
  return { createPage };
}());
