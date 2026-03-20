// Getting a reference to the gallery element in the DOM
let scrollContainer = document.querySelector(".gallery");

// Getting a reference to the back button and forward button elements in the DOM
let backBtn = document.getElementById("backBtn");
let forwardBtn = document.getElementById("forwardBtn");

// Adding a 'wheel' event listener to the scrollContainer (gallery)
// This event is fired when the user uses the mouse wheel
scrollContainer.addEventListener("wheel", (evt) => {
  // Prevent the default wheel scrolling action
  evt.preventDefault();

  // Shift the scroll position of the gallery horizontally by the amount the wheel moved vertically
  // This transforms vertical scrolling to horizontal scrolling
  scrollContainer.scrollLeft += evt.deltaY;

  // Set the scroll behavior of the gallery to 'auto'
  // 'auto' means the scroll will be instant and won't have a smooth animation
  scrollContainer.style.scrollBehavior = "auto";
});

// Adding a 'click' event listener to the forward button
forwardBtn.addEventListener("click", () => {
  // Set the scroll behavior of the gallery to 'smooth'
  // 'smooth' means the scroll will have an animation and won't be instant
  scrollContainer.style.scrollBehavior = "smooth";

  // Move the gallery's scroll position 900 pixels to the right when the forward button is clicked
  scrollContainer.scrollLeft += 900;
});

// Adding a 'click' event listener to the back button
backBtn.addEventListener("click", () => {
  // Set the scroll behavior of the gallery to 'smooth'
  // 'smooth' means the scroll will have an animation and won't be instant
  scrollContainer.style.scrollBehavior = "smooth";

  // Move the gallery's scroll position 900 pixels to the left when the back button is clicked
  scrollContainer.scrollLeft -= 900;
});
