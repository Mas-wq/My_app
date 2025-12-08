
// register.js
const registerForm = document.getElementById("registerForm");
const registerBtn = document.getElementById("registerBtn");

const msgContainer = document.createElement("p");
msgContainer.className = "muted"; // ممكن تستخدم نفس ستايل muted
registerForm.appendChild(msgContainer);

registerBtn.addEventListener("click", () => {
    const name = document.getElementById("name").value.trim();
    const studentId = document.getElementById("studentId").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    if(name && studentId && email && password){
        const student = { name, studentId, email, password };
        sessionStorage.setItem("student", JSON.stringify(student));

        msgContainer.innerHTML = '✅ Registration successful! Session saved.';
        msgContainer.style.color = 'green';

        registerForm.reset();
    } else {
        msgContainer.innerHTML = '⚠ Please fill all fields.';
        msgContainer.style.color = 'red';
    }
});

