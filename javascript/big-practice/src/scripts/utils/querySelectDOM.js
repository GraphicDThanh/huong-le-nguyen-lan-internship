function selectDOMClass(classes) {
  return document.querySelector(classes);
}

function selectDOMClassAll(classes) {
  return document.querySelectorAll(classes);
}

export { selectDOMClass, selectDOMClassAll };
