document.addEventListener("DOMContentLoaded", () => {

```
/* YEAR */

const year = document.getElementById("year");

if (year) {
    year.textContent = new Date().getFullYear();
}


/* SCROLL REVEAL */

const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
    (entries, observer) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.12
    }
);

revealElements.forEach((element) => {
    revealObserver.observe(element);
});


/* CURSOR SPOTLIGHT */

const cursorGlow = document.querySelector(".cursor-glow");

if (cursorGlow && window.matchMedia("(pointer: fine)").matches) {

    window.addEventListener("mousemove", (event) => {

        cursorGlow.style.left = `${event.clientX}px`;
        cursorGlow.style.top = `${event.clientY}px`;

    });

}


/* HEADER BACKGROUND */

const header = document.querySelector(".site-header");

window.addEventListener(
    "scroll",
    () => {

        if (!header) {
            return;
        }

        if (window.scrollY > 40) {

            header.style.background =
                "rgba(5, 5, 5, 0.92)";

        } else {

            header.style.background =
                "rgba(5, 5, 5, 0.78)";

        }

    },
    { passive: true }
);


/* PROJECT VISUAL PARALLAX */

const projectVisuals =
    document.querySelectorAll(".project-visual");

if (window.matchMedia("(pointer: fine)").matches) {

    projectVisuals.forEach((visual) => {

        visual.addEventListener("mousemove", (event) => {

            const rect = visual.getBoundingClientRect();

            const x =
                (event.clientX - rect.left) /
                rect.width -
                0.5;

            const y =
                (event.clientY - rect.top) /
                rect.height -
                0.5;

            visual.style.transform =
                `perspective(900px)
                 rotateY(${x * 4}deg)
                 rotateX(${y * -4}deg)
                 translateY(-6px)`;

        });

        visual.addEventListener("mouseleave", () => {

            visual.style.transform =
                "perspective(900px) rotateY(0deg) rotateX(0deg) translateY(0)";

        });

    });

}


/* SMOOTH ANCHOR OFFSET */

document.querySelectorAll('a[href^="#"]').forEach((link) => {

    link.addEventListener("click", (event) => {

        const targetId =
            link.getAttribute("href");

        const target =
            document.querySelector(targetId);

        if (!target) {
            return;
        }

        event.preventDefault();

        const headerHeight = 80;

        const targetPosition =
            target.getBoundingClientRect().top +
            window.scrollY -
            headerHeight;

        window.scrollTo({
            top: targetPosition,
            behavior: "smooth"
        });

    });

});
```

});
