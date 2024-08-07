/*VERIFICAR SE JÁ HOUVE UM TEMA ESCOLHIDO*/
let dialog = document.querySelector("#jb__dialog");
const value = getComputedStyle(document.documentElement).getPropertyValue('--teste');
const modeColor = getComputedStyle(document.querySelector("#jb_top_sectionButton")).getPropertyValue('align-items');
const ModeLight = document.querySelector("#ModeLight");
const ModeDefault = document.querySelector("#ModeDefault");
const ModeDark = document.querySelector("#ModeDark");
const imgLightMode = document.querySelector(".lightMode");
const imgDefaultMode = document.querySelector(".defaultMode");
const imgDarkMode = document.querySelector(".darkMode");


//================================Apresenta o dialog e adiciona o conteúdo nele (Minha foto)
function ampliador (conteudo) {
    dialog.style.display = "flex";
    
    let divApresentacao = document.querySelector("#jb__ampliar__conteudo");

    //CONTTROLA OS CONTEÚDOS QUE SERÃO APRESENTADOS NO DIALOG
    if (conteudo == 'foto') {
            divApresentacao.innerHTML = '<img class="jb-top-imagem jb-top-imagem-ampliada" src="assets/minha-foto/minhafoto.webp" alt="Foto de Jobson ampliada">';


    }

    //FECHAR O DIALOG
    dialog.addEventListener("click", () => { dialog.style.display = "none" });
}

//=================================Verificar se já existe um tema pré-definido
let themeCurrent;
if (!localStorage.getItem(themeCurrent)) {
    
        /*MUDAR O TEMA DO PORTFÓLIO DE ACORDO COM O HORÁRIO*/
        let data = new Date();
        let horario = data.getHours();

        if ((horario >= 6) && (horario < 12)) {

            localStorage.setItem(themeCurrent, 'light');
            imgLightMode.classList += " chosen";

            document.documentElement.style.setProperty('--jb-cor-primaria', '#ffffff');
            document.documentElement.style.setProperty('--jb-cor-secundaria', '#021c8b');
            document.documentElement.style.setProperty('--jb-cor-tercearia', '#191013');
            document.documentElement.style.setProperty('--jb-cor-textos', '#000');
            document.documentElement.style.setProperty('--jb-background-header-footer', '#ffffff');
            document.documentElement.style.setProperty('--jb-cor-buttons', '#8d8882');
            document.documentElement.style.setProperty('--jb-cor-chosen', '#ffffff');

            //MUDAR IMAGEM
            ModeLight.src = "assets/modosDeCor/light_mode/sol_light_mode.png";
            ModeDefault.src = "assets/modosDeCor/light_mode/default_light_mode.png";
            ModeDark.src = "assets/modosDeCor/light_mode/lua_light_mode.png";
            
            imgDefaultMode.classList.remove("chosen");
            imgDarkMode.classList.remove("chosen");
            imgLightMode.classList += " chosen";

        }
        else if ((horario >= 18) || (horario < 6)){

            localStorage.setItem(themeCurrent, 'dark');
            imgDarkMode.classList += " chosen";

            document.documentElement.style.setProperty('--jb-cor-primaria', '#000');
            document.documentElement.style.setProperty('--jb-cor-secundaria', '#fc0000');
            document.documentElement.style.setProperty('--jb-cor-tercearia', '#191013');
            document.documentElement.style.setProperty('--jb-cor-textos', '#bbbbbb');
            document.documentElement.style.setProperty('--jb-background-header-footer', '#000');
            document.documentElement.style.setProperty('--jb-cor-buttons', 'rgba(255, 255, 255, .2)');
            document.documentElement.style.setProperty('--jb-cor-chosen', '#000000');

            //MUDAR IMAGEM
            ModeLight.src = "assets/modosDeCor/dark_mode/sol_dark_mode.png";
            ModeDefault.src = "assets/modosDeCor/dark_mode/default_dark_mode.png";
            ModeDark.src = "assets/modosDeCor/dark_mode/lua_dark_mode.png";

            imgLightMode.classList.remove("chosen");
            imgDefaultMode.classList.remove("chosen");
            imgDarkMode.classList += " chosen";
        }
        else {
            
            localStorage.setItem(themeCurrent, 'default');
            imgDefaultMode.classList += " chosen";

            document.documentElement.style.setProperty('--jb-cor-primaria', '#000e33');
            document.documentElement.style.setProperty('--jb-cor-secundaria', '#f4f4f2');
            document.documentElement.style.setProperty('--jb-cor-tercearia', '#191013');
            document.documentElement.style.setProperty('--jb-cor-textos', '#f4f4f2');
            document.documentElement.style.setProperty('--jb-background-header-footer', 'rgba(0, 0, 0, .3)');
            document.documentElement.style.setProperty('--jb-cor-buttons', '#8989898c');
            document.documentElement.style.setProperty('--jb-cor-chosen', 'var(--jb-cor-primaria)');

            //MUDAR IMAGEM
            ModeLight.src = "assets/modosDeCor/default_mode/lightMode.png";
            ModeDefault.src = "assets/modosDeCor/default_mode/defaultMode.png";
            ModeDark.src = "assets/modosDeCor/default_mode/darkMode.png";

            imgLightMode.classList.remove("chosen");
            imgDarkMode.classList.remove("chosen");
            imgDefaultMode.classList += " chosen";
        }
}
else {
    switch (localStorage.getItem(themeCurrent)) {
        case 'light':
            //MUDAR CORES
            document.documentElement.style.setProperty('--jb-cor-primaria', '#ffffff');
            document.documentElement.style.setProperty('--jb-cor-secundaria', '#021c8b');
            document.documentElement.style.setProperty('--jb-cor-tercearia', '#191013');
            document.documentElement.style.setProperty('--jb-cor-textos', '#000');
            document.documentElement.style.setProperty('--jb-background-header-footer', '#ffffff');
            document.documentElement.style.setProperty('--jb-cor-buttons', '#8d8882');
            document.documentElement.style.setProperty('--jb-cor-chosen', '#ffffff');

            //MUDAR IMAGEM
            ModeLight.src = "assets/modosDeCor/light_mode/sol_light_mode.png";
            ModeDefault.src = "assets/modosDeCor/light_mode/default_light_mode.png";
            ModeDark.src = "assets/modosDeCor/light_mode/lua_light_mode.png";
            
            imgDefaultMode.classList.remove("chosen");
            imgDarkMode.classList.remove("chosen");
            imgLightMode.classList += " chosen";
            break;

        case 'default':
            document.documentElement.style.setProperty('--jb-cor-primaria', '#000e33');
            document.documentElement.style.setProperty('--jb-cor-secundaria', '#f4f4f2');
            document.documentElement.style.setProperty('--jb-cor-tercearia', '#191013');
            document.documentElement.style.setProperty('--jb-cor-textos', '#f4f4f2');
            document.documentElement.style.setProperty('--jb-background-header-footer', 'rgba(0, 0, 0, .3)');
            document.documentElement.style.setProperty('--jb-cor-buttons', '#8989898c');
            document.documentElement.style.setProperty('--jb-cor-chosen', 'var(--jb-cor-primaria)');

            //MUDAR IMAGEM
            ModeLight.src = "assets/modosDeCor/default_mode/lightMode.png";
            ModeDefault.src = "assets/modosDeCor/default_mode/defaultMode.png";
            ModeDark.src = "assets/modosDeCor/default_mode/darkMode.png";

            imgLightMode.classList.remove("chosen");
            imgDarkMode.classList.remove("chosen");
            imgDefaultMode.classList += " chosen";
            break;

        case 'dark':
            document.documentElement.style.setProperty('--jb-cor-primaria', '#000');
            document.documentElement.style.setProperty('--jb-cor-secundaria', '#fc0000');
            document.documentElement.style.setProperty('--jb-cor-tercearia', '#191013');
            document.documentElement.style.setProperty('--jb-cor-textos', '#bbbbbb');
            document.documentElement.style.setProperty('--jb-background-header-footer', '#000');
            document.documentElement.style.setProperty('--jb-cor-buttons', 'rgba(255, 255, 255, .2)');
            document.documentElement.style.setProperty('--jb-cor-chosen', '#000000');

            //MUDAR IMAGEM
            ModeLight.src = "assets/modosDeCor/dark_mode/sol_dark_mode.png";
            ModeDefault.src = "assets/modosDeCor/dark_mode/default_dark_mode.png";
            ModeDark.src = "assets/modosDeCor/dark_mode/lua_dark_mode.png";

            imgLightMode.classList.remove("chosen");
            imgDefaultMode.classList.remove("chosen");
            imgDarkMode.classList += " chosen";
            break;
    }
}

//=================================Trocar o tema (escolha o usuário)
function mudoModeColor (theme) {

    //VERIFICA O MODO DE TEMA SOLICITADO E MUDA
    switch (theme) {
        case 'light':
            if (localStorage.getItem(themeCurrent) == 'light') {
                return
            }
            else {
                //MUDAR CORES
                document.documentElement.style.setProperty('--jb-cor-primaria', '#ffffff');
                document.documentElement.style.setProperty('--jb-cor-secundaria', '#021c8b');
                document.documentElement.style.setProperty('--jb-cor-tercearia', '#191013');
                document.documentElement.style.setProperty('--jb-cor-textos', '#000');
                document.documentElement.style.setProperty('--jb-background-header-footer', '#ffffff');
                document.documentElement.style.setProperty('--jb-cor-buttons', '#8d8882');
                document.documentElement.style.setProperty('--jb-cor-chosen', '#ffffff');

                //MUDAR IMAGEM
                ModeLight.src = "assets/modosDeCor/light_mode/sol_light_mode.png";
                ModeDefault.src = "assets/modosDeCor/light_mode/default_light_mode.png";
                ModeDark.src = "assets/modosDeCor/light_mode/lua_light_mode.png";
                
                imgDefaultMode.classList.remove("chosen");
                imgDarkMode.classList.remove("chosen");
                imgLightMode.classList += " chosen";

                //GRAVAR O TEMA ESCOLHIDO
                localStorage.setItem(themeCurrent, 'light');
            }
            break;

        case 'default':

            if (localStorage.getItem(themeCurrent) == 'default') {
                return
            }
            else {

                document.documentElement.style.setProperty('--jb-cor-primaria', '#000e33');
                document.documentElement.style.setProperty('--jb-cor-secundaria', '#f4f4f2');
                document.documentElement.style.setProperty('--jb-cor-tercearia', '#191013');
                document.documentElement.style.setProperty('--jb-cor-textos', '#f4f4f2');
                document.documentElement.style.setProperty('--jb-background-header-footer', 'rgba(0, 0, 0, .3)');
                document.documentElement.style.setProperty('--jb-cor-buttons', '#8989898c');
                document.documentElement.style.setProperty('--jb-cor-chosen', 'var(--jb-cor-primaria)');

                //MUDAR IMAGEM
                ModeLight.src = "assets/modosDeCor/default_mode/lightMode.png";
                ModeDefault.src = "assets/modosDeCor/default_mode/defaultMode.png";
                ModeDark.src = "assets/modosDeCor/default_mode/darkMode.png";

                imgLightMode.classList.remove("chosen");
                imgDarkMode.classList.remove("chosen");
                imgDefaultMode.classList += " chosen";

                localStorage.setItem(themeCurrent, 'default');
            }
            break;

        case 'dark':
            
            if (localStorage.getItem(themeCurrent) == 'dark') {
                return
            }
            else {

                document.documentElement.style.setProperty('--jb-cor-primaria', '#000');
                document.documentElement.style.setProperty('--jb-cor-secundaria', '#fc0000');
                document.documentElement.style.setProperty('--jb-cor-tercearia', '#191013');
                document.documentElement.style.setProperty('--jb-cor-textos', '#bbbbbb');
                document.documentElement.style.setProperty('--jb-background-header-footer', '#000');
                document.documentElement.style.setProperty('--jb-cor-buttons', 'rgba(255, 255, 255, .2)');
                document.documentElement.style.setProperty('--jb-cor-chosen', '#000000');

                //MUDAR IMAGEM
                ModeLight.src = "assets/modosDeCor/dark_mode/sol_dark_mode.png";
                ModeDefault.src = "assets/modosDeCor/dark_mode/default_dark_mode.png";
                ModeDark.src = "assets/modosDeCor/dark_mode/lua_dark_mode.png";

                imgLightMode.classList.remove("chosen");
                imgDefaultMode.classList.remove("chosen");
                imgDarkMode.classList += " chosen";

                localStorage.setItem(themeCurrent, 'dark');
            }
            break;
    }
}

//=================================Mudar o idioma do portfólio

function trocarIdioma(sigla) {

    //Seleção de elementos
    const sobreMim = document.querySelector('#jb_sobreMim_texto');
    const mostrarIdiomas = document.querySelector('#buttonIdiomas');
    const lisIdiomas = document.querySelector('#collapseWidthExample');
        
    switch (sigla) {
        case 'pt':
            //Seleciona a bandeira de ingles
            var el = document.querySelector('#jbPortugues');
            
            
            //Remove o idioma da lista de seleção
            el.parentNode.removeChild(el);
            
            
            //Adiciona o idioma anterior de volta na lista de seleção
            lisIdiomas.innerHTML += `
            <div class="card card-body" id="jbIngles">
                <a href="javascript:trocarIdioma('en')" class="jb-idioma-link">
                <img src="assets/indiomas/Ingles.svg" alt="imagem idiomas" class="jb-idiomas-bandeira">
                </a>
            </div>`;

            //Adiciona ele como selecionado
            mostrarIdiomas.innerHTML = bandPortugues;

            //Fecha o seletor
            lisIdiomas.classList.remove("show");

            sobreMim.innerHTML = `&nbsp;&nbsp;Sou um rapaz calmo, esforçado e amante da tecnologia, procuro sempre aplicar meus conhecimentos da melhor forma possível em tudo que faço, para poder fornecer o melhor resultado possível e superar até minhas próprias expectativas.<br>
            &nbsp;&nbsp;Conheci o mundo da programação durante o ensino médio, onde iniciei um curso de lógica de programação, em Janeiro de 2022 comecei meus estudos de Análise e desenvolvimento de sistemas na UNIBRA-Centro Universitário Brasileiro, onde passei a amar ainda mais o mundo da programação.`;
            break;
            
        case 'en':
            //Seleciona a bandeira de ingles
            var el = document.querySelector('#jbIngles');
            
            
            //Remove o idioma da lista de seleção
            el.parentNode.removeChild(el);
            
            //Adiciona o idioma anterior de volta na lista de seleção
            lisIdiomas.innerHTML += `<div class="card card-body" id="jbPortugues">
            <a href="javascript:trocarIdioma('pt')" class="jb-idioma-link">
                <img src="assets/indiomas/Portugues.svg" alt="imagem idiomas" class="jb-idiomas-bandeira">
            </a>
            </div>`;

            //Adiciona ingles como selecionado
            mostrarIdiomas.innerHTML = bandIngles;

            //Fecha o seletor
            lisIdiomas.classList.remove("show");

            sobreMim.innerHTML = `&nbsp;&nbsp;I'm a calm, hard-working guy who loves technology, I always try to apply my knowledge in the best way possible in everything I do, to be able to provide the best possible result and exceed even my own expectations.<br>
            &nbsp;&nbsp;I discovered the world of programming during high school, where I started a programming logic course, in January 2022 I started my studies in Systems Analysis and Development at UNIBRA-Centro Universitário Brasileiro, where I came to love the world even more world of programming.`;
            break;
    }

}


function lerCookie(nome) {
    const cookies = document.cookie.split('; ');
    for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].split('=');
        if (cookie[0] === nome) {
            return cookie[1];
        }
    }
    return null;
}

//Verifica o idioma que foi selecionado previamente
if(lerCookie('googtrans') == "/auto/pt") {
    document.querySelector('#buttonIdiomas').innerHTML = `
        <div class="card card-body" id="jbPortugues">
            <a href="javascript:trocarIdioma('pt')" class="jb-idioma-link">
                <img src="assets/indiomas/Portugues.svg" alt="imagem idiomas" class="jb-idiomas-bandeira">
            </a>
        </div>
    `;
}
else if(lerCookie('googtrans') == "/auto/en") {
    document.querySelector('#buttonIdiomas').innerHTML = `
        <div class="card card-body" id="jbIngles">
            <a href="javascript:trocarIdioma('en')" class="jb-idioma-link">
                <img src="assets/indiomas/Ingles.svg" alt="imagem idiomas" class="jb-idiomas-bandeira">
            </a>
        </div>
    `;
}
