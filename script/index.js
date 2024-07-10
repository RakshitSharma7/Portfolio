let menuicon= document.querySelector("#menu-icon");
let navbar =document.querySelector(".navbar");

menuicon.onclick = () => {
    menuicon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');    
}


let sections = document.querySelector('section');
let navlinks = document.querySelector('header nav a');

window.onscroll = () => {
    sections.foreach(sec => {
        let top =window.scrollY;
        let offset =sec.offsetTop - 150;
        let height = sec.offsetHeight; 
        let id =sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navlinks.forEach.apply(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    let header =document.querySelector('header');
    header.classList.toggle('sticky',window.scrollY > 100);

    menuicon.classList.remove('fa-xmark');
    navbar.classList.remove('active');
};


ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200
 });

 ScrollReveal().reveal('.home-content, heading', { origin: 'top' });
 ScrollReveal().reveal('.home-img, .services-container , .portfolio-box , .contact form', { origin: 'buttom' });
 ScrollReveal().reveal('.home-contact h1, .about-img ', { origin: 'left' });
 ScrollReveal().reveal('.home-contact p, .about-content ', { origin: 'right' });


 const typed = new Typed('.multiple-text', { 
    strings: ['FullStack Developer','Cricketer','Web Designer'],
    typeSpeed: 60,
    backSpeed: 60,
    backDelay: 1000,
    loop: true,
 });