const callDepartments = require('./departments');
const deptDom = require('./departmentDom');

function whenDeptsLoad () {
  const deptData = JSON.parse(this.responseText).departments;
  deptDom(deptData);
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
