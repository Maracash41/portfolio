export class Modal {
  constructor (classes) {
    this.classes = classes;
    this.overlayModal = '';
    this.modal = '';
    this.modalContainer = '';
  }

  buildModal(content) {
    //Overlay Modal

    this.overlayModal = this.createDomNode(this.overlayModal, 'div', 'overlay-modal');

    // Modal
    this.modal = this.createDomNode(this.modal, 'div', 'modal', this.classes);

    // this.modalContainer  = this.createDomNode(this.modalContainer, 'div', 'modal__container');

    this.setContent(content);

    this.appendModalElements();

    //Bind Events 

    this.bindEvents();

    this.openModal();
  }

  setContent(content) { 
    if(typeof content === 'string') {
      this.modal = content;
    } else {
      this.modal.innerHTML = '';
      this.modal.append(content);
    }
  }

  appendModalElements() {
    this.overlayModal.append(this.modal);
  }


  createDomNode (node, element, ...classes) {
    node = document.createElement(element);
    node.classList.add(...classes);
    return node;
  }

  bindEvents() {
    this.overlayModal.addEventListener('click', this.closeModal);
  }

  openModal() {
    document.body.append(this.overlayModal);
  }

  closeModal(e) {
    let classes = e.target.classList;
    if (classes.contains('overlay-modal') || classes.contains('modal-content__close-button')) {
      document.querySelector('.overlay-modal').remove();
    }
  }

}