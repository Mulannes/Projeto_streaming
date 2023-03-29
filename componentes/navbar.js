class Header extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = ` 
      <style>
      @import url('https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;700&family=Poppins:wght@200;300;400;500;600;700;800;900&display=swap');
      </style> 


      `;
    }
  }
  
  customElements.define("navbar-1", Header);