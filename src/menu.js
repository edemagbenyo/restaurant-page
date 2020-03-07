export default (function(){
  let title = document.createElement('h1');
  title.innerText = "Menu"

  let createPage = ()=>{
    const content = document.createElement('div');
    content.append(title);
    return content
  }
  return {createPage}
})()
