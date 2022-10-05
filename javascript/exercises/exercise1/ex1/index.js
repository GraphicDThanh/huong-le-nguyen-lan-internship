const logo = document.querySelector('.logo');
const url = 'https://logos-world.net/wp-content/uploads/2020/10/Yahoo-Logo-700x394.png'
logo.setAttribute('srcset', url);

const button = document.querySelector('.search');
button.innerHTML = 'Yahoo !';
