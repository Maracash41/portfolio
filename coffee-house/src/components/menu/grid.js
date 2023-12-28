export class GridItem {
  constructor({ name, description, price, category, urlToImage, ...rest}) {
    this.name = name;
    this.description = description;
    this.price = price;
    this.category = category;
    this.urlToImage = urlToImage;
  }

  generateItem() {
    let template = '';
    let item = document.createElement('div');
    item.className = 'grid__grid-item grid-item';
    item.setAttribute('data-category', this.category);
    template += `<div class="grid-item__picture-container picture-container">`;
    this.urlToImage &&
    (template += `<img class="picture-container__picture" src="${this.urlToImage}" alt="${this.name}">`)
    template += `</div>`;

    template += `<div class="grid-item__grid-content grid-content">`;
    template += `<div class="grid-conent__container">`;

    this.name &&
    (template += `<div class="grid-item__title">${this.name}</div>`);

    this.description &&
    (template += `<p class="grid-item__description">${this.description}</p>`);
    template += `</div>`;

    this.description &&
    (template += `<div class="grid-item__cost">$${this.price}</div>`);
    template += `</div>`;

    item.innerHTML = template;

    return item;
  }

}




