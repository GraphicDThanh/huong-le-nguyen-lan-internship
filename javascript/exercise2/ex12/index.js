const boldText = document.querySelectorAll('.group-text span');
const linkAction = document.querySelector('.group-text a');

const highlight = () => {
  boldText.forEach((element) => {
    element.setAttribute('style', 'color: red');
  });
};

const unHighlight = () => {
  boldText.forEach((element) => {
    element.removeAttribute('style');
  });
};

linkAction.addEventListener('mouseover', highlight);
linkAction.addEventListener('mouseout', unHighlight);
