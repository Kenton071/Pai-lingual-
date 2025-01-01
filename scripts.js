document.addEventListener("DOMContentLoaded", () => {
    const animatedElements = document.querySelectorAll(".animate-on-scroll");

    const observerOptions = {
        root: null, // Viewport
        rootMargin: "0px",
        threshold: 0.5 // Trigger animation when 50% of the element is visible
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            const target = entry.target;

            if (entry.isIntersecting) {
                target.classList.add("scale-fade-in");
            } else {
                target.classList.remove("scale-fade-in");
            }
        });
    }, observerOptions);

    animatedElements.forEach((element) => observer.observe(element));
});
