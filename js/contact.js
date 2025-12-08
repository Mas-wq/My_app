// contact.js
const contactForm = document.getElementById("contactForm");
const sendBtn = document.getElementById("sendContactBtn");
const contactMsg = document.getElementById("contactMsg");

sendBtn.addEventListener("click", () => {
    const email = document.getElementById("cEmail").value.trim();
    const subject = document.getElementById("cSubject").value.trim();
    const message = document.getElementById("cMessage").value.trim();

    if(email && subject && message){
        contactMsg.textContent = "Message sent successfully!";
        contactForm.reset();
    } else {
        contactMsg.textContent = "Please fill all fields.";
    }
});
