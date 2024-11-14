// JavaScript Code
const screens = {
    "Dashboard": "dashboard-screen",
    "My Courses": "mycourses-screen",
    "My Grades": "mygrades-screen",
    "My Exams": "myexams-screen",
    "My Notes": "mynotes-screen",
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
