function buttonEntrar (){
    window.location = "./pages/entrar.html";
}

function buttonCadastra (){
    window.location = "./pages/cadastrar.html"
}

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

window.addEventListener("scroll", function() {
    setActiveTab();
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
});

window.addEventListener('resize', function() {
    setActiveTab();
});
