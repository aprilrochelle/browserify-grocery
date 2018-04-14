const callDepartments = require('./departments');
const deptDom = require('./departmentDom');
const data = require('./data');

function whenDeptsLoad () {
  const deptData = JSON.parse(this.responseText).departments;
  data.setDepts(deptData);
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
