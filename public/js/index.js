/*=============== PROJEKTE ===============*/
let mixerPortfolio = mixitup('.projekte__container', {
  selectors: {
      target: '.projekte__card'
  },
  animation: {
      duration: 300
  }
});

/* Link active projekte */
const linkProjekte = document.querySelectorAll('.projekte__item')

function activeProjekte(){
  linkProjekte.forEach(l=> l.classList.remove('active-projekte'))
  this.classList.add('active-projekte')
}

linkProjekte.forEach(l=> l.addEventListener('click', activeProjekte))

/*=============== PROJEKTE Dialog ===============*/

function dialogOeffnen(dialogId) {
    document.getElementById(dialogId).classList.add("sichtbar");
    document.getElementById("body-overlay").classList.add("sichtbar");
}

function dialogSchliessen(dialogId) {
    document.getElementById(dialogId).classList.remove("sichtbar");
    document.getElementById("body-overlay").classList.remove("sichtbar");
}

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)
