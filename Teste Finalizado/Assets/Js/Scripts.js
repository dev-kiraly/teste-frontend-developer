

// Variável que armazena as imagens e Headline que fica alternando na primeira seção.

var headline = [
    {   
        imgUrl : "./Assets/Img/Icons/rocket.png",
        h1 : "A sua empresa entre as <br> 3 PRIMEIRAS posições do Google.",
        p : "Solicite uma proposta sem compromisso"
    },
    {   
        imgUrl : "./Assets/Img/Icons/web.png",
        h1 : "Criação de sites RESPONSIVOS.",
        p : "Adaptável para Smartphones, Tablets e Ipads"
    },
    {
        imgUrl : "./Assets/Img/Icons/store.png",
        h1 : "Criação de loja virtual COMPLETA.",
        p : "Adaptável para Smartphones, Tablets e Ipads"
    },
    {
        imgUrl : "./Assets/Img/Icons/bulb.png",
        h1 : "Criação de LOGOTIPOS.",
        p : "A identidade visual perfeita para seu negócio"
    },
];

// Variável que vai armazenar os dados de quem preencher corretamente o formulário e enviar os dados para receber o contato dos especialistas.
var clients = [];

// Variáveis de indices para a troca de Headlines e Imagens da seção "Sobre"
var indexHeadline = 1;
var indexAbout = 1;





// Função que troca a Headline e imagens
function changeHeadline() {    
    let h1Headline = document.getElementById("h1Headline");
    let pHeadline = document.getElementById("pHeadline");
    let iconHeadline = document.getElementById("iconHeadline");
    
    if(indexHeadline == 3) {
        indexHeadline = 0;
    };

    h1Headline.innerHTML = headline[indexHeadline].h1;
    pHeadline.innerHTML = headline[indexHeadline].p;
    iconHeadline.src = headline[indexHeadline].imgUrl;

    indexHeadline++;
};

setInterval(changeHeadline, 5000);

// Função que troca as imagens da seção "Sobre"
function changeAboutImg() {
    
    let imgAbout = document.getElementById("imgAbout");

    if(indexAbout == 8) {
        indexAbout = 0;
    };

    imgAbout.src = "./Assets/Img/About/" + indexAbout + ".jpg";

    indexAbout++;
};

setInterval(changeAboutImg, 3500);






// Animações que fazem os elementos surgir ao rolar a página

// Recebe os elementos que serão animadas
const divAnime = document.querySelectorAll("[anime]");

// Função que adiciona ou não a classe que ativa a animação
const animeScroll = () => {
    const windowTop = window.pageYOffset + window.innerHeight * 0.8;
    divAnime.forEach((element) => {
        if (windowTop > element.offsetTop) {
            element.classList.add("animationOn");
        } else {
            element.classList.remove("animationOn");
        }
    })
}

// Função que observa a rolagem da página e chama a função acima
window.addEventListener("scroll", () => {
    animeScroll();
});

animeScroll();






// Const do botão submit do formulário
const btnSubmit = document.getElementById("submit");

// Observa quando é clicado no submit, quando clicado, chama a função que registra os dados na variável clients
btnSubmit.addEventListener("click", registerClient, false);

// Constantes recebem os elementos dos inputs
const clientName = document.getElementById("name");
const clientEmail = document.getElementById("email");
const clientPhone = document.getElementById("phone");
const clientMessage = document.getElementById("message");

// Função que recebe os valores verificados, e adiciona esses dados em um novo objeto dentro do array clients.
function newClient() {
    clients.push(
        {
            name : clientName.value,
            email : clientEmail.value,
            phone : clientPhone.value,
            message : clientMessage.value
        }
    );
}

// Função que recebe os valores dos inputs do formulário, verifica se o Nome, Email e Telefone estão preenchidos, e chama a função que registra esses valores em clients.
function registerClient() {
    if (clientName.value && clientEmail.value && clientPhone.value) {
        newClient();
        console.log(clients);

        alert("Obrigado pelo contato! Em breve nossos especialistas entrarão em contato para achar o melhor serviço para você! Confira o Console (:");
    } else {
        alert("Preencha pelo menos os campos de Nome, E-mail e Telefone para enviar sua solicitação.");
    }
};