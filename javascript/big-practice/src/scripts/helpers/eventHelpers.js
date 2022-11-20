export default class EventHelpers {
  /**
   * @description function stop overlay bubbling event of 2 input note form
   */
  stopEvents(element) {
    element.addEventListener('click', (e) => {
      e.stopPropagation();
    });
  }
}
