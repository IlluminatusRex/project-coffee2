import { select, templates } from './settings.js';
import utils from './utils.js';


class Product {
  constructor(id, data){
    const thisProduct = this;
      
    thisProduct.id = id;
    thisProduct.data = data;

    thisProduct.renderInMenu();
  }

  renderInMenu(){
    const thisProduct = this;
    /* generate HTML based on template */
    const generateHTML = templates.menuProduct(thisProduct.data);
    /* create element using utils.createElementFromHTML */
    thisProduct.element1 = utils.createDOMFromHTML(generateHTML);
    thisProduct.element2 = utils.createDOMFromHTML(generateHTML);
    /* find menu container */
    const menuContainer = document.querySelectorAll(select.containerOf.menu);
    /* add element to menu */
    menuContainer[0].appendChild(thisProduct.element1);
    menuContainer[1].appendChild(thisProduct.element2);
  }
}

export default Product;