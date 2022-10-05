function getSizeWindow() {
  const docElement = document.documentElement;

  const width = docElement.clientWidth;
  const height = docElement.clientHeight;
  const demo = document.querySelector('.demo');
  demo.innerHTML = `Width: ${width} </br> Height: ${height}`;
}
