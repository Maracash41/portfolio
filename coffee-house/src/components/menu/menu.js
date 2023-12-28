import '../../index.scss';
import '../../pages/menu/menu.html';
import './grid';
import '../header/burger';
import '../menu/menu.scss';
import { GridItem } from './grid';
import { products } from "./products";
import { Modal } from "./Modal";
import '../../img/coffee-1.jpeg';
import '../../img/coffee-2.jpeg';
import '../../img/coffee-3.jpeg';
import '../../img/coffee-4.jpeg';
import '../../img/coffee-5.jpeg';
import '../../img/coffee-6.jpeg';
import '../../img/coffee-7.jpeg';
import '../../img/coffee-8.jpeg';
import '../../img/tea-1.jpg';
import '../../img/tea-2.jpeg';
import '../../img/tea-3.jpeg';
import '../../img/tea-4.jpeg';
import '../../img/dessert-1.jpeg';
import '../../img/dessert-2.jpeg';
import '../../img/dessert-3.jpeg';
import '../../img/dessert-4.jpeg';
import '../../img/dessert-5.jpeg';
import '../../img/dessert-6.jpeg';
import '../../img/dessert-7.jpeg';
import '../../img/dessert-8.jpeg';
import { GridModal } from './GridModal';
import { RefreshButton } from './RefreshButton';

window.onload = function() {
  //Render Grid Items
  if (products) {
    renderGridItemToDom();
  }

  //Tabs
 addTabsClickHandler();

//Modal Window
 addGridItemClickHandler();

//Refresh Button
checkRefreshButtonState();

}


const addTabsClickHandler = () => {
  const tabs = document.querySelectorAll('.tab');
    tabs.forEach((tab, indexClickedTab) => tab.addEventListener('click' , (e) => {
        removeSelectedTab();
        selectClickedTab(tab, indexClickedTab);
        filterCategoryBySelectedTab(indexClickedTab);
    }));
    selectClickedTab(tabs[0], 0);
}
//toDo: сделать через погружение

const removeSelectedTab = () => {
  let tabs = document.querySelectorAll('.tab');
  let tabsIcons = document.querySelectorAll('.tab__icon');
  let tabsNames = document.querySelectorAll('.tab__name');

  tabs.forEach((tab) => tab.classList.remove('tab_active'));
  tabsIcons.forEach((icon) => icon.classList.remove('tab__icon_active'));
  tabsNames.forEach((name) => name.classList.remove('tab__name_active'));
}

const selectClickedTab = (clickedTab , indexClickedTab) => {
  let tabIcon = document.querySelectorAll('.tab__icon')[indexClickedTab];
  let tabName = document.querySelectorAll('.tab__name')[indexClickedTab];
  clickedTab.classList.add('tab_active');
  tabIcon.classList.add('tab__icon_active');
  tabName.classList.add('tab__name_active');
}

const filterCategoryBySelectedTab = (indexClickedTab) => {
  const tabName = document.querySelectorAll('.tab__name')[indexClickedTab].textContent;
  renderGridItemToDom(tabName.toLowerCase());
}

const renderGridItemToDom = (filter = 'coffee') => {
  const data = products.filter((product) => product.category === filter);
  let grid = getGrid();
  generateGridItems(data)
    .forEach((item) => {
      grid.append(item.generateItem());
    });
}

const getGrid = () => {
  const grid = document.querySelector('.grid');
  grid.innerHTML = '';
  return grid;
}

const generateGridItems = (products) => {
  let items = [];
  products.forEach((item) => {
    items.push(new GridItem(item));
  });
  return items;
}


const addGridItemClickHandler = () => {
  document.querySelector('.grid').addEventListener('click', (e) => {
    if (e.target.closest('.grid-item')) {
      let clickedGridItem = e.target.closest('.grid-item').querySelector('.grid-item__title');
      let clickedGridItemName = clickedGridItem.textContent;
      let clickedGridItemData = getClickedData(clickedGridItemName);
      renderGridItemModalWindow(clickedGridItemData);
    }
  });
}

const getClickedData = (name) => {
  return products.find((product) => product.name === name);
}

const renderGridItemModalWindow = (content) => {
  let modal = new GridModal('grid__modal', content);
  modal.renderModal();
}

const getResolution = () => window.innerWidth;

const checkRefreshButtonState = () => {
  window.addEventListener('resize', () => {
    renderRefreshButton(getResolution());
  })

}

const renderRefreshButton = (resolution) => {
  let refreshButton = new RefreshButton('price', 'grid-item', 'price__refresh-button');
  refreshButton.checkResolution(resolution);
}

