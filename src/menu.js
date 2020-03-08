import Page from "./page";
import flower from "./images/flower.jpeg"
import banana from "./images/banana.jpeg"
function menu() {
  const title = document.createElement('h1');
  const menuFoodUl = document.createElement('ul');
  menuFoodUl.innerHTML = `
  <li data-img="flower">Wild Flower Honey Butter Toast - $15</li>
  <li data-img="bread">Warm Banana Bread - $15</li>
  <li data-img="milk">Sheep’s Milk Ricotta - $15</li>
  <li data-img="potatoes">Crispy Fingerling Potatoes - $15</li>
  <li data="crispy">Crispy Cauliflower - $15</li>
  <li data-img="salad">Salad of Organic Spring Greens - $15</li>
  `;
  title.innerText = 'Menu';

  const lis= menuFoodUl.getElementsByTagName('li');

const menuList = Array.from(lis);
menuList.forEach(food=>{
  const image = document.createElement('img');
  // console.log();
  switch (food.getAttribute('data-img')) {
    case 'flower':
      image.src=flower;
      break;
    case 'banana':
      image.src=banana;
      break;
  
    default:
      break;
  }
  
  food.append(image)
})
const page = new Page(title,menuFoodUl);
  return page.createPage();
}

export default menu;