class Footer extends HTMLElement {
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
        
        .wrapper section .item0,
        .item1,
        .item2,
        .item3,
        .item4,
        .item5,
        .item6,
        .item7{
            padding: 0 2px;
            transition: 250ms all;
            cursor: pointer;
        }
        
        .wrapper section .item0:hover,
        .item1:hover,
        .item2:hover,
        .item3:hover,
        .item4:hover,
        .item5:hover,
        .item6:hover,
        .item7:hover{
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
        
        .imgFilm {
            width: 341px;
            height: 192px;
            background-size: cover;
        }
        
        </style>
        <div class="centerFilms">
    <div class="wrapper">
        <section id="section1">
            <div class="item0">
                <img src="https://occ-0-1567-1123.1.nflxso.net/dnm/api/v5/rendition/412e4119fb212e3ca9f1add558e2e7fed42f8fb4/AAAABRvngexxF8H1-OzRWFSj6ddD-aB93tTBP9kMNz3cIVfuIfLEP1E_0saiNAwOtrM6xSOXvoiSCMsihWSkW0dq808-R7_lBnr6WHbjkKBX6I3sD0uCcS8kSPbRjEDdG8CeeVXEAEV6spQ.webp"
                    alt="film image">
            </div>
            <div class="item1">
                <img src="https://occ-0-243-299.1.nflxso.net/dnm/api/v5/rendition/a76057bcfd003711a76fb3985b1f2cf74beee3b8/AAAABVxuRB932hvre-XP0gh6ar5ztoR3Oe3QjKHkyvcDnRak2MKXOrx5H7mFQSvggefMFOppwEs7ZCCpiqrJ_CYGvtvYB9NpU4SWUtNO6uV2u-DTID267AcHjHcGvGBQJ1ufddDkxcGOZyi5MlOQ5QUmBun4652FbYUnib3zMYQDgcna_Pvz8y_HO5fbokxezrRR1JZAAiqFSQ.jpg"
                    alt="film image">
            </div>
            <div class="item2">
                <img src="https://occ-0-243-299.1.nflxso.net/dnm/api/v5/rendition/412e4119fb212e3ca9f1add558e2e7fed42f8fb4/AAAABZEK-7pZ1H5FD4cTyUb9qB_KeyJGz5p-kfPhCFv4GU_3mbdm8Xfsy4IBchlG9PFNdGff8cBNPaeMra72VFnot41nt0y3e8RLgaVwwh3UvyM2H2_MkmadWbQUeGuf811K7-cxJJh7gA.jpg"
                    alt="film image">
            </div>
            <div class="item3">
                <img src="https://occ-0-243-299.1.nflxso.net/dnm/api/v5/rendition/412e4119fb212e3ca9f1add558e2e7fed42f8fb4/AAAABQCoK53qihwVPLRxPEDX98nyYpGbxgi5cc0ZOM4iHQu7KQvtgNyaNM5PsgI0vy5g3rLPZdjGCFr1EggrCPXpL77p2H08jV0tNEmIfs_e8KUfvBJ6Ay5nM4UM1dl-58xA6t1swmautOM.webp"
                    alt="film image">
            </div>
            <div class="item4">
                <img src="/assets/films/A-Lei-da-Noite-.jpg" class="imgFilm" alt="film image">
            </div>
            <div class="item5">
                <img src="/assets/films/smbof12.jpg" class="imgFilm"
                    alt="film image">
            </div>
            <div class="item6">
                <img src="/assets/films/wandinha.png" class="imgFilm"
                    alt="film image">
            </div>
            <div class="item7">
                <img src="/assets/films/the-hobbit-the-desolation-of-smaug-lord-of-the-rings-35059156-3547-2270.jpg" class="imgFilm"
                    alt="film image">
            </div>
            
        </section>
    </div>
</div>
<script>
`;
    }
}

customElements.define("carrosel-1", Footer);
