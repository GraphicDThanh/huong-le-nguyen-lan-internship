/**
 * @description query select dom by class
 *
 * @param {String} classes is class of element want to select
 *
 * @returns {Element} element after query
 */
function selectDOMClass(classes: string): HTMLElement | null {
  return document.querySelector(classes);
}

/**
 * @description query select all dom have the same class
 *
 * @param {String} classes is class of element want to select
 *
 * @returns {Element} element after query
 */
function selectDOMClassAll(classes: string): NodeListOf<HTMLElement> | null {
  return document.querySelectorAll(classes);
}

/**
 * @description query select dom by id
 *
 * @param {String} id is id of element want to select
 *
 * @returns {Element} element after query
 */
function selectDOMById(id: string): HTMLElement | null {
  return document.getElementById(id);
}

export { selectDOMClass, selectDOMClassAll, selectDOMById };
