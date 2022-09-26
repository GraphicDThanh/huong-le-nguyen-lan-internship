const volumeSphere = (e) => {
  // This event is used to avoid the page reload of the submit event
  e.preventDefault();
  const radius = document.querySelector('.radius').value;
  const volume = document.querySelector('.volume');
  const total = Math.round(((4 * Math.PI * (radius ** 3)) / (3)), 4);
  volume.value = `${total}`;
};

document.getElementById('myForm').addEventListener('submit', volumeSphere);
