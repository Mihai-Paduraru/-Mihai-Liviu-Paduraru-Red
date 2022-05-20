const navbar = document.querySelector('#navbar');
const navWrapper = document.querySelector('#navWrapper');
const navLinks = document.querySelectorAll('.nav-link');
const cardsWrapper = document.querySelector('#cardsWrapper');
const imgBenefit = document.querySelectorAll('.img-round');
const buttonWrapper = document. querySelector ('#buttonWrapper');

// Navbar cambia colore e disposizione contenuto con scroll
window.addEventListener ('scroll', ()=>{
    let scrolled = window.scrollY;
    if (scrolled > 0){
        navbar.style.backgroundColor = 'rgba(198, 127, 127, 0.8)';
        navWrapper.classList.remove('nav-wrapper');
        navLinks.forEach(link => {
            link.style.color = 'white';
        })
    }else{
        navbar.style.backgroundColor = 'transparent';
        navWrapper.classList.add('nav-wrapper');
        navLinks.forEach(link => {
            link.style.color = '';
        })
    };
});

// Creazione card social tramite JS
let cardsData = [
    {title : 'Lorem ipsum 1', description : 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis at ea alias corrupti.'},
    {title : 'Lorem ipsum 2', description : 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis at ea alias corrupti.'},
    {title : 'Lorem ipsum 3', description : 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis at ea alias corrupti.'},
    {title : 'Lorem ipsum 4', description : 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis at ea alias corrupti.'},
]
cardsData.forEach(card =>{
    let divCards = document.createElement('div');
    divCards.classList.add('col-10', 'col-md-6', 'col-lg-3', 'mb-3', 'mb-lg-0',);
    divCards.innerHTML = `
        <div class="card team-card">
            <img src="https://picsum.photos/200" class="card-img-top img-fluid img-card-custom" alt="Immagine del team">
            <div class="card-body text-center">
                <h5 class="card-title t-dred">${card.title}</h5>
                <p class="card-text">${card.description}</p>
                <div class="icon-container t-dred">
                    <i class="fa-brands fa-instagram ms-auto me-2"></i>
                    <i class="fa-brands fa-linkedin mx-3"></i>
                    <i class="fa-brands fa-facebook-f ms-2 me-auto"></i>
                </div>
            </div>
        </div>
    `
    cardsWrapper.appendChild(divCards);
});

// Apparizione tramite scroll immagini Benefit
window.addEventListener ('scroll', ()=>{
    let scrolled = window.scrollY;
    if(scrolled > 3350){
        imgBenefit.forEach(img =>{
            img.style.opacity = '1';
        })
    }
})

// Bottone "Torna su"
let button = document.createElement('button');
button.classList.add('btn-circle-custom');
button.classList.add('d-none');
button.innerHTML = `
<a href="#" class="t-dred"><i class="fa-solid fa-arrow-up"></i></a>
`
buttonWrapper.appendChild(button);


window.addEventListener('scroll', ()=>{
    let scrolled = window.scrollY;
    console.log(scrolled);
    if (scrolled > 500){
        button.classList.remove('d-none');
    } else {

        button.classList.add('d-none');
    }
})