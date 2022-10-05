const text = document.getElementById('text');
const changeStyle = document.querySelector('.changeStyle');

const changeStyleOfText = () => {
  text.style.color = 'red';
  text.style.fontFamily = 'Tahoma';
  text.style.fontSize = '26px';
};

changeStyle.addEventListener('click', changeStyleOfText);
