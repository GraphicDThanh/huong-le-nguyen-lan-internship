const volumeSphere = (e) => {
  e.preventDefault();
  const radius = document.querySelector('.radius').value;
  const volume = document.querySelector('.volume');
  const total = Math.round(((4 * Math.PI * (radius ** 3)) / (3)), 4);
  volume.value = `${total}`;
};

document.getElementById('myForm').onsubmit = volumeSphere;
window.onload = document.getElementById('myForm').onsubmit;
