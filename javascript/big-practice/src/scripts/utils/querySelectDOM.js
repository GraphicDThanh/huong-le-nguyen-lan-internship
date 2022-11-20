/**
 * @description query select dom by class
 *
 * @param {String} classes is class of element want to select
 *
 * @returns {Object} element
 */
function selectDOMClass(classes) {
  return document.querySelector(classes);
}

/**
 * @description query select all dom have the same class
 *
 * @param {String} classes is class of element want to select
 *
 * @returns {Object} element
 */
function selectDOMClassAll(classes) {
  return document.querySelectorAll(classes);
}

/**
 * @description query select dom by id
 *
 * @param {String} id is id of element want to select
 *
 * @returns {Object} element
 */
function selectDOMById(id) {
  return document.getElementById(id);
}

export { selectDOMClass, selectDOMClassAll, selectDOMById };
