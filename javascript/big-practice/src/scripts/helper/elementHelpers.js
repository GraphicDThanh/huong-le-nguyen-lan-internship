export default class ElementHelpers {
  /**
   * @description common events of textarea to increase the length
   * @param {Object} element is title and description element ()
   */
  static commonInputBreakDown(element) {
    element.addEventListener('input', () => {
      this.inputBreakDown(element);
    });
  }

  /**
   * @description function increase the length of the textarea by the length of the text
   * @param {Object} e is a event (DOM Helper)
   */
  static inputBreakDown(e) {
    e.style.height = '1px';
    e.style.height = `${e.scrollHeight < '250' ? e.scrollHeight : '250'}px`;
  }
}
