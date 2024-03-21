document.addEventListener("DOMContentLoaded", function () {
  const elements = document.querySelectorAll(".scroll-effect-element");

  const options = {
    threshold: 0.5, 
  };

  const callback = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
        entry.target.style.transform = "translateY(0)";

        
        observer.unobserve(entry.target);
      } else {
        entry.target.style.opacity = 0;
        entry.target.style.transform = "translateY(100px)";
      }
    });
  };

  elements.forEach((element) => {
    const observer = new IntersectionObserver(callback, options);
    observer.observe(element);
  });
});


const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add('show');

      observer.unobserve(entry.target);
    } else {
      entry.target.classList.remove('show');
    }
  });
});










const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));









const mytext = new SplitType('#my-text');

        gsap.to('.char', {
            y: 0,
            stagger: 0.05,
            delay: 0.2,
            duration: 0.1
        });




















