export class RefreshButton {
  constructor(parent, data, ...classes) {
    this.parent = parent;
    this.data = data;
    this.classes = classes;
    this.dataArray = [];
    this.refreshButton = '';
  }

  buildButton() {
    this.refreshButton = document.createElement('div');
    this.refreshButton.classList.add('refresh-button', ...this.classes);
    this.refreshButton.innerHTML = `<svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="0.5" y="0.5" width="59" height="59" rx="29.5" stroke="#665F55"/>
    <path d="M39.8883 31.5C39.1645 36.3113 35.013 40 30 40C24.4772 40 20 35.5228 20 30C20 24.4772 24.4772 20 30 20C34.1006 20 37.6248 22.4682 39.1679 26" stroke="#403F3D" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M35 26H39.4C39.7314 26 40 25.7314 40 25.4V21" stroke="#403F3D" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`

    this.refreshButtonEvent();
    this.appendButton();
  }

  appendButton() {
    document.querySelector(`.${this.parent}`).append(this.refreshButton);
  }

  getContent() {
    return document.querySelectorAll(`.${this.data}`);
  }

  hideContent() {
    const content = this.getContent();

    content.forEach((item, index) => {
      item.classList.add(`${this.data}_unactive`);
      if (index < 4) {
        item.classList.remove(`${this.data}_unactive`);
      }
    });
  }

  showContent() {
    const content = this.getContent();
    content.forEach((item) => {
      item.classList.remove(`${this.data}_unactive`);
    });

  }

  checkResolution(resolution) {
    if (resolution > 768) {
      this.removeButton();
      this.showContent();
    } else if (!document.querySelector('.refresh-button')){
      this.buildButton();
      this.hideContent();
    }
  }

  removeButton() {
    if (document.querySelector('.refresh-button')) {
      document.querySelector('.refresh-button').remove();
    }
  }

  refreshButtonEvent() {
    this.refreshButton.addEventListener('click',()=> this.refreshButtonClickHandler());
  }

  refreshButtonClickHandler() {
    const content = this.getContent();
    const contentLength = content.length;

    if (contentLength > 4) {
      content.forEach((item) => {
        if (!item.classList.contains(`${this.data}_unactive`)) {
          item.classList.add(`${this.data}_active`);
          this.dataArray.push(item);

        } else {
          item.classList.remove(`${this.data}_unactive`);
          item.classList.add(`${this.data}_active`);
        }
      });
      this.dataArray.forEach((item, index) => {
        if (index < 4) {
          item.classList.add(`${this.data}_unactive`);
          item.classList.remove(`${this.data}_active`);
        }
      });
      this.dataArray = [];
    }
  }



}