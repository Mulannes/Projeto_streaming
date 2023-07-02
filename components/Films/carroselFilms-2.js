class span extends HTMLElement {
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
        
        .wrapper section
        item8:hover,
        .item9,
        .item10,
        .item11,
        .item12,
        .item13,
        .item14,
        .item15 {
            padding: 0 2px;
            transition: 250ms all;
            cursor: pointer;
        }
        
        .wrapper section 
        item8:hover,
        .item9:hover,
        .item10:hover,
        .item11:hover,
        .item12:hover,
        .item13:hover,
        .item14:hover,
        .item15:hover {
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
            <div class="item0">
                <img src="/assets/films/ADAOpipocasclub-e1662577756810.webp" class="imgFilm"
                    alt="film image">
            </div>
            <div class="item9">
                <img src="/assets/films/AAAABVGsTpARGmj4ZtZCp60ddhUgIFZWLbYkQictokvcBwkFUhDnOlujRaUqiwf-qVzPlO-dZ4iI-_dE6pjmsoKGXwTL-pVjYhcsjRzW61xRrsDELQlTHWyxQ278-mpqUWUM1gkilg.jpg" class="imgFilm"
                    alt="film image">
            </div>
            <div class="item10">
                <img src="/assets/films/AAAABaaOMiboSYEjO5NqFOrkatZE9VDTsN_E3SCFO8tR98BlU6hsg4Gn_QyCxp504MwI7H12R-vmBgWsImMcp3Z7layXjYFuOmIyb0K6.jpg" class="imgFilm"
                    alt="film image">
            </div>
            <div class="item11">
                <img src="/assets/films/50.webp" class="imgFilm"
                    alt="film image">
            </div>
            <div class="item12">
                <img src="/assets/films/peaky-blinders.jpg" class="imgFilm"
                    alt="film image">
            </div>
            <div class="item13">
                <img src="/assets/films/fun-FUN-CBY-JPN_S1-Full-Image_GalleryCover-en-US-1489784785929._UR19201080_RI_.jpg" class="imgFilm"
                    alt="film image">
            </div>
            <div class="item14">
                <img src="/assets/films/cover-desktop@1x-e6d6aaa1.jpg" class="imgFilm"
                    alt="film image">
            </div>
            <div class="item15">
                <img src="/assets/films/the-witcher-season-3-netflix-techtudo-01.webp" class="imgFilm"
                    alt="film image">
            </div>
        </section>
    </div>
</div>
`;
    }
}

customElements.define("carrosel-2", span);
