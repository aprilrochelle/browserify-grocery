let departments = [];
let items = [];

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

module.exports = {
  getDepts,
  setDepts,
  getItems,
  setItems,
};
