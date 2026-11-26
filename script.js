// =========================================
// SAMRIDGE - JAVASCRIPT
// Navigation and website interactions
// =========================================


// 1. MOBILE NAVIGATION

const menuToggle = document.querySelector("#menu-toggle");
const navLinks = document.querySelector("#nav-links");

if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", () => {

        const isOpen = navLinks.classList.toggle("active");

        menuToggle.classList.toggle("active");
        menuToggle.setAttribute("aria-expanded", isOpen);

    });

    const navItems = navLinks.querySelectorAll("a");

    navItems.forEach((item) => {

        item.addEventListener("click", () => {

            navLinks.classList.remove("active");
            menuToggle.classList.remove("active");
            menuToggle.setAttribute("aria-expanded", "false");

        });

    });

    document.addEventListener("click", (event) => {

        const clickedInsideMenu = navLinks.contains(event.target);
        const clickedToggle = menuToggle.contains(event.target);

        if (!clickedInsideMenu && !clickedToggle) {

            navLinks.classList.remove("active");
            menuToggle.classList.remove("active");
            menuToggle.setAttribute("aria-expanded", "false");

        }

    });

}



// 2. AUTOMATIC COPYRIGHT YEAR

const yearElement = document.querySelector("#year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}



// 3. PORTFOLIO CATEGORY FILTERS (Designs page)

const filterButtons = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-card");

filterButtons.forEach((button) => {

    button.addEventListener("click", () => {

        const selectedFilter = button.dataset.filter;

        filterButtons.forEach((item) => {

            item.classList.remove("active");
            item.setAttribute("aria-pressed", "false");

        });

        button.classList.add("active");
        button.setAttribute("aria-pressed", "true");

        projectCards.forEach((card) => {

            const matches =
                selectedFilter === "all" ||
                card.dataset.category === selectedFilter;

            card.hidden = !matches;

        });

    });

});



// 4. PRE-FILL CONTACT FORM FROM "REQUEST A SIMILAR DESIGN"

const projectType = document.querySelector("#project-type");
const messageField = document.querySelector("#message");

const designOptions = {

    "Tech Startup": "Tech Startup Landing Page",
    "Product Launch": "Product Launch Landing Page",
    "Boutique Hotel": "Boutique Hotel Website",
    "Restaurant Website": "Restaurant Website",
    "Corporate Firm": "Corporate Firm Website",
    "Creative Agency": "Creative Agency Website",
    "Fashion Store": "Fashion Store",
    "Electronics Store": "Electronics Store"

};

if (projectType && messageField) {

    const params = new URLSearchParams(window.location.search);
    const design = params.get("design");

    if (design) {

        const selectedOption = designOptions[design];

        if (selectedOption) {
            projectType.value = selectedOption;
        }

        messageField.value =
            `I'm interested in a design similar to the ${design} concept.`;

    }
    // 5. FOOTER LEGAL LINKS

const footerBottom = document.querySelector(".footer-bottom");

if (footerBottom) {

    const privacyLink = footerBottom.querySelector("a");

    if (privacyLink) {
        privacyLink.textContent = "Privacy Policy";
        privacyLink.setAttribute("href", "privacy.html");
    }

    if (!footerBottom.querySelector('a[href="terms.html"]')) {

        const termsLink = document.createElement("a");
        termsLink.href = "terms.html";
        termsLink.textContent = "Terms & Conditions";
        footerBottom.appendChild(termsLink);

    }

}

}
