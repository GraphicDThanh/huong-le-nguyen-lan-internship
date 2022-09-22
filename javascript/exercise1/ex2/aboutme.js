const liText = document.querySelectorAll('li');
const nickname = document.getElementById('nickname');
const favorites = document.getElementById('favorites');
const hometown = document.getElementById('hometown');

// Change the body style so it has a font-family of "Arial, sans-serif".
for (let i = 0; i < liText.length; i += 1) {
  liText[i].style.fontFamily = 'Arial, sans-serif';
  liText[i].classList.add('listitem');
}

// Replace each of the spans (nickname, favorites, hometown) with my own information.
nickname.innerHTML = 'Huong';
favorites.innerHTML = 'Sleep';
hometown.innerHTML = 'DaNang';

const liTextRed = document.querySelectorAll('.listitem');
for (let i = 0; i < liText.length; i += 1) {
  liTextRed[i].style.color = 'red';
}

const img = document.createElement('img');
document.body.appendChild(img);
img.src = 'https://logos-world.net/wp-content/uploads/2020/10/Yahoo-Logo-700x394.png';
