$(document).ready(function(){
    $('.home-slider').slick({
        slidesToShow: 1, 
        slidesToScroll: 1,
        infinite: false,
        prevArrow: `
            <div class='prev-arrow arrow'>
                <svg xmlns="http://www.w3.org/2000/svg" width="11.96" height="17.548" viewBox="0 0 11.96 17.548"><g data-name="Grupo 75"><path data-name="Caminho 145" d="M11.807.321a.753.753 0 0 0-1.083-.159L.309 8.134a.808.808 0 0 0 0 1.271l10.415 7.985a.76.76 0 0 0 1.083-.159.813.813 0 0 0-.155-1.112L2.062 8.77l9.59-7.349a.8.8 0 0 0 .155-1.1" fill="#5f86e3"/></g></svg>
            </div>
        `,
        nextArrow: `
            <div class='next-arrow arrow'>
                <svg xmlns="http://www.w3.org/2000/svg" width="11.96" height="17.548" viewBox="0 0 11.96 17.548" transform="rotate(180)"><g data-name="Grupo 75"><path data-name="Caminho 145" d="M11.807.321a.753.753 0 0 0-1.083-.159L.309 8.134a.808.808 0 0 0 0 1.271l10.415 7.985a.76.76 0 0 0 1.083-.159.813.813 0 0 0-.155-1.112L2.062 8.77l9.59-7.349a.8.8 0 0 0 .155-1.1" fill="#5f86e3"/></g></svg>
            </div>
        `,
    });

    $('.sobre-nos-slider .slider').slick({
        slidesToShow: 1, 
        slidesToScroll: 1,
        infinite: false,
        prevArrow: `
            <div class='prev-arrow arrow'>
                <svg xmlns="http://www.w3.org/2000/svg" width="11.96" height="17.548" viewBox="0 0 11.96 17.548"><g data-name="Grupo 75"><path data-name="Caminho 145" d="M11.807.321a.753.753 0 0 0-1.083-.159L.309 8.134a.808.808 0 0 0 0 1.271l10.415 7.985a.76.76 0 0 0 1.083-.159.813.813 0 0 0-.155-1.112L2.062 8.77l9.59-7.349a.8.8 0 0 0 .155-1.1" fill="#5f86e3"/></g></svg>
            </div>
        `,
        nextArrow: `
            <div class='next-arrow arrow'>
                <svg xmlns="http://www.w3.org/2000/svg" width="11.96" height="17.548" viewBox="0 0 11.96 17.548" transform="rotate(180)"><g data-name="Grupo 75"><path data-name="Caminho 145" d="M11.807.321a.753.753 0 0 0-1.083-.159L.309 8.134a.808.808 0 0 0 0 1.271l10.415 7.985a.76.76 0 0 0 1.083-.159.813.813 0 0 0-.155-1.112L2.062 8.77l9.59-7.349a.8.8 0 0 0 .155-1.1" fill="#5f86e3"/></g></svg>
            </div>
        `,
    });

    $('.estrutura .slider-content').slick({
        slidesToShow: 1, 
        slidesToScroll: 1,
        infinite: false,
        asNavFor: '.estrutura .slider-thumbnails',
        prevArrow: `
            <div class='prev-arrow arrow'>
                <svg xmlns="http://www.w3.org/2000/svg" width="11.96" height="17.548" viewBox="0 0 11.96 17.548"><g data-name="Grupo 75"><path data-name="Caminho 145" d="M11.807.321a.753.753 0 0 0-1.083-.159L.309 8.134a.808.808 0 0 0 0 1.271l10.415 7.985a.76.76 0 0 0 1.083-.159.813.813 0 0 0-.155-1.112L2.062 8.77l9.59-7.349a.8.8 0 0 0 .155-1.1" fill="#5f86e3"/></g></svg>
            </div>
        `,
        nextArrow: `
            <div class='next-arrow arrow'>
                <svg xmlns="http://www.w3.org/2000/svg" width="11.96" height="17.548" viewBox="0 0 11.96 17.548" transform="rotate(180)"><g data-name="Grupo 75"><path data-name="Caminho 145" d="M11.807.321a.753.753 0 0 0-1.083-.159L.309 8.134a.808.808 0 0 0 0 1.271l10.415 7.985a.76.76 0 0 0 1.083-.159.813.813 0 0 0-.155-1.112L2.062 8.77l9.59-7.349a.8.8 0 0 0 .155-1.1" fill="#5f86e3"/></g></svg>
            </div>
        `,
    });

    $('.estrutura .slider-thumbnails').slick({
        slidesToShow: 2, 
        slidesToScroll: 1,
        infinite: false,
        dots: false,
        arrows: false,
        centerMode: false,
        focusOnSelect: true,
        asNavFor: '.estrutura .slider-content',
        prevArrow: `
            <div class='prev-arrow arrow'>
                <svg xmlns="http://www.w3.org/2000/svg" width="11.96" height="17.548" viewBox="0 0 11.96 17.548"><g data-name="Grupo 75"><path data-name="Caminho 145" d="M11.807.321a.753.753 0 0 0-1.083-.159L.309 8.134a.808.808 0 0 0 0 1.271l10.415 7.985a.76.76 0 0 0 1.083-.159.813.813 0 0 0-.155-1.112L2.062 8.77l9.59-7.349a.8.8 0 0 0 .155-1.1" fill="#5f86e3"/></g></svg>
            </div>
        `,
        nextArrow: `
            <div class='next-arrow arrow'>
                <svg xmlns="http://www.w3.org/2000/svg" width="11.96" height="17.548" viewBox="0 0 11.96 17.548" transform="rotate(180)"><g data-name="Grupo 75"><path data-name="Caminho 145" d="M11.807.321a.753.753 0 0 0-1.083-.159L.309 8.134a.808.808 0 0 0 0 1.271l10.415 7.985a.76.76 0 0 0 1.083-.159.813.813 0 0 0-.155-1.112L2.062 8.77l9.59-7.349a.8.8 0 0 0 .155-1.1" fill="#5f86e3"/></g></svg>
            </div>
        `,
        responsive:[
            {
                breakpoint: 768,
                slidesToShow: 6,
            }
        ]
    });

    $('.depoimentos-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
        prevArrow: `
            <div class='prev-arrow arrow'>
                <svg xmlns="http://www.w3.org/2000/svg" width="11.96" height="17.548" viewBox="0 0 11.96 17.548"><g data-name="Grupo 75"><path data-name="Caminho 145" d="M11.807.321a.753.753 0 0 0-1.083-.159L.309 8.134a.808.808 0 0 0 0 1.271l10.415 7.985a.76.76 0 0 0 1.083-.159.813.813 0 0 0-.155-1.112L2.062 8.77l9.59-7.349a.8.8 0 0 0 .155-1.1" fill="#5f86e3"/></g></svg>
            </div>
        `,
        nextArrow: `
            <div class='next-arrow arrow'>
                <svg xmlns="http://www.w3.org/2000/svg" width="11.96" height="17.548" viewBox="0 0 11.96 17.548" transform="rotate(180)"><g data-name="Grupo 75"><path data-name="Caminho 145" d="M11.807.321a.753.753 0 0 0-1.083-.159L.309 8.134a.808.808 0 0 0 0 1.271l10.415 7.985a.76.76 0 0 0 1.083-.159.813.813 0 0 0-.155-1.112L2.062 8.77l9.59-7.349a.8.8 0 0 0 .155-1.1" fill="#5f86e3"/></g></svg>
            </div>
        `,
        responsive:[
            {
                breakpoint: 768,
                slidesToShow: 3,
            }
        ]
    });

    $('.corpo-clinico .slider-corpo').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
        centerMode: false,
        prevArrow: `
            <div class='prev-arrow arrow'>
                <svg xmlns="http://www.w3.org/2000/svg" width="11.96" height="17.548" viewBox="0 0 11.96 17.548"><g data-name="Grupo 75"><path data-name="Caminho 145" d="M11.807.321a.753.753 0 0 0-1.083-.159L.309 8.134a.808.808 0 0 0 0 1.271l10.415 7.985a.76.76 0 0 0 1.083-.159.813.813 0 0 0-.155-1.112L2.062 8.77l9.59-7.349a.8.8 0 0 0 .155-1.1" fill="#5f86e3"/></g></svg>
            </div>
        `,
        nextArrow: `
            <div class='next-arrow arrow'>
                <svg xmlns="http://www.w3.org/2000/svg" width="11.96" height="17.548" viewBox="0 0 11.96 17.548" transform="rotate(180)"><g data-name="Grupo 75"><path data-name="Caminho 145" d="M11.807.321a.753.753 0 0 0-1.083-.159L.309 8.134a.808.808 0 0 0 0 1.271l10.415 7.985a.76.76 0 0 0 1.083-.159.813.813 0 0 0-.155-1.112L2.062 8.77l9.59-7.349a.8.8 0 0 0 .155-1.1" fill="#5f86e3"/></g></svg>
            </div>
        `,
        responsive:[
            {
                breakpoint: 768,
                slidesToShow: 3,
            }
        ]
    });

    document.querySelector('.menu-opener').addEventListener('click', () => {
        document.querySelector('nav.menu').classList.add('active')
    })

    document.querySelector('.close-button').addEventListener('click', () => {
        document.querySelector('nav.menu').classList.remove('active')
    })

    const montaBlog = () => {
        // ALTERAR PARA O BLOG QUE DESEJA INTEGRAR
        // EXEMPLO https://blog.dna360.com.br/AQUI-CONTINUA-O-MESMO
        const apiURL = 'https://neoimagemradiologia.com.br/blog/wp-json/wp/v2/posts/?per_page=4';


        fetch(apiURL)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            data.forEach(item => {
                // AQUI É O CONSUMO DA API DE DADOS PARA RECUPERAR A FOTO DO BLOG
                const mediaAPI = `https://neoimagemradiologia.com.br/blog/wp-json/wp/v2/media/${item.featured_media}`
                let globalImagem = fetch(mediaAPI)
                    .then(response => response.json());

                globalImagem.then(result => montaBlog(item, result));

            })
        })

        // FUNÇÃO QUE MONTA O POST, RECEBENDO 2 PARAMETROS monte como desejar
        function montaBlog(post, teste) {
            var template = `
                <a href="${post.link}" class="blog-post">
                    <img class="post-image" src="${teste.source_url}" loading="lazy" width="300" height="170" />
                    <div class="post-content">
                        <h2 class="title">${post.title.rendered}</h2>
                        ${post.excerpt.rendered}
                    </div>
                </a>
            `;
        
            document.querySelector("#blog-section").innerHTML += template;
        }
    }

    montaBlog();
});