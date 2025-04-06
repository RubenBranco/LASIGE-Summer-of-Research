// Function to handle hamburger menu click
const menutoggler = document.querySelector(".menu-toggler");
const navbar = document.querySelector(".navbar");
const menu = document.querySelector(".menu");

menutoggler.addEventListener("click", () => {
  // Toggle the "show-menu" class on the navbar to show/hide the menu
  navbar.classList.toggle("show-menu");
  if (navbar.classList.contains("show-menu")) {
    // When showing the menu, set max-height to allow it to expand
    menu.style.maxHeight = menu.scrollHeight + "px";
  } else {
    // When hiding the menu, set max-height to 0 and hide overflow
    menu.style.maxHeight = "0px";
    menu.style.overflow = "hidden";
  }
});

const researchLineAcronymToName = {
  "CPS": "cyber-physical-systems",
  "DSI": "data-and-systems-intelligence",
  "DS2": "dependable-and-secure-decentralized-systemsd-systems",
  "HBI": "health-and-biomedical-informatics",
  "IHCI": "inclusive-human-computer-interaction",
  "RSS": "reliable-software-systems",
  "ToC": "theory-of-computing"
};

$(document).ready(function () {
  // This code runs when the document is fully loaded and ready to be manipulated.

  // Function to display projects based on category
  function displayProjects(category) {
    // Clear existing opportunities
    $(".opportunity-card").remove();

    if (Projects && Projects.length > 0) {
      // Hide the "no projects" message
      $("#no-projects-message").hide();

      // Loop through each project in the Projects array
      $.each(Projects, function (index, project) {
        if (category === 'all' || category === project.research_line) {
          // Create a new opportunity card for each project
          const opportunityCard = document.createElement('div');
          opportunityCard.classList.add('opportunity-card');

          // Populate the opportunity card with details
          opportunityCard.innerHTML = `<div class="card">
            <h3 class="title card-title">${project.title}</h3>
            <a href="https://www.lasige.pt/research-line/${researchLineAcronymToName[project.research_line]}/" target="_blank" class="research-line-tag research-line-${project.research_line}">${project.research_line}</a>
            <p>${project.description}</p>
            <a href="${project.link}" target="_blank" class="button">Apply Here</a></div>
          `;

          // Append the opportunity card to the container
          document.querySelector(".card-group").appendChild(opportunityCard);
        }
      });
    } else {
      // If there are no projects available, show the hidden message div
      $("#no-projects-message").show();
    }
  }

  // Call the displayProjects function to load all projects initially
  displayProjects('all');

  // Function to handle filter button clicks
  $(".filter-button").click(function () {
    $(".filter-button").removeClass("active");
    $(this).addClass("active");
    const category = $(this).attr("data-category");
    displayProjects(category);
  });

  // Smooth scroll to the Research Opportunities section when "Apply Now" is clicked
  $(".button").click(function (e) {
    e.preventDefault();
    $("html, body").animate(
      {
        scrollTop: $("#intern").offset().top
      },
      800
    );
  });
});