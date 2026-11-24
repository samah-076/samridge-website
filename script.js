
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



// 3. PORTFOLIO CATEGORY FILTERS

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



// 4. REQUEST A SIMILAR DESIGN

const projectRequests = document.querySelectorAll(".project-request");
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

projectRequests.forEach((link) => {

    link.addEventListener("click", () => {

        const design = link.dataset.design;
        const selectedOption = designOptions[design];

        if (projectType && selectedOption) {
            projectType.value = selectedOption;
        }

        if (messageField && design) {

            const requestMessage =
                `I'm interested in a design similar to the ${design} concept.`;

            if (!messageField.value.includes(requestMessage)) {

                messageField.value = messageField.value.trim()
                    ? `${messageField.value.trim()}\n\n${requestMessage}`
                    : requestMessage;

            }

        }

    });

});
