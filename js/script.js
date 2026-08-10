window.addEventListener("scroll", () => {
    const header = document.querySelector("header");
    if (header) {
        header.style.boxShadow =
            window.scrollY > 50
                ? "0 10px 25px rgba(0,0,0,.15)"
                : "0 2px 10px rgba(0,0,0,.08)";
    }
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            e.preventDefault();
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});