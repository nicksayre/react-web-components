class Greeting extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({mode: 'open'});

    // create and use template
    let template = document.createElement('template');
    template.innerHTML = `<span>🤠 Howdy</span>`
    this.shadowRoot.appendChild(template.content.cloneNode(true));

  }

}

customElements.define('greeting-component', Greeting);
export default Greeting;