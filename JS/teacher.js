// JavaScript Code
const screens = {
    "Dashboard": "dashboard-screen",
    "Exams": "exams-screen",
    "Assignments": "assignments-screen",
    "Grades": "grades-screen",
    "Reports": "reports-screen",
    "Log out": "logout-screen",
};

const options = document.querySelectorAll(".screen-menu-options-opt");

options.forEach(function(option) {
    option.addEventListener('click', function() {
        document.querySelectorAll('.screen-view').forEach(screen => {
            screen.style.display = "none";
        });

        options.forEach(function(opt) {
            opt.classList.remove('hover');
            option.classList.add('hover');
        });

        const screenId = screens[option.textContent];
        if (screenId) {
            document.getElementById(screenId).style.display = "flex";
        }       
    });
});
