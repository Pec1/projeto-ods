/* Redirecionar */
function buttonEntrar (){
    window.location = "/projeto-ods/pages/login.html";
}

function buttonCadastra (){
    window.location = "/projeto-ods/pages/cadastro.html"
}

/* Section Ativas */
function setActiveTab() {
    var scrollPosition = window.scrollY;
    var sections = document.querySelectorAll('section');

    sections.forEach(function(section) {
        var top = section.offsetTop - document.querySelector('header').offsetHeight;
        var bottom = top + section.clientHeight;

        if (scrollPosition >= top && scrollPosition < bottom) {
            var sectionId = section.id;

            var activeLink = document.querySelector('.nav-link[href="#' + sectionId + '"]');
            if (activeLink) {
                document.querySelectorAll('.nav-link').forEach(function(navLink) {
                    navLink.classList.remove('active');
                });
                activeLink.classList.add('active');
            }
        }
    });
}

/* Home */
var homeLink = document.querySelector('.logo-link');
homeLink.addEventListener('click', function(event) {
    event.preventDefault();

    document.querySelectorAll('.nav-link').forEach(function(navLink) {
        navLink.classList.remove('active');
    });
    document.querySelector('.nav-link[href="#home-sec"]').classList.add('active');

    var homeSection = document.querySelector('#home-sec');
    homeSection.scrollIntoView({ behavior: 'smooth' });
});

function changeContent(option) {
    var contentElement = document.getElementById('content');
    var paragrafo = contentElement.querySelector('p');

    switch (option) {
        case 'option1':
            paragrafo.innerHTML = '<p>Temos a Missão e de promover o turismo sustentável, incentivandi práticas responsáveis entre os viajantes e contribuindo para o crescimento econômico, para a criação de empregos e a preservação cultural e ambienta.</p>';
            break;
        case 'option2':
            paragrafo.innerHTML = '<p>Visamos que até 2030, o turismo sustentável (que gera empregos e promove a cultura e os produtos locais), seja um topico bastante discutido e um elemento-chave quando se fala em turismo.</p>';
            break;
        case 'option3':
            paragrafo.innerHTML = '<p>Construir um site dedicado ao Turimo Sustentável é mais do que apenas uma iniciativa de negócio; é um compromisso com valores essenciais. Promover esse tipo de ato através de uma plataforma online não apenas facilita o processo para os usuários, mas também reflete um compromisso com a sustentabilidade e a responsabilidade ambiental.</p>';
            break;
        default:
            paragrafo.innerHTML = '<p>Clique em algum topico acima (Missão, Visão ou Valores)</p>';
    }

    /* 'Ativa os links' */
    document.querySelectorAll('.about-nav a').forEach(function(navLink) {
        navLink.classList.remove('active');
    });

    var clickedLink = document.querySelector('.about-nav a[href="javascript:void(0);"][onclick="changeContent(\'' + option + '\')"]');
    if (clickedLink) {
        clickedLink.classList.add('active');
    }
}

/* Scroll */
window.addEventListener("scroll", function() {
    setActiveTab();
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
});

window.addEventListener('resize', function() {
    setActiveTab();
});


const users = {
    user1: {
        login: 'maike@gmail.com',
        password: 'coxinha123'
    }
}
