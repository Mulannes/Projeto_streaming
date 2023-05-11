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
        padding: 0;
        box-sizing: border-box;
      }

      body{
        background-color: var(--gray);
        overflow-x: hidden;
      }


      #header-home{
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        padding: 5px 100px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        z-index: 99;
    }
    
    .logo {
        width: 100px; 
        height: 100px;
        cursor: pointer;
    }
    .navigation-home{
        display: flex;
        align-items: center;
    }
    .navigation-home a{
        position: relative;
        font-family: var(--Poppins);
        text-decoration: none;
        font-size: 1.3em;
        font-weight: 500;
        margin-left: 40px;
        color: var(--lightgray);
    }
    
    .navigation-home a::after{
        content: "";
        position: absolute;
        width: 100%;
        left: 0;
        bottom: -6px;
        height: 3px;
        background: #fff;
        border-radius: 5px;
        transform-origin: right;
        transform: scale(0);
        transition: transform .5s;
    }
    .navigation-home a:hover::after{
        transform-origin: left;
        transform: scaleX(1);
    }
    
    .search {
        --background: #4f29f0;
        --text-color: #414856;
        --primary-color: #4f29f0;
        --border-radius: 10px;
        --width: 190px;
        --height: 55px;
        background: var(--background);
        width: auto;
        height: var(--height);
        position: relative;
        overflow: hidden;
        border-radius: var(--border-radius);
        box-shadow: 0 10px 30px rgba(65, 72, 86, 0.05);
        display: flex;
        justify-content: center;
        align-items: center;
        margin-left: 40px;
      }
      .search input[type=text] {
        position: relative;
        width: var(--height);
        height: var(--height);
        font: 400 16px "Varela Round", sans-serif;
        color: var(--text-color);
        border: 0;
        box-sizing: border-box;
        outline: none;
        padding: 0 0 0 40px;
        transition: width 0.6s ease;
        z-index: 10;
        opacity: 0;
        cursor: pointer;
      }
      .search input[type=text]:focus {
        z-index: 0;
        opacity: 1;
        width: var(--width);
      }
      .search input[type=text]:focus ~ .symbol::before {
        width: 0%;
      }
      .search input[type=text]:focus ~ .symbol:after {
        -webkit-clip-path: inset(0% 0% 0% 100%);
                clip-path: inset(0% 0% 0% 100%);
        transition: -webkit-clip-path 0.04s linear 0.105s;
        transition: clip-path 0.04s linear 0.105s;
        transition: clip-path 0.04s linear 0.105s, -webkit-clip-path 0.04s linear 0.105s;
      }
      .search input[type=text]:focus ~ .symbol .cloud {
        top: -30px;
        left: -30px;
        transform: translate(0, 0);
        transition: all 0.6s ease;
      }
      .search input[type=text]:focus ~ .symbol .lens {
        top: 20px;
        left: 15px;
        transform: translate(0, 0);
        fill: var(--primary-color);
        transition: top 0.5s ease 0.1s, left 0.5s ease 0.1s, fill 0.3s ease;
      }
      .search .symbol {
        height: 100%;
        width: 100%;
        position: absolute;
        top: 0;
        z-index: 1;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .search .symbol:before {
        content: "";
        position: absolute;
        right: 0;
        width: 100%;
        height: 100%;
        background: var(--primary-color);
        z-index: -1;
        transition: width 0.6s ease;
      }
      .search .symbol:after {
        content: "";
        position: absolute;
        top: 21px;
        left: 21px;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background: var(--primary-color);
        z-index: 1;
        -webkit-clip-path: inset(0% 0% 0% 0%);
                clip-path: inset(0% 0% 0% 0%);
        transition: -webkit-clip-path 0.04s linear 0.225s;
        transition: clip-path 0.04s linear 0.225s;
        transition: clip-path 0.04s linear 0.225s, -webkit-clip-path 0.04s linear 0.225s;
      }
      .search .symbol .cloud,
      .search .symbol .lens {
        position: absolute;
        fill: #fff;
        stroke: none;
        top: 50%;
        left: 50%;
      }
      .search .symbol .cloud {
        width: 35px;
        height: 32px;
        transform: translate(-50%, -60%);
        transition: all 0.6s ease;
      }
      .search .symbol .lens {
        fill: #fff;
        width: 16px;
        height: 16px;
        z-index: 2;
        top: 24px;
        left: 24px;
        transition: top 0.3s ease, left 0.3s ease, fill 0.2s ease 0.2s;
      }
      
    #icon-perfil{
        margin-left: 40px;
        width: 50px;
        height: 50px;
        cursor: crosshair;
    }
  </style>
        <header id="header-home">
        <img src="/assets/icons/logo.png" alt="Logo" class="logo">
        <nav class="navigation-home">
            <a href="filmes.html">Filmes</a>
            <a href="#">Categorias</a>
            <a href="plano-page.html">Planos</a>
            <div class="search">
                <input type="text" placeholder="search" />
                <div class="symbol">
                  <svg class="cloud">
                    <use xlink:href="#cloud" />
                  </svg>
                  <svg class="lens">
                    <use xlink:href="#lens" />
                  </svg>
                </div>
              </div>
            <img src="/assets/icons/perfil.png" alt="icone" id="icon-perfil">
        </nav>
    </header>
    <svg xmlns="http://www.w3.org/2000/svg" style="display: none;">
        <symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35 35" id="cloud">
          <path d="M31.714,25.543c3.335-2.17,4.27-6.612,2.084-9.922c-1.247-1.884-3.31-3.077-5.575-3.223h-0.021
          C27.148,6.68,21.624,2.89,15.862,3.931c-3.308,0.597-6.134,2.715-7.618,5.708c-4.763,0.2-8.46,4.194-8.257,8.919
          c0.202,4.726,4.227,8.392,8.991,8.192h4.873h13.934C27.784,26.751,30.252,26.54,31.714,25.543z" />
        </symbol>
        <symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" id="lens">
          <path d="M15.656,13.692l-3.257-3.229c2.087-3.079,1.261-7.252-1.845-9.321c-3.106-2.068-7.315-1.25-9.402,1.83
          s-1.261,7.252,1.845,9.32c1.123,0.748,2.446,1.146,3.799,1.142c1.273-0.016,2.515-0.39,3.583-1.076l3.257,3.229
          c0.531,0.541,1.404,0.553,1.95,0.025c0.009-0.008,0.018-0.017,0.026-0.025C16.112,15.059,16.131,14.242,15.656,13.692z M2.845,6.631
          c0.023-2.188,1.832-3.942,4.039-3.918c2.206,0.024,3.976,1.816,3.951,4.004c-0.023,2.171-1.805,3.918-3.995,3.918
          C4.622,10.623,2.833,8.831,2.845,6.631L2.845,6.631z" />
        </symbol>
      </svg>  
      `;
    }
  }
  
  customElements.define("navbar-2", Header);