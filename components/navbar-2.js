class Header extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = ` `;
    }
  }
  
  customElements.define("navbar-2", Header);