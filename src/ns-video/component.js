import { html, LitElement } from 'lit-element';

class nsVideo extends LitElement {

  static get properties() {
    return {
      id: { type: String },
      ratio: { type: String },
      title: { type: String }
    };
  }

  constructor() {
    super();

    this.id = '';
    this.ratio = '16x9';
    this.title = 'YouTube video';
  }

  checkRatio() {
    const exceptedRatios = ['16x9', '4x3', '1x1'];

    if (!exceptedRatios.includes(this.ratio)) {
      this.ratio = '16x9';
    }
  }

  setHeight() {
    const width = this.clientWidth;
    const parts = this.ratio.split('x');
    const height = (width / parts[0]) * parts[1];
    const container = this.shadowRoot.querySelector('.video-container');

    container.style.height = `${height}px`;
  }

  firstUpdated() {
    this.shadowRoot.querySelector('iframe').addEventListener('load', () => {
      this.setHeight();
    });

    window.addEventListener('resize', () => {
      this.setHeight();
    });
  }

  updated() {
    this.setHeight();
  }

  render() {
    this.checkRatio();

    return html([`
      <div class="video-container">
        <iframe
          title="${this.title}"
          width="100%"
          height="100%"
          src="https://www.youtube-nocookie.com/embed/${this.id}?rel=0"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen
        >
        </iframe>
      </div>
    `]);
  }

}
customElements.define('ns-video', nsVideo);
