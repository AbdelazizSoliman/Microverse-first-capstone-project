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
            <div class="spk-mem-info">
              <h3>${member.name}</h3>
              <h5>${member.speakerInfo}</h5>
              <hr>
              <p>${member.detailes}</p>
            </div>
          </li>
       </ul>
      `;
});