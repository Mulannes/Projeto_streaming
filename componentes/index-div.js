class div extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
<style>
.container-index-itens{
    padding: 5rem;
    display: flex;
}

.container-index-itens-left{
    width: 50%;
    height: 100%;
}

.container-index-itens-right{
    width: 50%;
    height: 100%;
}
</style>

<section class="container-index">
        <div class="line-container"></div>
        <div class="container-index-itens">
            <div class="container-index-itens-left">
                <h1></h1>
                <p class="container-index-itens-left-text"></p>
            </div>
            <div class="container-index-itens-right"><img src="/assets/Video files.gif"></div>
        </div>
    </section>   `;
}
}

customElements.define("index-div", div);