// ---
const hamMenuBtn = document.querySelector('.header__main-ham-menu-cont')
const smallMenu = document.querySelector('.header__sm-menu')
const headerHamMenuBtn = document.querySelector('.header__main-ham-menu')
const headerHamMenuCloseBtn = document.querySelector(
  '.header__main-ham-menu-close'
)
const headerSmallMenuLinks = document.querySelectorAll('.header__sm-menu-link')

hamMenuBtn.addEventListener('click', () => {
  if (smallMenu.classList.contains('header__sm-menu--active')) {
    smallMenu.classList.remove('header__sm-menu--active')
  } else {
    smallMenu.classList.add('header__sm-menu--active')
  }
  if (headerHamMenuBtn.classList.contains('d-none')) {
    headerHamMenuBtn.classList.remove('d-none')
    headerHamMenuCloseBtn.classList.add('d-none')
  } else {
    headerHamMenuBtn.classList.add('d-none')
    headerHamMenuCloseBtn.classList.remove('d-none')
  }
})

for (let i = 0; i < headerSmallMenuLinks.length; i++) {
  headerSmallMenuLinks[i].addEventListener('click', () => {
    smallMenu.classList.remove('header__sm-menu--active')
    headerHamMenuBtn.classList.remove('d-none')
    headerHamMenuCloseBtn.classList.add('d-none')
  })
}

// ---
const headerLogoContainer = document.querySelector('.header__logo-container')

headerLogoContainer.addEventListener('click', () => {
  if (window.location.hostname === 'localhost' || window.location.hostname.startsWith('127.')) {
    // If running locally, redirect to /public/index.html
    location.href = '/public/index.html';
  } else {
    // If hosted on Vercel, redirect to root index.html
    location.href = '/index.html';
  }
})

document.addEventListener("DOMContentLoaded", function () {
  const lionmatchBtn = document.getElementById("lionmatch-btn");

  if (window.location.hostname === 'localhost' || window.location.hostname.startsWith('127.')) {
    lionmatchBtn.href = "/public/projects/LionMatch.html"; // Local path
  } else {
    lionmatchBtn.href = "/lionmatch"; // Pretty URL for Vercel
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const lionmatchBtn = document.getElementById("bixie-btn");

  if (window.location.hostname === 'localhost' || window.location.hostname.startsWith('127.')) {
    lionmatchBtn.href = "/public/projects/LionMatch.html"; // Local path
  } else {
    lionmatchBtn.href = "/lionmatch"; // Pretty URL for Vercel
  }
});
