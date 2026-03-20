// Attaching 'stickyFunction' to window's scroll event
window.onscroll = function () {
  stickyFunction();
};

// Getting a reference to the menu element in the DOM
var navbar = document.getElementById("menu");

// Getting the distance of the navbar from the top of the page
var sticky = navbar.offsetTop;

// Defining the stickyFunction
function stickyFunction() {
  // If we've scrolled past the position of the navbar
  if (window.scrollY >= sticky) {
    // Add 'sticky' class to the navbar, typically to fix it to the top of the viewport
    navbar.classList.add("sticky");
  } else {
    // Otherwise, remove 'sticky' class from the navbar
    navbar.classList.remove("sticky");
  }
}

// Adding a 'scroll' event listener to the window object
window.addEventListener("scroll", function () {
  // Select all submenus under the 'menu' element
  var subMenus = document.querySelectorAll("#menu ul.sub-menus");

  // If we've scrolled down at all
  if (window.scrollY > 0) {
    // Change the background color of the navbar and all submenus to '#16161d'
    navbar.style.backgroundColor = "#16161d";
    subMenus.forEach(function (subMenu) {
      subMenu.style.backgroundColor = "#16161d";
    });
  } else {
    // If we're at the top of the page, make the navbar and all submenus transparent
    navbar.style.backgroundColor = "transparent";
    subMenus.forEach(function (subMenu) {
      subMenu.style.backgroundColor = "transparent";
    });
  }
});

// Defining the updateMenu function
function updatemenu() {
  // If the 'responsive-menu' checkbox is checked
  if (document.getElementById("responsive-menu").checked == true) {
    // Change the border radius of the bottom of the menu to 0
    document.getElementById("menu").style.borderBottomRightRadius = "0";
    document.getElementById("menu").style.borderBottomLeftRadius = "0";
  } else {
    // Otherwise, set the border radius of the menu to 10px
    document.getElementById("menu").style.borderRadius = "10px";
  }
}
