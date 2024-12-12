/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
navToggle = document.getElementById('nav-toggle'),
navClose = document.getElementById('nav-close')

if(navToggle){
    navToggle.addEventListener('click',()=>{
        navMenu.classList.add('show-menu')
    })
}
if(navClose){
    navClose.addEventListener('click',()=>{
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')
const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n=>n.addEventListener('click',linkAction))

/*=============== ADD BLUR TO HEADER ===============*/
const blurHeader = ()=>{
    const header = document.getElementById('header')
    window.scrollY>=50 ? header.classList.add('blur-header'):header.classList.remove('blur-header')
}
window.addEventListener('scroll',blurHeader);

/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () =>{
    const scrollUp = document.getElementById('scroll-up')
    this.scrollY >=400 ? scrollUp.classList.add('show-scroll'): scrollUp.classList.remove('show-scroll');
}
window.addEventListener('scroll',scrollUp)
/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')
const scrollActive=() =>{
  const scrollY = window.pageYOffset;
  sections.forEach(current=>{
    const sectionHeight = current.offsetHeight,
    sectionTop = current.offsetTop - 58,
    sectionId = current.getAttribute('id'),
    sectionsClass = document.querySelector('.nav__menu a[href*='+sectionId+']')
    
    if(scrollY> sectionTop && scrollY <=sectionTop + sectionHeight){
      sectionsClass.classList.add('active-link')
    } else{
      sectionsClass.classList.remove('active-link')
    }
  })
}
window.addEventListener('scroll',scrollActive)

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 3000,
  delay: 400,
})
sr.reveal(`.home__data,.explore__data,.explore__user,.footer__container`)
sr.reveal(`.home__card`,{delay: 600,distance:'100px',interval:100})
sr.reveal(`.about__data,.join__image`,{origin: 'right'})
sr.reveal(`.about__image,.join__data`,{origin: 'left'})
sr.reveal(`.popular__card`,{interval:200})
//HOME
const images1 =[
  'image/1.jpg',
  'image/2.jpg',
  'image/3.jpg',
  'image/5.jpg' 
];
let currentIndex = 0;

const imageElement = document.getElementById('home-image')
function changeImage(){
 imageElement.classList.add('hidden');

 setTimeout(()=>{
 imageElement.classList.remove('hidden');
   
 currentIndex = (currentIndex+1) % images1.length;
 imageElement.src = images1[currentIndex] 
 
 },700);
 

}
setInterval(changeImage,15000);

