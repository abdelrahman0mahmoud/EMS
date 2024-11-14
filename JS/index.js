
const principle_email = "abdo";
const teacher_email = "heba";
const student_email = "merna";
const password = "123";

const email_input = document.getElementById("emailInput");
const password_input = document.getElementById("passwordInput");
const loginBtn = document.getElementById("login_form_submit_btn");

loginBtn.addEventListener('click' , function(){
    const enteredEmail = email_input.value.trim();
    const enteredPassword = password_input.value.trim();


    if(enteredEmail == principle_email){
        window.location.href = "principle.html";
    }
    else if(enteredEmail == teacher_email){
        window.location.href = "teacher.html";
    }
    else if(enteredEmail == student_email){
        window.location.href = "student.html";
    }
    else{
        console.log("incorrect email")
    }
})