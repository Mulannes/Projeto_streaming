class footer extends HTMLElement {
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
        font-size: 2em;
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
    
    .logos>a>img {
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
            <a href="/html/filmes.html">Filmes</a>
            <a href="/html/plano-page.html">Planos</a>
            <a href="/html/profileedit.html">Profile</a>
            <a href="/html/profileselector.html">Escolha perfil</a>
        </div>
        <div class="recent-itens">
            <h2>Recente atualizações</h2>
            <p>Novos filmes adicionados</p>
            <p>Conte roubou o hulk</p>
            <p>Mesquita Viado</p>
        </div>
        <div class="newsletter">
            <h2>Site</h2>
            <form action="" id="form">
                <input type="search" placeholder="Procurar filmes" id="inputEmail">
                <input type="submit" value="Procurar" id="inputSubmit">
            </form>
            <div class="logos">
                <a href="https://www.facebook.com/people/Murillo-Lannes/pfbid02c1W14ynuzuB4HTKskr8hhwwLZNPyF9FXtHLugSpqf5z6kGZizDj3WwPMYErbPcsEl/"><img src="/assets/icons/iconfb.png" alt="Logo"></a>
                <a href="https://github.com/Mulannes"><img src="/assets/icons/icongit.png" alt="Logo"></a>
                <a href="https://www.instagram.com/kauasdn_/"><img src="/assets/icons/iconig.png" alt="Logo"></a>
                <a href="https://twitter.com/Mulannes1"><img src="/assets/icons/icontwt.png" alt="Logo"></a>
            </div>
        </div>
        <div class="direitos">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis incidunt quas nesciunt, odio modiaut.
            </p>
        </div>
    </footer>
      `;
    }
}

customElements.define("footer-1", footer);