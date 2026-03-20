document.addEventListener("DOMContentLoaded", function () {
  let animatedElements = document.querySelectorAll(".hidden"); // Collects all elements with the class .hidden

  let observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      // when element's is in viewport,
      // we remove the hidden class
      if (entry.intersectionRatio > 0) {
        entry.target.classList.remove("hidden");
        // Stop observing the element so the "hidden" class is not added back
        observer.unobserve(entry.target);
      }
    });
  });

  animatedElements.forEach((element) => {
    observer.observe(element);
  });
});
