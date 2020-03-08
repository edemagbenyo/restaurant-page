import Page from './page';
import flower from './images/flower.jpeg';
import banana from './images/banana.jpeg';
import milk from './images/milk.jpeg';
import potatoes from './images/potatoes.jpeg';
import crispy from './images/crispy.jpeg';
import salad from './images/salad.jpeg';

function menu() {
  const title = document.createElement('h1');
  const menuFoodUl = document.createElement('ul');
  menuFoodUl.innerHTML = `
  <li data-img="flower">Wild Flower Honey Butter Toast - $15</li>
  <li data-img="banana">Warm Banana Bread - $12</li>
  <li data-img="milk">Sheep’s Milk Ricotta - $9</li>
  <li data-img="potatoes">Crispy Fingerling Potatoes - $11</li>
  <li data-img="crispy">Crispy Cauliflower - $19</li>
  <li data-img="salad">Salad of Organic Spring Greens - $10</li>
  `;
  title.innerText = 'Menu';

  // Add class
  menuFoodUl.classList = 'foods-ul';

  const lis = menuFoodUl.getElementsByTagName('li');

  const menuList = Array.from(lis);
  menuList.forEach(food => {
    const image = document.createElement('img');
    // console.log();
    switch (food.getAttribute('data-img')) {
      case 'flower':
        image.src = flower;
        break;
      case 'banana':
        image.src = banana;
        break;
      case 'milk':
        image.src = milk;
        break;
      case 'potatoes':
        image.src = potatoes;
        break;
      case 'crispy':
        image.src = crispy;
        break;
      case 'salad':
        image.src = salad;
        break;

      default:
        break;
    }

    food.append(image);
  });
  const page = new Page(title, menuFoodUl);
  return page.createPage();
}

export default menu;