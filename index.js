const navMenu = document.getElementById('nav--menu'),
      navToggle = document.getElementById('nav--toggle'),
      navClose = document.getElementById('nav--close')


if(navToggle)
    {
        navToggle.addEventListener('click' , () =>
    {
        navMenu.classList.add('show-menu');
    })
    };

    if(navClose)
        {
            navClose.addEventListener('click', () =>
            {
                navMenu.classList.remove('show-menu');
                
            })
        };

        // remove link in mobile 

const navlink = document.querySelectorAll('.nav--link');


function linkaction() {
    
    const navMenulink = document.getElementById('nav--menu');

    navMenulink.classList.remove('show-menu');
}


navlink.forEach(n => n.addEventListener('click', linkaction));

        // change backgound 
 function scrollheader()
{
    const header = document.getElementById('header');
    if(this.scrollY >= 50) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll' , scrollheader);

// link action
//   const swiperPopular = new Swiper('.popular--container', {
//     loop: true,
//     spaceBetween: 32,
//     grabCursor: true,
  
//     // If we need pagination
//     pagination: {
//       el: '.swiper-pagination',
//       clickable:true,
//       dynamicBullets:true,
//     },
//     breakpoints:
//     {
//         600:
//         {
//             SlidesPerView:2,
//         },
//         968:
//         {
//             SlidesPerView:3,
//         },
//     },
//   });
const swiper = new Swiper('.slider-wrapper', {
    // Optional parameters
         loop: true,
        spaceBetween: 32,
        grabCursor: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable:true,
      dynamicBullets:true
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints:
    {
        0:
        {
            slidesPerView:1
        },
        620:
        {
            slidesPerView:2
        },
        1024:
        {
            slidesPerView:3
        }
    }
  
    
  });
//   mixitup

let mixerfeautured = mixitup('.featured--content', {
    selectors: {
        target: '.featured--card'
    },
    animation: {
        duration: 300
    }
});

// link featured 
const linkfeatured = document.querySelectorAll('featured--item');

function activefeautured() {
    linkfeatured.forEach(l=> l.classList.remove('active-featured'))
    this.classList.add('active-featured')
}
linkfeatured.forEach(l=> l.addEventListener('click',activefeautured))

// scrollup

function scrollup()
{
    const scrollup = document.getElementById('scroll-up');
    if(this.scrollY >= 350) scrollup.classList.add('show-scroll'); else scrollup.classList.remove('show-scroll');

}
window.addEventListener('scroll',scrollup)

// scroll reveal

const sr = ScrollReveal(
    {
        origin :'top',
        distance:'60px',
        duration:2500,
        delay:400,
        
    }
)

sr.reveal('.home--title,.popular--container,.features--img,.featured--filter')
sr.reveal('.home--subtitle',{delay:500})
sr.reveal('.home--elec',{delay:600})
sr.reveal('.home--img',{delay:800})
sr.reveal('.home--car-data',{delay:900,interval:100,origin:'bottom'} )
sr.reveal('.home--button',{delay:1000,origin:'bottom'} )
sr.reveal('.about--group, .offer--data',{origin:'left'} )
sr.reveal('.about--data,.offer--img',{origin:'right'})
sr.reveal('.features--map',{ delay:600, origin:'bottom'} )
sr.reveal('.features--card',{interval:300} )
sr.reveal('.featured--card,.logos--content,.footer--content',{interval:100} )
