document.addEventListener('DOMContentLoaded', function() {
  const box = document.querySelector('.box')
  const close = document.querySelector('.close')
  const nav = document.querySelector('.nav');
  const serviceNav = document.querySelector('.service-nav');
  const showreelNav = document.querySelector('.showreel-nav');
  const teamNav = document.querySelector('.team-nav');
  const contactNav = document.querySelector('.contact-nav');
 
  const service = document.querySelector('#service');
  const showreel = document.querySelector('#showreel');
  const team = document.querySelector('#team');
  const contact = document.querySelector('#contact');

  const serviceNavOffset = service.offsetTop;
  const showreelNavOffset = showreel.offsetTop;
  const teamNavOffset = team.offsetTop;
  const contactNavOffset = contact.offsetTop;

  // box.addEventListener('click', () => {
  //   nav.style.display = 'block';
  //   close.style.display = 'block';
  //   box.style.display = 'none'; // 隱藏box
  // });
  
  // close.addEventListener('click', () => {
  //   nav.style.display = 'none';
  //   close.style.display = 'none';
  //   box.style.display = 'block'; // 顯示box
  // });


  
  window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;

    if (scrollPosition > serviceNavOffset - 50 && scrollPosition < showreelNavOffset - 50) {
      serviceNav.classList.add('location');
    } else {
      serviceNav.classList.remove('location');
    }

    if (scrollPosition >= showreelNavOffset - 50 && scrollPosition < teamNavOffset - 50) {
      showreelNav.classList.add('location');
    } else {
      showreelNav.classList.remove('location');
    }

    if (scrollPosition >= teamNavOffset - 50 && scrollPosition < contactNavOffset - 50) {
      teamNav.classList.add('location');
    } else {
      teamNav.classList.remove('location');
    }

    if (scrollPosition >= contactNavOffset - 10) {
      contactNav.classList.add('location');
    } else {
      contactNav.classList.remove('location');
    }
  });
});
