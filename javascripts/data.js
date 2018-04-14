const callDepartments = require('./departments');

function whenDeptsLoad () {
  const deptData = JSON.parse(this.responseText).departments;
  console.log(deptData);
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
