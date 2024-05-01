function toggleSidebar() {
    var sidebar = document.getElementById("sidebar");
    var sidebarToggle = document.querySelector(".sidebar-toggle");
    sidebar.classList.toggle("clicked");
    sidebarToggle.classList.toggle("clicked");
    if (sidebar.style.left === "0px") {
        sidebar.style.left = "-200px";
    } else {
        sidebar.style.left = "0px";
    }
}

function showSection(sectionId) {
    var sections = document.querySelectorAll('.content > div');
    sections.forEach(function(section) {
        section.style.display = 'none';
    });
    document.getElementById(sectionId).style.display = 'block';
}

function scrollToSection(sectionId) {
    var section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
    showSection(sectionId); // Show section content after clicking on menu item
    toggleSidebar(); // Close sidebar after clicking on menu item
}

function buyOrAddToCart() {
    var buttons = document.querySelectorAll('.button');
    buttons.forEach(function(button) {
        button.style.backgroundColor = '#28a745'; // Green color
        setTimeout(function() {
            button.style.backgroundColor = '#007bff'; // Reset color after 0.5 seconds
        }, 500);
    });
}
