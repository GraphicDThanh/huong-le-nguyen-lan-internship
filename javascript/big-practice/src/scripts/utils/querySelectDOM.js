function selectDOMClass(classes) {
  return document.querySelector(classes);
}

function selectDOMClassAll(classes) {
  return document.querySelectorAll(classes);
}

function selectDOMId(id) {
  return document.getElementById(id);
}

export { selectDOMClass, selectDOMClassAll, selectDOMId };
