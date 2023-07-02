class p extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <style>
        .wrapper {
            width: 75%;
            display: flex;
            justify-content: center;
            align-items: center;
            overflow: hidden;
            scroll-behavior: smooth;
        }
        
        .centerFilms {
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        
        .wrapper section {
            width: 100%;
            position: relative;
            display: grid;
            place-content: center;
            grid-template-columns: repeat(4, auto);
            margin: 20px 0px;
        }
        
        .wrapper section .item16, .item17, .item18, .item19, .item20 , .item21 , .item22, .item23{
            padding: 0 2px;
            transition: 250ms all;
            cursor: pointer;
        }
        
        .wrapper section .item16:hover, .item17:hover, .item18:hover, .item19:hover, .item20:hover , .item21:hover , .item22:hover , .item23:hover{
            margin: 0 40px;
            transform: scale(1.2);
        }
        
        .wrapper section a {
            position: absolute;
            color: #fff;
            text-decoration: none;
            font-size: 6em;
            background: black;
            width: 80px;
            padding: 20px;
            text-align: center;
            z-index: 1;
        }
        
        .wrapper section a:nth-of-type(1) {
            top: 0;
            bottom: 0;
            left: 0;
            background: linear-gradient(-90deg, rgba(0, 0, 0, 0) 0%, black 100%);
        }
        
        .wrapper section a:nth-of-type(2) {
            top: 0;
            bottom: 0;
            right: 0;
            background: linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, black 100%);
        }
        
        </style>
        <div class="centerFilms">
    <div class="wrapper">
        <section id="section1">
            <div class="item16">
                <img src="/assets/films/1ecde018e863e2aaee31f00a23378c35.jpe" class="imgFilm"
                    alt="film image">
            </div>
            <div class="item17">
                <img src="/assets/films/AAAABVGsTpARGmj4ZtZCp60ddhUgIFZWLbYkQictokvcBwkFUhDnOlujRaUqiwf-qVzPlO-dZ4iI-_dE6pjmsoKGXwTL-pVjYhcsjRzW61xRrsDELQlTHWyxQ278-mpqUWUM1gkilg.jpg" class="imgFilm"
                    alt="film image">
            </div>
            <div class="item18">
                <img src="/assets/films/AAAABaaOMiboSYEjO5NqFOrkatZE9VDTsN_E3SCFO8tR98BlU6hsg4Gn_QyCxp504MwI7H12R-vmBgWsImMcp3Z7layXjYFuOmIyb0K6.jpg" class="imgFilm"
                    alt="film image">
            </div>
            <div class="item19">
                <img src="/assets/films/cover-desktop@1x-e6d6aaa1.jpg" class="imgFilm"
                    alt="film image">
            </div>
            <div class="item20">
                <img src="/assets/films/the-witcher-season-3-netflix-techtudo-01.webp" class="imgFilm"
                alt="film image"
                    alt="film image">
            </div>
            <div class="item21">
                <img src="/assets/films/wandinha.png" class="imgFilm"
                    alt="film image">
            </div>
            <div class="item22">
                <img src="/assets/films/1_fPjV96mCyaU4l_d4b_kluQ.png" class="imgFilm"
                    alt="film image">
            </div>
            <div class="item23">
                <img src="/assets/films/d99512cf70c4025e6e31e9ccc1bd2a90615c34cdfdbb179d18f260b69bfad1de._UY500_UX667_RI_TTW_.jpg" class="imgFilm"
                    alt="film image">
            </div>
        </section>
    </div>
</div>
`;
    }
}

customElements.define("historico-1", p);
