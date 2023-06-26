const siteContent = { // DO NOT CHANGE THIS OBJECT
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
  },
  "main-content": {
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2021",
  },
  "images": {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};
// console.log('project wired!')
//NAV
const navLinks = document.querySelectorAll('header nav a')
const navLinkTexts = Object.values(siteContent.nav)
navLinks.forEach((link, index) => {
  link.textContent = navLinkTexts[index]
  link.classList.add('italic')
})

// CTA
const cta = document.querySelector('.cta')
cta.querySelector('h1').textContent = siteContent['cta']['h1']
cta.querySelector('button').textContent = siteContent['cta']['button']

// TOP-CONTENT
const topContent = document.querySelector(".top-content");
topContent.querySelector("h4").textContent = "Features";
topContent.querySelector('p').textContent = siteContent['main-content']['features-content'];

const About = document.querySelector(".top-content .text-content:nth-of-type(2)");
About.querySelector('h4').textContent = "About";
About.querySelector('p').textContent = siteContent['main-content']['about-content']

// BOTTOM-CONTENT
const Services = document.querySelector('.bottom-content');
Services.querySelector('h4').textContent = "Services"
Services.querySelector('p').textContent = siteContent['main-content']['services-content']

const product = document.querySelector(".bottom-content .text-content:nth-of-type(2)");
product.querySelector('h4').textContent = "Product";
product.querySelector('p').textContent = siteContent['main-content']['product-content']

const Vision = document.querySelector(".bottom-content .text-content:nth-of-type(3)");
Vision.querySelector('h4').textContent = "Vision"
Vision.querySelector('p').textContent = siteContent['main-content']['vision-content']


// CONTACT
const contact = document.querySelector('section.contact');
contact.querySelector('h4').textContent = "Contact"
contact.querySelector("p:nth-of-type(1)").textContent = "123 Way 456 Street Somewhere, USA";
contact.querySelector("p:nth-of-type(2)").textContent = "1 (888) 888-8888";
contact.querySelector("p:nth-of-type(3)").textContent = "sales@greatidea.io";

// FOOTER
const footerLink = document.querySelector('footer a');
footerLink.textContent = "Copyright Great Idea! 2021";
footerLink.classList.add('bold');

// IMAGES
const logoImg = document.querySelector('#logo-img');
logoImg.src = siteContent.images['logo-img'];

const ctaImg = document.querySelector('#cta-img');
ctaImg.src = "http://localhost:9000/img/cta.png";

const middleImg = document.querySelector('#middle-img');
middleImg.src = "http://localhost:9000/img/accent.png";