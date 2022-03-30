const template = document.createElement('template');
template.innerHTML = `
  <style>
    div {
      padding: 8px;
      border: 1px solid #ccc;
      width: 150px;
    }
  </style>
  <button></button>
  <span class="flavor"></span>
  <div>
    <slot></slot>
  </div>
`;

export class XDropdown extends HTMLElement {
  static get observedAttributes() {
    return ['title', 'flavor'];
  }

  get title() {
    return this._title;
  }
  set title(value) {
    this._title = value;
    this.buttonElement.innerText = this._title;
  }

  get flavor() {
    return this._flavor;
  }
  set flavor(value) {
    this._flavor = value;
    this.flavorElement.innerText = this._flavor;
  }

  constructor() {
    super();
    this._title = 'dropdown';
    this.show = false;

    this.root = this.attachShadow({ mode: 'open' });
    this.root.appendChild(template.content.cloneNode(true));

    this.buttonElement = this.root.querySelector('button');
    this.buttonElement.innerText = this.title;
    this.buttonElement.addEventListener('click', () => this.toggle());

    this._flavor = 'orange';
    this.flavorElement = this.root.querySelector('.flavor');
    this.flavorElement.innerText = this.flavor;

    this.contentElement = this.root.querySelector('div');
    this.contentElement.style.display = 'none';
  }

  attributeChangedCallback(attrName, oldValue, newValue) {
    if (attrName === 'title' && this.buttonElement) {
      this.title = newValue;
    } else if (attrName === 'flavor' && this.flavorElement) {
      this.flavor = newValue;
    }
  }

  toggle() {
    this.show = !this.show;
    this.contentElement.style.display = this.show ? 'block' : 'none';
    this.dispatchEvent(new CustomEvent('show', { detail: this.show }));
  }
}

customElements.define('x-dropdown', XDropdown);
