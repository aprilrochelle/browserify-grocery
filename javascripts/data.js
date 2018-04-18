let departments = [];
let items = [];
const cart = [];

const getDepts = () => {
  return departments;
};

const setItems = (itemsArray) => {
  items = itemsArray;
};

const setDepts = (deptArray) => {
  departments = deptArray;
};

const getItems = () => {
  return items;
};

const getItemsByDept = (departmentId) => {
  const selectedItems = [];
  items.forEach((item) => {
    if (item.departmentId === departmentId) {
      selectedItems.push(item);
    };
  });
  return selectedItems;
};

const setCart = (itemId, numToAdd) => {
  const itemPosition = items.map(function (item) {
    return item.id;
  }).indexOf(itemId);
  const newItem = items[itemPosition];
  newItem.purchaseNum = numToAdd;
  cart.push(newItem);
};

const getCart = () => {
  return cart;
};

module.exports = {
  getDepts,
  setDepts,
  getItems,
  setItems,
  getItemsByDept,
  setCart,
  getCart,
};
