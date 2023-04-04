class body extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = ` 
      <style>
body{
    overflow: hidden;
    width: 100vw;
    height: 100vh;
    background: rgb(66,140,133);
    background: linear-gradient(0deg, rgba(66,140,133,1) 0%, rgba(115,56,230,1) 100%) no-repeat;
}

</style>

`;
}
}

customElements.define("background-gradient", body);