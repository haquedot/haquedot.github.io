// Header Scroll
let nav = document.querySelector(".navbar");
window.onscroll = function () {
    if (document.documentElement.scrollTop > 20) {
        nav.classList.add("header_scrolled");
    } else {
        nav.classList.remove("header_scrolled");
    }
}


// document.getElementById('skills').classList.remove('hidden');

// function showSection(sectionId) {
//     // Hide all sections
//     document.getElementById('skills').classList.add('hidden');
//     document.getElementById('courses').classList.add('hidden');
//     document.getElementById('education').classList.add('hidden');
//     document.getElementById('awards').classList.add('hidden');

//     // Remove 'active' class from all buttons
//     document.querySelectorAll('.nav-link').forEach(function (button) {
//         button.classList.remove('active');
//     });

//     // Show the selected section with a delay for the transition effect
//     setTimeout(function () {
//         document.getElementById(sectionId).classList.remove('hidden');
//     }, 50);

//     // Add 'active' class to the clicked button
//     event.target.classList.add('active');
// }

function showSection(sectionId) {
    // Hide all sections
    var sections = document.querySelectorAll('.hidden');
    sections.forEach(function (section) {
        section.classList.remove('visible');
    });

    // Show the selected section
    var selectedSection = document.getElementById(sectionId);
    selectedSection.classList.add('visible');
}