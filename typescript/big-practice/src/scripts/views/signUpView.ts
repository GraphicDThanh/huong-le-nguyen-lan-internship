import EventHelpers from '../helpers/eventHelpers';
import navigatePage from '../utils/navigatePage';
import { selectDOMClass } from '../utils/querySelectDOM';

export default class SignUpView {
  signIn: HTMLElement | null;

  eventHelpers: EventHelpers;

  constructor() {
    this.signIn = selectDOMClass('.btn-login-form');
    this.eventHelpers = new EventHelpers();
  }

  /**
   * @description function move to login page
   */
  bindChangeLoginPage() {
    const handler = () => {
      navigatePage('index.html');
    };

    this.eventHelpers.addEvent(this.signIn, 'click', handler);
  }
}
