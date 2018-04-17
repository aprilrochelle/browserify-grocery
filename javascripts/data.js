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

const getItemsByDept = (departmentId) => {
  const selectedItems = [];
  items.forEach((item) => {
    if (item.departmentId === departmentId) {
      selectedItems.push(item);
    }
  });
  return selectedItems;
};

module.exports = {
  getDepts,
  setDepts,
  getItems,
  setItems,
  getItemsByDept,
};
