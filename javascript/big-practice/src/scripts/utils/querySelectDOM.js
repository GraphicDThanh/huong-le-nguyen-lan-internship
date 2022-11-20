function selectDOMClass(classes) {
  return document.querySelector(classes);
}

function selectDOMClassAll(classes) {
  return document.querySelectorAll(classes);
}

function selectDOMById(id) {
  return document.getElementById(id);
}

export { selectDOMClass, selectDOMClassAll, selectDOMById };
