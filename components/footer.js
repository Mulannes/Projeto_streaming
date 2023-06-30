class div extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
      <style>
      footer {
        display: flex;
        align-items: center;
        justify-content: space-around;
        width: 100%;
        color: #D9D9D9;
        height: 290px;
        background-color: #272323;
        overflow: hidden;
        position: relative;
        font-size: 18px;
        font-family: "Poppins";
    }
    
    footer>div>h2 {
    
        display: flex;
        position: absolute;
        top: 50px;
    }
    
    footer>div {
        display: flex;
        flex-direction: column;
    }
    
    .menu>a {
        color: #7338E6;
        text-decoration: underline;
        border-bottom: 2px;
    }
    
    #form {
        display: flex;
    }
    
    #inputEmail {
        width: 250px;
        height: 35px;
        appearance: 0;
        border: 0;
        padding: 0 5px;
        text-align: center;
        margin-top: 30px;
    }
    
    
    
    #inputSubmit {
        width: 100px;
        height: 35px;
        margin: 0;
        appearance: 0;
        border: 0;
        display: flex;
        padding: 0 5px;
        background-color: #7338E6;
        color: #D9D9D9;
        font-weight: 600;
        justify-content: center;
        margin-top: 30px;
        transition: .5s;
    }
    
    #inputSubmit:hover {
        background-color: #428C85;
    }
    
    .logos>img {
        width: 50px;
        height: 50px;
        margin-top: 20px;
    }

    .direitos {
        color: #D9D9D9;
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 10%;
    }
      </style>

      <footer>
        <div class="contact">
            <h2>Contanto</h2>
            <p>Rua Quinze de Novembro 24</p>
            <p>Cidade de Guaratuba</p>
            <p>Estado de Pernambuco</p>
            <p>Celular: 47 9223-7749</p>
        </div>
        <div class="menu">
            <h2>Menu</h2>
            <a href="/html/index.html">Home</a>
            <a href="/html/register.html">Cadastro</a>
            <a href="/html/login.html">Login</a>
        </div>
        <div class="recent-itens">
            <h2>Recente atualizações</h2>
            <p>Novos filmes adicionados</p>
            <p>Ator famoso: 'Augusto Conte', é preso após denuncias</p>
            <p>'Vinicius Henrique' é contratado para participar na série 'Fundamental'</p>
        </div>
        <div class="newsletter">
            <h2>Registre-se</h2>
            <form action="register.html" id="form">
                <input type="email" placeholder="Seu email" id="inputEmail">
                <input type="submit" value="Registrar-se" id="inputSubmit">
            </form>
            <div class="logos">
                <img src="/assets/icons/world (1).png" alt="Logo">
                <img src="/assets/icons/world (1).png" alt="Logo">
                <img src="/assets/icons/world (1).png" alt="Logo">
                <img src="/assets/icons/world (1).png" alt="Logo">
            </div>
        </div>
        <div class="direitos">
            <p>O melhor site de streaming do mercado brasileiro. Para você e toda sua família!
            </p>
        </div>
    </footer>
      `;
    }
}

customElements.define("footer", Footer);