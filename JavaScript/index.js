function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
  }
  
  /* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.body.style.backgroundColor = "white";
  }

  // Navigation active links
  document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-link");
  
    const setActiveLink = () => {
      let currentSectionId = "";
  
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 50; // Adjust for sticky nav
        const sectionHeight = section.offsetHeight;
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
          currentSectionId = section.getAttribute("id");
        }
      });
  
      navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href").substring(1) === currentSectionId) {
          link.classList.add("active");
        }
      });
    };
  
    window.addEventListener("scroll", setActiveLink);
  });

  // Create an intersection observer to detect when a section is in view
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // Stop observing after the animation is triggered
      }
    });
  }, {
    threshold: 0.5 // Trigger animation when 50% of the section is visible
  });

  // Observe all sections
  document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
  });


  