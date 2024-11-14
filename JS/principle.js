// JavaScript Code
const screens = {
    "Dashboard": "dashboard-screen",
    "Schedule": "schedule-screen",
    "Teachers": "teachers-screen",
    "Students": "students-screen",
    "Classes": "classes-screen",
    "Subjects": "subjects-screen",
    "Exams": "exams-screen",
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

//----------------------------------------------------------
function animateCounterSlow(id, target) {
    let counter = document.getElementById(id);
    let count = 0;

    let interval = setInterval(function() {
        if (count < target) {
            count++;
            counter.innerText = count;
        } else {
            clearInterval(interval);
        }
    }, 20); // 1000 milliseconds = 1 second
}

function animateCounterFast(id, target) {
    let counter = document.getElementById(id);
    let count = 0;

    let interval = setInterval(function() {
        if (count < target) {
            count++;
            counter.innerText = count;
        } else {
            clearInterval(interval);
        }
    }, 2); // 1000 milliseconds = 1 second
}

// Call the function for each counter with their target values
animateCounterSlow("teachersCounter", 60);
animateCounterFast("studentsCounter", 800);

//===========================================================================
const AddSlotBtn = document.getElementById("AddSlotFormBTN");
const AddSlotForm = document.getElementById("AddSlotForm");
AddSlotBtn.addEventListener('click' , function(){
    AddSlotForm.style.display = "flex";
    AddSlotForm.style.zIndex = "5";
    document.body.style.opacity = ".2";
})