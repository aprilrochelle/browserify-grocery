const callDepartments = require('./departments');
const printToDom = require('./dom');

function whenDeptsLoad () {
  const deptData = JSON.parse(this.responseText).departments;
  printToDom(deptData);
};

function ifDeptsFail () {
  console.error('Something is wrong.');
};

const initializer = () => {
  callDepartments(whenDeptsLoad, ifDeptsFail);
};

module.exports = {
  initializer,
};
