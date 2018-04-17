const itemsOutputDiv = document.getElementById('items');

const printToDom = (items) => {
  itemsOutputDiv.innerHTML = itemsDomString(items);
};

const itemsDomString = (items) => {
  let domString = '';
  items.forEach((item) => {
    domString += `<h3>${item.name}</h3>`;
  });
  return domString;
};

module.exports = {
  printToDom,
};