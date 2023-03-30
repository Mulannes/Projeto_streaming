class Header extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = ` 
      <style>
      @import url('https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;700&family=Poppins:wght@200;300;400;500;600;700;800;900&display=swap');
      @import url('https://fonts.googleapis.com/css2?family=Ibarra+Real+Nova:wght@400;500;600;700&display=swap');

      .header-index{
        width: 100%;
        height: 100px;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
    
    .navigation-index{
        display: flex;
        align-items: center;
    }
    
    .name-shop{
        font-family: "Poppins", sans-serif;
        font-size: 55px;
        font-weight: 400;
    }
    
    .languages-index{
        width: 271px;
        height: 76px;
        background-color: transparent;
        border: 2px solid #D9D9D9;
        border-radius: 10px;
        margin-right: 27px;
    }
    
    .languages-index select{
        width: 100%;
        height: 100%;
        text-align: center;
        background-color: transparent;
        color: #fff;
        font-size: 28px;
        font-family: "ibarra real nova", "poppins", sans-serif;
    }
    
    .languages-index option{
        background-color: #3C3838;
        color: #fff;
        border: 2px solid #D9D9D9;
        border-radius: 10px;
        transition: .5s;
    }
    
    .btn-register{
        background-color: #7338E6;
        border: 1px solid #7338E6;
        border-radius: 10px;
        width: 157px;
        height: 63px;
    }
    
    .btn-register a{
        font-family: "poppins", sans-serif;
        font-size: 28px;
        font-weight: bold;
        text-decoration: none;
        color: #fff;
    }
      </style> 
      <header class="header-index">
      <h1 class="name-shop">ShortFilms</h1>
      <nav class="navigation-index">
          <label for="languages" class="languages-index">
              <select name="uf" id="uf">
                  <option  value="pt">Português</option>
                  <option  value="eu">English</option>
                  <option  value="sp">Español</option>
              </select>
              <br>
          </label>
          <button class="btn-register"><a href="#">Log in
          </a></button>
      </nav>
  </header>

      `;
    }
  }
  
  customElements.define("navbar-1", Header);