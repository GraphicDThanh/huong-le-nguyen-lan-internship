export default class EventHelpers {
  /**
   * @description function stop overlay bubbling event of 2 input note form
   *
   * @param {Object} element is element want to avoid bubbling event
   */
  stopEvents(element) {
    element.addEventListener('click', (e) => {
      e.stopPropagation();
    });
  }
}
