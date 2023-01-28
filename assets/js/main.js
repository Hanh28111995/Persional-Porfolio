/*===== MENU SHOW Y HIDDEN =====*/
const navMenu = document.getElementById('nav-menu'),
  toggleMenu = document.getElementById('nav-toggle'),
  closeMenu = document.getElementById('nav-close')

// SHOW
toggleMenu.addEventListener('click', () => {
  navMenu.classList.toggle('show')
})
// HIDDEN
closeMenu.addEventListener('click', () => {
  navMenu.classList.remove('show')
})

/*===== ACTIVE AND REMOVE MENU =====*/
const navLink = document.querySelectorAll('.nav__link')
function linkAction() {
  navMenu.classList.remove('show')
}

navLink.forEach((n) => n.addEventListener('click', linkAction))

/*===== SCROLL SECTIONS ACTIVE LINK =====*/
const sections = document.querySelectorAll('section[id]')
window.addEventListener('scroll', scrollActive)

//*** Action when active scroll event ***/
function scrollActive() {
  // console.log(sections)
  const scrollY = window.pageYOffset
  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight
    const sectionTop = current.offsetTop - 50
    const sectionId = current.getAttribute('id')
    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector('.nav__menu a[href*=' + sectionId + ']')
        .classList.add('active')
    } else {
      document
        .querySelector('.nav__menu a[href*=' + sectionId + ']')
        .classList.remove('active')
    }
    if (sectionId === 'works') {
      var video = document.querySelectorAll('.video-bg')
      video.forEach((current) => {
            current.play()  
      })
    }
  })
}

//*** SEND BTN CONTACT ***//
function sendEmail() {
  Email.send({
    Host : "smtp.elasticemail.com",
    Username : "tranhanh28111995@gmail.com",
    Password : "4973889A8D3F20C3C9C4FB05BB14266088CB",
    To :  document.getElementById("mymail").innerHTML,
    From : "tranhanh28111995@gmail.com",
    Subject : "Question for My Porfolio" ,
    Body : "From Porfolio " + "<br>"
    + "Name Guest :" + document.getElementById("name").value + "<br>"
    + "Email Guest :" + document.getElementById("email").value + "<br>"
    + "Content :" +document.getElementById("message").value,
}).then(
  message => alert('Your mail has been sent succesfully')
);
}

//*** RESTART DROP WHEN SCROLL TO SECTION ***/
const observerOptions = {
  root: null,
  rootMargin: "0px",
  threshold: 0.5
};

function observerCallback(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // add animation for elements that are in view
      entry.target.classList.remove('nodrop');
    } else {
      // remove animation for elements that are not in view
      entry.target.classList.add('nodrop');
    }
  });
}

const observer = new IntersectionObserver(observerCallback, observerOptions);

const anmElms = document.querySelectorAll('.drop');
anmElms.forEach(el => observer.observe(el));
