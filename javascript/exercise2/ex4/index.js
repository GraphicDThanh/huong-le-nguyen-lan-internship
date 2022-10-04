const button = document.querySelector('button');
const linkTag = document.querySelector('#w3r');

const getAttributes = () => {
  console.log(linkTag.getAttribute('href'));
  console.log(linkTag.getAttribute('hreflang'));
  console.log(linkTag.getAttribute('rel'));
  console.log(linkTag.getAttribute('target'));
  console.log(linkTag.getAttribute('type'));
};

button.addEventListener('click', getAttributes);
