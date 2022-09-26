const listImgs = [
  {
    url: 'http://farm4.staticflickr.com/3691/11268502654_f28f05966c_m.jpg',
    width: '240px',
    height: '160px',
  },
  {
    url: 'http://farm1.staticflickr.com/33/45336904_1aef569b30_n.jpg',
    width: '320px',
    height: '195px',
  },
  {
    url: 'http://farm6.staticflickr.com/5211/5384592886_80a512e2c9.jpg',
    width: '500px',
    height: '343px',
  },
];

function changeImage() {
  const imageBox = document.querySelector('.demo');
  const img = document.createElement('img');
  const listImg = document.getElementsByTagName('img');
  const listLength = listImg.length;
  const random = Math.floor(Math.random() * listImgs.length);

  img.setAttribute('src', listImgs[random].url);
  img.style.width = listImgs[random].width;
  img.style.height = listImgs[random].height;
  if (listLength === 1) {
    listImg[0].parentNode.removeChild(listImg[0]);
  }
  imageBox.appendChild(img);
}
