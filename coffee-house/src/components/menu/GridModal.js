import { Modal } from './Modal';

export class GridModal extends Modal {
  constructor (classes, { name, description, price, category, urlToImage, sizes, additives }) {
    super(classes);
    this.name = name;
    this.description = description;
    this.price = price;
    this.category = category;
    this.urlToImage = urlToImage;
    this.sizes = sizes;
    this.additives = additives;
    this.costS = sizes.s.add-price;
    this.costM = sizes.m.add-price;
    this.costL = sizes.l.add-price;
    this.additive = additives;
    this.sum = 0;
  }

  generateContainer() {
    let template = '';
    let container = '';
    container = this.createDomNode(container, 'div', 'modal__container');
    
    template += `<div class="modal__column">`;
    template += `<div class="modal__picture-container">`;
    this.urlToImage && 
    (template += `<img class="modal__picture" src="${this.urlToImage}" alt="${this.name}">`);
    template += `</div>`;
    template += `</div>`;

    template += `<div class="modal__column">`;

    template += `<div class="modal-content">`;

    this.name && 
    (template += `<p class="modal-content__title">${this.name}</p>`)

    this.description &&
    (template += `<p class="modal-content__description">${this.description}</p>`);

    if (this.sizes) {
      template += `<div class="modal-content__option option">`;
      template += `<p class="option__heading">Size</p>`;
      template += `<div class="option__tabs tabs tabs_option tabs_modal">`;

      if (this.sizes.s){
        template += `<div class="tabs__tab tab" data-type="size">`;
        template += `<p class="tab__icon tab__icon_text">S</p>`;
        template += `<p class="tab__name">${this.sizes.s.size}</p>`;
        template += `</div>`;
      }

      if (this.sizes.m){
        template += `<div class="tabs__tab tab" data-type="size">`;
        template += `<p class="tab__icon tab__icon_text">M</p>`;
        template += `<p class="tab__name">${this.sizes.m.size}</p>`;
        template += `</div>`;
      }

      if (this.sizes.l){
        template += `<div class="tabs__tab tab" data-type="size">`;
        template += `<p class="tab__icon tab__icon_text">L</p>`;
        template += `<p class="tab__name">${this.sizes.l.size}</p>`;
        template += `</div>`;
      }

      template += `</div>`;
      template += `</div>`;
    }
    
    if (this.additives) {
      template += `<div class="modal-content__option option">`;
      template += `<p class="option__heading">Additives</p>`;
      template += `<div class="option__tabs tabs tabs_option tabs_modal">`;

      template += `<div class="tabs__tab tab" data-type="additive">`;
      template += `<p class="tab__icon tab__icon_text">1</p>`;
      template += `<p class="tab__name">${this.additives[0].name}</p>`;
      template += `</div>`;

      template += `<div class="tabs__tab tab" data-type="additive">`;
      template += `<p class="tab__icon tab__icon_text">2</p>`;
      template += `<p class="tab__name">${this.additives[1].name}</p>`;
      template += `</div>`;

      template += `<div class="tabs__tab tab" data-type="additive">`;
      template += `<p class="tab__icon tab__icon_text">3</p>`;
      template += `<p class="tab__name">${this.additives[2].name}</p>`;
      template += `</div>`;

      template += `</div>`;
      template += `</div>`;
    }

    template += `<div class="modal-content__total-price total-price">`;
    template += `<p class="total-price__heading">Total:</p>`;
    template += `<p class="total-price__cost">${this.price}</p>`;
    template += `</div>`;

    template += `<div class="modal-content__warning warning">
    <div class="warning__icon"></div>
      <p class="warning__description">
        The cost is not final. Download our mobile app to see the final price and place your order. Earn loyalty points and enjoy your favorite coffee with up to 20% discount.
      </p>
    </div> `;
 
    template += `<button class="modal-content__close-button">Close</button>`;
    template += `</div>`;
    template += `</div>`;

    container.innerHTML = template;
    return container;
  }

  renderModal() {
    let content = this.generateContainer();
    super.buildModal(content);
    this.tabsClickHandler();
  }

  tabsClickHandler() {
    let tabsModal = document.querySelectorAll('.tabs_modal');
    tabsModal.forEach((tabs) => tabs.addEventListener('click', (e) => {
      if (e.target.closest('.tab')) {
        const tab = e.target.closest('.tab');
        let isActive = false;
        let tabData = null;
        const dataType = this.getDataType(tab);

        if (dataType === 'size') {
          tabData = e.target.closest('.tab').querySelector('.tab__icon').textContent;
        } else  if (dataType === 'additive') {
          tabData = e.target.closest('.tab').querySelector('.tab__name').textContent;
        }

        if (tab.classList.contains('tab_active')) {
          isActive = true;
          tab.classList.remove('tab_active');
        } else {
          tab.classList.add('tab_active');
        }
        
        this.calculatePrice(tabData, isActive, dataType);
      }
    }))
  }

  calculatePrice(data, isActive, dataType) {
    let additivePrice = null;
    let sizePrice = null;
    console.log()
    if (dataType === 'size') {
      sizePrice = this.sizes[data.toLowerCase()]['add-price'];
    } else if (dataType === 'additive') {
        additivePrice = this.additives.find(aditive => aditive.name === data)["add-price"];
    }

    const cost = document.querySelector('.total-price__cost');
    let currentPrice = cost.textContent;

    if (!isActive) {
      cost.textContent = (Number(currentPrice) + Number(sizePrice || additivePrice || 0)).toFixed(2);
    } else {
      cost.textContent = (Number(currentPrice) -  Number(sizePrice || additivePrice || 0)).toFixed(2);
    }
  }

  getDataType(tab) {
   return tab.getAttribute('data-type');
  }

}