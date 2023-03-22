export const templates = {
    menuProduct: Handlebars.compile(document.querySelector(select.products).innerHTML),
};

export const settings = {
  db: {
    url: '//' + window.location.hostname + (window.location.hostname=='localhost' ? ':3131' : ''),
  }
}

export const select = {
    products: {
      id: '#template-home',
      title: '#template-menu-product',
      description: '#template-cart-product',
      roasting: '#template-booking-widget',
      intensity: '#template-booking-widget',
      popular: '#template-booking-widget',
      image: '#template-booking-widget',
    },
}
