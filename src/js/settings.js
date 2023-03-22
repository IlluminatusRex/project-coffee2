export const templates = {
  menuProduct: Handlebars.compile(document.querySelector(select.products).innerHTML),
  home: Handlebars.compile(document.querySelector(select.templateOf.home).innerHTML),
};

export const settings = {
  db: {
    url: '//' + window.location.hostname + (window.location.hostname=='localhost' ? ':3131' : ''),
  }
};

export const classNames = {
  menuProduct: {
    wrapperActive: 'active',
    imageVisible: 'active',
  },
  nav: {
    active: 'active',
  },
  pages: {
    active: 'active',
  }
};

export const select = {
  templateOf: {
    home: '#template-products',
  },

  products: {
    id: '#template-home',
    title: '#template-menu-product',
    description: '#template-cart-product',
    roasting: '#template-booking-widget',
    intensity: '#template-booking-widget',
    popular: '#template-booking-widget',
    image: '#template-booking-widget',
  },
};
