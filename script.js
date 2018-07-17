function toggleNavi() {
  console.log("du du du");
  let nav = document.getElementsByClassName('js-nav')[0];
  let overlay = document.getElementsByClassName('js-overlay')[0];
  
  if (!nav.classList.contains("dn")) {
    setTimeout(function(){
      // wait for the css animation to almost finish before dn
      overlay.classList.toggle('dn');
      nav.classList.toggle('dn');
    }, 900);
  } else {
    overlay.classList.toggle('dn');
    nav.classList.toggle('dn');
  }
  
  nav.classList.toggle('fadeout');
  overlay.classList.toggle('fadeout');
  nav.classList.toggle('fadein');
  overlay.classList.toggle('fadein');
}

function naviOutsideClick() {
  let nav = document.getElementsByClassName('js-nav')[0];
  if (!nav.classList.contains("dn")) {
      toggleNavi();
  }
}

// EVENT LISTENERS
var menu = document.getElementsByClassName('js-menu')[0];
menu.addEventListener('click', toggleNavi, false);

var navCloseAreas = document.getElementsByClassName('js-nav-close');
for (var i = 0; i < navCloseAreas.length; i++) {
    navCloseAreas[i].addEventListener('click', naviOutsideClick, false);
}

var navLinks = document.getElementsByClassName('js-link');
for (var i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener('click', naviOutsideClick, false);
}
