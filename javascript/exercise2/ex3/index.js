const btn = document.querySelector('.btn');
const text = document.querySelector('.demoText');

const changeColor = () => {
  text.style.backgroundColor = 'red';
};

btn.addEventListener('click', changeColor);
