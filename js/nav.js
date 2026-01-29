document.addEventListener("DOMContentLoaded", () => {
    fetch("components/nav.html")
        .then(res => res.text())
        .then(html => {
            document.getElementById("navbar").innerHTML = html;

            const navLinks = document.querySelectorAll("#navbar .nav-link");
            const sections = document.querySelectorAll("section");

            let currentSection = null;

            const observer = new IntersectionObserver(entries => {
                const visibleSections = entries
                    .filter(e => e.isIntersecting)
                    .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

                if (visibleSections.length > 0) {
                    const id = visibleSections[0].target.id;

                    if (id !== currentSection) {
                        currentSection = id;

                        navLinks.forEach(link => {
                            link.classList.toggle(
                                "active",
                                link.getAttribute("href") === `#${id}`
                            );
                        });
                    }
                }
            }, {
                threshold: [0.25, 0.5, 0.75]
            });

            sections.forEach(section => observer.observe(section));
        });
});
