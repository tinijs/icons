import {LitElement, html, css} from 'lit';
import {customElement} from 'lit/decorators.js';

@customElement('app-preview')
export class AppPreview extends LitElement {
  static styles = css`
    main {
      display: grid;
      grid-template-columns: repeat(auto-fill, 3rem);
      gap: .5rem;
    }

    .icon {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 3rem;
      height: 3rem;
      border: 1px solid #ccc;
      border-radius: 5px;
    }
  `;

  protected render() {
    return html`<main></main>`;
  }
}
