const callDepartments = require('./departments');
const callItems = require('./items');
const deptDom = require('./departmentDom');
const data = require('./data');

const whenDeptsLoad = function () {
  const deptData = JSON.parse(this.responseText).departments;
  data.setDepts(deptData);
  deptDom(deptData);
};

const whenItemsLoad = function () {
  const itemData = JSON.parse(this.responseText).items;
  console.log(itemData);
};

const ifLoadFails = function () {
  console.error('Something is wrong.');
};

const initializer = () => {
  callDepartments(whenDeptsLoad, ifLoadFails);
  callItems(whenItemsLoad, ifLoadFails);
};

module.exports = {
  initializer,
};
