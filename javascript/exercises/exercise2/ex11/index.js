const listImg = [
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
  const imgElement = document.createElement('img');
  const listTagImg = document.getElementsByTagName('img');
  const lengthOfTagList = listTagImg.length;
  const random = Math.floor(Math.random() * listImg.length);

  imgElement.setAttribute('src', listImg[random].url);
  imgElement.style.width = listImg[random].width;
  imgElement.style.height = listImg[random].height;

  if (lengthOfTagList === 1) {
    listTagImg[0].parentNode.removeChild(listTagImg[0]);
  }
  imageBox.appendChild(imgElement);
}
