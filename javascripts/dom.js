const outputString = document.getElementById('departments');

const printToDom = (deptArray) => {
  outputString.innerHTML = buildDomString(deptArray);
};

const buildDomString = (deptArray) => {
  let deptCard = '';
  deptCard += `<div class="container-fluid><div class="row">`;
  deptArray.forEach((dept) => {
    deptCard += `<div class="col-md-3 department">`;
    deptCard +=   `<img src="${dept.img}">`;
    deptCard +=   `<h3 class="hide">${dept.name}</h3>`;
    deptCard += `</div>`;
  });
  deptCard += `</div></div>`;
  return deptCard;
};

module.exports = printToDom;
