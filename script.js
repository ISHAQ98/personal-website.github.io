/* ===== Menu show Y hidden ===== */
const navMenu = document.getElementById('nav-menu'),
toggleMenu = document.getElementById('nav-toggle'),
closeMenu = document.getElementById('nav-close')

// Show 
toggleMenu.addEventListener('click', ()=>{
    navMenu.classList.toggle('show')
})

//Hidden
closeMenu.addEventListener('click', ()=>{
    navMenu.classList.remove('show')
})

// Hme background 
document.querySelector("body").addEventListener("mousemove", eyeball);
function eyeball() {
  var eye = document.querySelectorAll(".eye");
  eye.forEach(function (eye) {
    let x = eye.getBoundingClientRect().left + eye.clientWidth / 2;
    let y = eye.getBoundingClientRect().top + eye.clientHeight / 2;
    let radian = Math.atan2(event.pageX - x, event.pageY - y);
    let rot = radian * (180 / Math.PI) * -1 + 270;
    eye.style.transform = "rotate(" + rot + "deg)";
  });
}
/* ==== Remove Menu ===== */
const navLink = document.querySelectorAll('.nav_link')
function linkAction(){
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/* ===== Scroll Sections Active Link ===== */
const sections = document.querySelectorAll('section[id]')
window.addEventListener('scroll', scrollActive)
function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHright = current.offsetHeight
        const sectionTop = current.offsetTop - 50
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop +sectionHright){
            document.document.querySelector('.nav_menu a [href*='+ sectionId +']').classList.add('active')
        }else{
            document.document.querySelector('.nav_menu a [href*='+ sectionId +']').classList.remove('active')
        }
    })
}