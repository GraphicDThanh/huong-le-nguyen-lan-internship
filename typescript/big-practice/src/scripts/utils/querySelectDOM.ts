/**
 * @description query select dom by class
 *
 * @param {String} classes is class of element want to select
 *
 * @returns {Element} element after query
 */
const querySelector = (classes: string) => {
  return document.querySelector(classes);
}

/**
 * @description query select all dom have the same class
 *
 * @param {String} classes is class of element want to select
 *
 * @returns {Element} element after query
 */
const querySelectorAll = (classes: string) => {
  return document.querySelectorAll(classes);
}

/**
 * @description query select dom by id
 *
 * @param {String} id is id of element want to select
 *
 * @returns {Element} element after query
 */
const getElementById = (id: string) => {
  return document.getElementById(id);
}

export { querySelector, querySelectorAll, getElementById };
