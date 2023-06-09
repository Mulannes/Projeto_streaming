class Header extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = ` 
      <style>
      @import url('https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;700&family=Poppins:wght@200;300;400;500;600;700;800;900&display=swap');
      @import url('https://fonts.googleapis.com/css2?family=Ibarra+Real+Nova:wght@400;500;600;700&display=swap');
      
      
      :root{
          --gray: #3C3838;
          --lightgray:#D9D9D9;
          --black: #000;
          --green-btn: #428C85;
          --purple: #7338E6;
          --dark-gray: #514D4D;
          --Poppins:"Poppins";
      }
      
      *{
          margin: 0;
      
      }
      
      body{
          background-color: var(--gray);
          overflow-x: hidden;
      }
      .header-index{
          width: 100vw;
          height: 100px;
          display: flex;
          justify-content: space-around;
          align-items: center;
          position: relative;
          background-color: rgb(0, 0, 0,0.6);
      }
      
      .navigation-index{
          display: flex;
          align-items: center;
          justify-content: right;
          width: 50%;
          height: 100%;
      }
      
      .name-shop{
          font-family: "Poppins", sans-serif;
          font-size: 55px;
          font-weight: 400;
          color: #fff;
      }
      
      .languages-index{
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 50%;
          height: 76px;
          background-color: transparent;
          /* border: 2px solid #D9D9D9;
          border-radius: 20px; */
          margin-right: 27px;
      }
      
      .world-languages-index{
          position: absolute;
          width: 54px;
          height: 54px;
          right: 80%;
      }
      
      .arrow-languages-index{
          position: absolute;
          transform: rotate(90deg);
          left: 80%;
          width: 54px;
          height: 54px;
      }
      
      .languages-index-itens{
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 2px solid #D9D9D9;
          border-radius: 20px;
      }
      
      .languages-index select{
          appearance: none;
          outline: none;
          width: 100%;
          height: 100%;
          text-align: center;
          background-color: transparent;
          color: #fff;
          font-size: 2.3em;
          font-family: "ibarra real nova", "poppins", sans-serif;
          border: none;
          /* border: 2px solid #D9D9D9;
          border-radius: 20px; */
      }
      
      .languages-index option{
          background-color: #3C3838;
          color: #fff;
          border: 2px solid #D9D9D9;
          border-radius: 20px;
      }
      
      .btn-register{
          background-color: var(--purple);
          border: 1px solid var(--purple);
          border-radius: 10px;
          width: 20%;
          height: 72px;
          transition: .3s ease-in;
          cursor: pointer;
      }
      
      .btn-register a{
          font-family: "poppins", sans-serif;
          font-size: 2em;
          font-weight: bold;
          text-decoration: none;
          color: #fff;
      }
      
      .btn-register:hover{
          transform: scale(1.10);
      }
      </style> 
      <header class="header-index">
            <h1 class="name-shop">ShortFilms</h1>
            <nav class="navigation-index">
                <label for="languages" class="languages-index">
                    <img src="/assets/icons/world (1).png" class="world-languages-index">
                    <div class="languages-index-itens">
                    <select id="uf">
                        <option  value="pt">Português</option>
                        <option  value="eu">English</option>
                        <option  value="sp">Español</option>
                    </select>
                    </div>
                    <img src="/assets/icons/arrow-right.png"class="arrow-languages-index" >
                    <br>
                </label>
                <button class="btn-register"><a href="login.html">Log in
                </a></button>
            </nav>
        </header>

      `;
    }
}

customElements.define("navbar-1", Header);