export default class Page{
  constructor(header,body,footer=null){
    this.header = header
    this.body = body
    this.footer=footer
  }


  createPage (){
    const div = document.createElement('div');
    if(!this.footer){
      this.footer = document.createElement('p');
      this.footer.innerHTML = "Copyright &copy; 2020. El Chapo restaurant"
    }
     div.append(this.header,this.body,this.footer)
     return div;
  }
}