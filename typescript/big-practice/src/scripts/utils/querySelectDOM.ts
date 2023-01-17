/**
 * @description query select dom by class
 *
 * @param {String} classes is class of element want to select
 *
 * @returns {Object} element after query
 */
function querySelector(classes: string) {
  return document.querySelector(classes);
}

/**
 * @description query select all dom have the same class
 *
 * @param {String} classes is class of element want to select
 *
 * @returns {Object} element after query
 */
function querySelectorAll(classes: string) {
  return document.querySelectorAll(classes);
}

/**
 * @description query select dom by id
 *
 * @param {String} id is id of element want to select
 *
 * @returns {Object} element after query
 */
function getElementById(id: string) {
  return document.getElementById(id);
}

export { querySelector, querySelectorAll, getElementById };
