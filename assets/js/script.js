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
                settings: {
                    slidesToShow: 6,
                }
            }
        ]
    });

    $('.depoimentos-slider').slick({
        slidesToShow: 3,
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
                settings: {
                    slidesToShow: 1,
                }
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
                settings: { 
                    slidesToShow: 3,
                }
            }
        ]
    });

    document.querySelector('.menu-opener').addEventListener('click', () => {
        document.querySelector('nav.menu').classList.add('active')
    })

    document.querySelector('.close-button').addEventListener('click', () => {
        document.querySelector('nav.menu').classList.remove('active')
    })

    const montaBotao = () => {
        var button = document.createElement("div");

        button.innerHTML = `
            <a class="button float-fixed" href="/agendamento">
                <svg xmlns="http://www.w3.org/2000/svg" width="24.974" height="25.264" viewBox="0 0 24.974 25.264"><g data-name="Grupo 51" fill="#fff"><path data-name="Caminho 91" d="M24.103 2.323h-2.614a.871.871 0 1 0 0 1.742h1.742v19.457H1.742V4.065h2.325a.871.871 0 1 0 0-1.742h-3.2a.874.874 0 0 0-.871.871V24.39a.874.874 0 0 0 .871.871h23.236a.874.874 0 0 0 .871-.871V3.19a.874.874 0 0 0-.871-.867"/><path data-name="Caminho 92" d="M13.649 2.323h-2.468a.871.871 0 1 0 0 1.742h2.468a.871.871 0 1 0 0-1.742"/><path data-name="Caminho 93" d="M7.26 18.004H5.223a.874.874 0 0 0-.871.871v1.452a.874.874 0 0 0 .871.871h2.033a.874.874 0 0 0 .871-.871v-1.456a.874.874 0 0 0-.867-.867"/><path data-name="Caminho 94" d="M13.503 18.004h-2.182a.874.874 0 0 0-.871.871v1.452a.874.874 0 0 0 .871.871h2.178a.874.874 0 0 0 .871-.871v-1.456a.874.874 0 0 0-.867-.867"/><path data-name="Caminho 95" d="M8.131 14.08a.874.874 0 0 0-.871-.871H5.223a.874.874 0 0 0-.871.871v1.452a.874.874 0 0 0 .871.871h2.033a.874.874 0 0 0 .871-.871Z"/><path data-name="Caminho 96" d="M14.374 14.08a.874.874 0 0 0-.871-.871h-2.182a.874.874 0 0 0-.871.871v1.452a.874.874 0 0 0 .871.871h2.178a.874.874 0 0 0 .871-.871Z"/><path data-name="Caminho 97" d="M19.602 13.213h-2.033a.874.874 0 0 0-.871.871v1.452a.874.874 0 0 0 .871.871h2.033a.874.874 0 0 0 .871-.871V14.08a.874.874 0 0 0-.871-.867"/><path data-name="Caminho 98" d="M4.356 9.147v1.452a.874.874 0 0 0 .871.871H7.26a.874.874 0 0 0 .871-.871V9.147a.874.874 0 0 0-.871-.871H5.223a.874.874 0 0 0-.867.871"/><path data-name="Caminho 99" d="M14.374 9.147a.874.874 0 0 0-.871-.871h-2.182a.874.874 0 0 0-.871.871v1.452a.874.874 0 0 0 .871.871h2.178a.874.874 0 0 0 .871-.871Z"/><path data-name="Caminho 100" d="M20.473 9.147a.874.874 0 0 0-.871-.871h-2.033a.874.874 0 0 0-.871.871v1.452a.874.874 0 0 0 .871.871h2.033a.874.874 0 0 0 .871-.871Z"/><path data-name="Caminho 101" d="M7.84 5.808a.874.874 0 0 0 .871-.871V.871A.874.874 0 0 0 7.84 0h-.875a.874.874 0 0 0-.871.871v4.066a.874.874 0 0 0 .871.871Z"/><path data-name="Caminho 102" d="M17.859 0h-.875a.874.874 0 0 0-.871.871v4.066a.874.874 0 0 0 .871.871h.871a.874.874 0 0 0 .871-.871V.871A.874.874 0 0 0 17.859 0"/></g></svg>
                Agende agora
            </a>
        `;
        button.style = `position: fixed; bottom: 2rem; right: 2rem; z-index: 99`
        document.body.appendChild(button);
    }

    const montaBlog = () => {
        // ALTERAR PARA O BLOG QUE DESEJA INTEGRAR
        // EXEMPLO https://blog.dna360.com.br/AQUI-CONTINUA-O-MESMO
        const apiURL = 'https://neoimagemradiologia.com.br/blog/wp-json/wp/v2/posts/?per_page=4';


        fetch(apiURL)
        .then(response => response.json())
        .then(data => {
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
    montaBotao();
});