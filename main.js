const humberger= document.querySelector('.humberger');
const navLinks = document.querySelector('.nav-links');
const navLink = document.querySelectorAll('.nav-link');
humberger.addEventListener('click', ()=>
{
    humberger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

navLink.forEach((Link) => {
    Link.addEventListener('click', () => {
      humberger.classList.remove('active');
      navLinks.classList.remove('active');
    });
  });