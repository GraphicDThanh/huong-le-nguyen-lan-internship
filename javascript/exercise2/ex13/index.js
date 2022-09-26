function getSizeWindow() {
  const width = document.documentElement.clientWidth;
  const height = document.documentElement.clientHeight;
  const demo = document.querySelector('.demo');
  demo.innerHTML = `Width: ${width} </br> Height: ${height}`;
}
