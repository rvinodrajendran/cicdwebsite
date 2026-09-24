```javascript
/*
    Vinod Rajendran
    DevOps & Cloud Engineer Portfolio

    Small interactions for the portfolio.
*/


// =========================================
// NAVBAR SCROLL EFFECT
// =========================================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 30) {

        navbar.style.background =
            "rgba(5,5,10,0.92)";

    } else {

        navbar.style.background =
            "rgba(5,5,10,0.72)";

    }

});


// =========================================
// SIMPLE REVEAL ANIMATION
// =========================================

const revealElements = document.querySelectorAll(
    ".skill-card, .project-card, .timeline-item, .architecture-node, .stat-card"
);

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";

                entry.target.style.transform =
                    "translateY(0)";

            }

        });

    },
    {
        threshold: 0.12
    }
);


revealElements.forEach((element) => {

    element.style.opacity = "0";

    element.style.transform =
        "translateY(25px)";

    element.style.transition =
        "opacity 0.7s ease, transform 0.7s ease";

    observer.observe(element);

});
```
