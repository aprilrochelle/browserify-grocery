let departments = [];

const getDepts = () => {
  return departments;
};

const setDepts = (deptArray) => {
  departments = deptArray;
};

module.exports = {
  getDepts,
  setDepts,
};
