export const select = {
  templateOf: {
    home: '#template-home',
    menuProduct: '#template-product',
    contact: '#template-contact',
  },
  containerOf: {
    menu: '.product__list',
    pages: '#pages',
    home: '#home',
  },
  all: {
    menuProducts: '#product-list > .product',
    menuProductsActive: '#product-list > .product.active',
  },
  menuProduct: {
    clickable: '.product__header',
    form: '.product__order',
    priceElem: '.product__total-price .price',
    imageWrapper: '.product__images',
    amountWidget: '.widget-amount',
    cartButton: '[href="#add-to-cart"]',
  },
  
  nav: {
    links: '.main-nav a',
  },
  
};

export const classNames = {
  menuProduct: {
    wrapperActive: 'active',
    imageVisible: 'active',
  },

  cart: {
    wrapperActive: 'active',
  },
  booking: {
    loading: 'loading',
    tableBooked: 'booked',
  },
  nav: {
    active: 'active',
  },
  pages: {
    active: 'active',
  }

};

export const settings = {

  db: {
    url: '//' + window.location.hostname + (window.location.hostname=='localhost' ? ':3131' : ''),
    products: 'products',
  },
  
};

export const templates = {
  menuProduct: Handlebars.compile(document.querySelector(select.templateOf.menuProduct).innerHTML),
  //home: Handlebars.compile(document.querySelector(select.templateOf.home).innerHTML),
};