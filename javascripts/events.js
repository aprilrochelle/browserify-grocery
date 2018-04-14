const deptCards = document.getElementsByClassName('department');

const showDeptName = (e) => {
  const deptImg = e.target.children[0];
  const deptName = e.target.children[1];

  deptImg.classList.add('grey-out');
  deptName.classList.remove('hide');
};

const hideDeptName = (e) => {
  const deptImg = e.target.children[0];
  const deptName = e.target.children[1];

  deptImg.classList.remove('grey-out');
  deptName.classList.add('hide');
};

const showItems = (e) => {
  console.log('data-id', e.target.parentNode.children[1].dataset.departmentId);
};

const addDeptEvents = () => {
  for (let i = 0; i < deptCards.length; i++) {
    deptCards[i].addEventListener('mouseenter', showDeptName);
    deptCards[i].addEventListener('mouseleave', hideDeptName);
    deptCards[i].addEventListener('click', showItems);
  };
};

module.exports = {
  addDeptEvents,
};
