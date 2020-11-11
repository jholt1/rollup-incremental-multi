import { html, LitElement } from 'lit-element';

class nsAccordion extends LitElement {
  render() {
    return html([`
      <div class="heading">
        <slot name="heading"></slot>
      </div>
      <div class="expand-holder">
        <slot></slot>
      </div>
    `]);
  }

}
customElements.define('ns-accordion', nsAccordion);
