// Footer Auto Date
const date = document.getElementById('date');
date.innerHTML = new Date().getFullYear();

// close links
const navToggle = document.querySelector('.nav-toggle');
const linksContainer = document.querySelector('.links-container');
const links = document.querySelector('.links');

navToggle.addEventListener('click', function(){
 // linksContainer.classList.toggle('show-links')
 const containerHeight = linksContainer.getBoundingClientRect().height;
const linksHeight = links.getBoundingClientRect().height;
if(containerHeight === 0){
 linksContainer.style.height = `${linksHeight}px`
}
else{
 linksContainer.style.height = 0;
}
});
const navBar = document.getElementById('nav');
const topLink = document.querySelector('.top-link')
// fixed navbar
window.addEventListener('scroll', function(){
const scrollHeight = window.pageYOffset;
const navHeight = navBar.getBoundingClientRect().height;
if(scrollHeight > navHeight){
 navBar.classList.add('fixed-nav');
}
else{
 navBar.classList.remove('fixed-nav');
}

if(scrollHeight > 500){
 topLink.classList.add('show-link');
}
else{
 topLink.classList.remove('show-link');
}
});

// Accurate smooth scroll

const scrollLinks = document.querySelectorAll('.scroll-link');

scrollLinks.forEach(function (link) {
 link.addEventListener('click', function(e){
 e.preventDefault();
const id = e.currentTarget.getAttribute('href').slice(1);
const element = document.getElementById(id);
// getting the heights
const navHeight = navBar.getBoundingClientRect().height;
const containerHeight = linksContainer.getBoundingClientRect().height;
const fixedNav = navBar.classList.contains('fixed-nav');

let position = element.offsetTop - navHeight;
if(!fixedNav){
 position = position - navHeight;
}
if(navHeight > 82){
 position = position + containerHeight;
}
window.scrollTo({
 left: 0,
 top:position,
});
linksContainer.style.height = 0;
 });
});

// Automatic Slider for Products & Services

let counter = 1;
setInterval(() => {
 document.getElementById('radio' + counter).checked = true;
 counter++
 if(counter > 5){
  counter = 1;
 }
}, 5000);


// Tabs For About Section

const btns = document.querySelectorAll('.tab-btn');
const about = document.querySelector('.about');
const articles = document.querySelectorAll('.content');

about.addEventListener('click', function(e) {
 const id = e.target.dataset.id;
 if(id){
  btns.forEach(function(btn){
  btn.classList.remove('active')
  e.target.classList.add('active');
  });
  articles.forEach(function(article) {
   article.classList.remove('active')
  });
  const element = document.getElementById(id)
  element.classList.add('active');
 }
});

// testimonials and reviews

const reviews = [
  {
    id: 1,
    name: "Ronke Ogbeide",
    job: "Restauranteur",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    text:
      "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: "Boye Adeseye",
    job: "Journalist-Cuisine",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
    text:
      "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    name: "Oye Andrew",
    job: "International Chef and Tv host",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    text:
      "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 4,
    name: "Dara Adefemi",
    job: "Pisciculturist",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    text:
      "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
];

const img = document.getElementById('person-img')
const author = document.getElementById('author')
const job = document.getElementById('job')
const info = document.getElementById('info')

const prevBtn = document.querySelector('.prev-btn')
const nextBtn = document.querySelector('.next-btn')

let currentItem = 0;

window.addEventListener('DOMContentLoaded', function(){
showPerson()
})

function showPerson(){
 const item = reviews[currentItem];
 img.src = item.img;
 author.textContent = item.name;
 job.textContent = item.job;
 info.textContent = item.text;
}

nextBtn.addEventListener('click', function(){
currentItem++;
if(currentItem > reviews.length - 1){
 currentItem = 0;
}
showPerson()
})

prevBtn.addEventListener('click', function(){
currentItem--;
if(currentItem < 0){
 currentItem = reviews.length - 1;
}
showPerson()
})