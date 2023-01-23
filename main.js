const humberger = document.querySelector('.humberger');
const navLinks = document.querySelector('.nav-links');
const navLink = document.querySelectorAll('.nav-link');
humberger.addEventListener('click', () => {
  humberger.classList.toggle('active');
  navLinks.classList.toggle('active');
});

navLink.forEach((Link) => {
  Link.addEventListener('click', () => {
    humberger.classList.remove('active');
    navLinks.classList.remove('active');
  });
});

const conferenceSpeakers = [
  {
    mainTitle: 'Featured Speakers',
    name: 'Ahmed Bash',
    speakerInfo:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maximenatus esse saepe',
    speakerImage: './img/Ahmed-Bash_chess_style.png',
    detailes:
        'Lorem s ex corporis ratione voluptatem enim vel voluptas maximefacere incidun',
  },
  {
    name: 'Amir El Masry',
    speakerInfo:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maximenatus esse saepe',
    speakerImage: './img/Amir-Masry_chess_style.png',
    detailes:
        'Lorem s ex corporis ratione voluptatem enim vel voluptas maximefacere incidun',
  },
  {
    name: 'Habiba Marzouk',
    speakerInfo:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maximenatus esse saepe',
    speakerImage: './img/Haiba_chess_style.png',
    detailes:
        'Lorem s ex corporis ratione voluptatem enim vel voluptas maximefacere incidun',
  },
  {
    name: 'Nour Nabawy',
    speakerInfo:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maximenatus esse saepe',
    speakerImage: './img/Noar-Nabawy_chess_style.png',
    detailes:
        'Lorem s ex corporis ratione voluptatem enim vel voluptas maximefacere incidun',
  },
];

const speakerMembers = document.querySelector('.speakers');
conferenceSpeakers.forEach((member) => {
  speakerMembers.innerHTML += `
      <ul class="speaker-members">
          <li class="members">
           <img src="${member.speakerImage}" alt="">
            <div class="">
              <h3>${member.name}</h3>
              <h5 href="#">${member.speakerInfo}</h5>
              <hr>
              <p>${member.detailes}</p>
            </div>
          </li>
       </ul>
      `;
});

//   const speakerMembers = document.querySelector('.speakers');
//   conferenceSpeakers.forEach((member, id) => {
//     speakerMembers.innerHTML += `<section class="speaker ${member.classNm}">
//     <div class="speaker-container ${speakerMembers} ">
//     <img
//     class="speaker-img"
//     src=${speakerImage}
//     alt="speaker's image"
//     />
//     <div class="speaker-des">
//     <h3>${name}</h3>
//     <p class="speaker-text1">${speakerInfo}</p>
//     <hr class="line2" />
//     <p class="speaker-text2">${detailes}</p>
//     </div>
//     </div>
//     `;
// });