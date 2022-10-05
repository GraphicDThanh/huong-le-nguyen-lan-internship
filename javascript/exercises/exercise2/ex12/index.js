const boldTexts = document.querySelectorAll('.group-text strong');
const linkAction = document.querySelector('.group-text a');

const highlight = () => {
  boldTexts.forEach((element) => {
    element.setAttribute('style', 'color: red');
  });
};

const unHighlight = () => {
  boldTexts.forEach((element) => {
    element.removeAttribute('style');
  });
};

linkAction.addEventListener('mouseover', highlight);
linkAction.addEventListener('mouseout', unHighlight);
