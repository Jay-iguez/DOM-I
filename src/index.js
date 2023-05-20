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

console.log('project wired!')

// images
const logoImage = document.querySelector("#logo-img")
const callImage = document.querySelector("#cta-img")
const middleImage = document.querySelector("#middle-img")


callImage.src = siteContent.images["cta-img"]
logoImage.src = siteContent.images["logo-img"]
middleImage.src = siteContent.images["accent-img"]
// images - end

// navigation
const navItemOne = document.querySelector(".container nav a:nth-child(1)")
const navItemTwo = document.querySelector(".container nav a:nth-child(2)")
const navItemThree = document.querySelector(".container nav a:nth-child(3)")
const navItemFour = document.querySelector(".container nav a:nth-child(4)")
const navItemFive = document.querySelector(".container nav a:nth-child(5)")
const navItemSix = document.querySelector(".container nav a:nth-child(6)")
const navAllItems = document.querySelectorAll(".container nav a")

navItemOne.textContent = siteContent.nav["nav-item-1"]
navItemTwo.textContent = siteContent.nav["nav-item-2"]
navItemThree.textContent = siteContent.nav["nav-item-3"]
navItemFour.textContent = siteContent.nav["nav-item-4"]
navItemFive.textContent = siteContent.nav["nav-item-5"]
navItemSix.textContent = siteContent.nav["nav-item-6"]
navAllItems.forEach(element => {
  element.className = "italic"
})
// navigation end

// Call To Action
const headingCall = document.querySelector(".cta-text h1")
const buttonCall = document.querySelector(".cta-text button")

headingCall.textContent = siteContent.cta.h1
buttonCall.textContent = siteContent.cta.button