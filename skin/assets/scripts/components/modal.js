import {isIPhone} from '../../utils/devices';
import {
  getBody,
  getBodyActiveClass,
} from '../../utils/selectors';

export class Modal {
  constructor(
    openTriggerElement = '.js-modal-trigger-open',
    closeTriggerElement = '.js-modal-trigger-close',
    OPEN_CLASS = 'is-active',
    CLOSED_CLASS = 'is-inactive'
  ) {
    this.openTriggerElement = openTriggerElement;
    this.closeTriggerElement = closeTriggerElement;
    this.OPEN_CLASS = OPEN_CLASS;
    this.CLOSED_CLASS = CLOSED_CLASS;

    this.isIphone = isIPhone();

    this.$openTriggers = document.querySelectorAll(this.openTriggerElement);
    this.$closeTriggers = document.querySelectorAll(this.closeTriggerElement);

    this.$body = getBody();

  }

  set scrollPosition(scrollPosition) {
    this._scrollPosition = scrollPosition;
  }

  get scrollPosition() {
    return this._scrollPosition;
  }

  open(id) {
    if (this.isIphone) {
      this.scrollPosition = window.pageYOffset;
    }
    const {classList} = document.querySelector(`#${id}`);

    classList.add(this.OPEN_CLASS);
    classList.remove(this.CLOSED_CLASS);

    setTimeout(() => {
      this.$body.classList.add(getBodyActiveClass(this.isIphone));
    }, 300);
  }

  close(id) {
    if (this.isIphone) {
      window.scroll(0, this.scrollPosition);
    }

    const {classList} = document.querySelector(`#${id}`);

    classList.add(this.CLOSED_CLASS);
    classList.remove(this.OPEN_CLASS);
    this.$body.classList.remove(getBodyActiveClass(this.isIphone));
  }

  getId(element) {
    return element.dataset.modal;
  }

  init = () => {
    this.$openTriggers.forEach((element) => {
      element.addEventListener('click', (e) => {
        const id = this.getId(e.currentTarget);
  
        this.open(id);
      });
    });
    this.$closeTriggers.forEach((element) => {
      element.addEventListener('click', (e) => {
        const id = this.getId(e.currentTarget);
  
        this.close(id);
      });
    });
  }
}
