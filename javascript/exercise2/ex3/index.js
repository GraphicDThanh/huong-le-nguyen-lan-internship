const btn = document.querySelector('.btn');
const text = document.querySelector('.demoText');

const changeBackgroundColor = () => {
  text.style.backgroundColor = 'red';
};

btn.addEventListener('click', changeBackgroundColor);
