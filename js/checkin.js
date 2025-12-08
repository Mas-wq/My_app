// checkin.js
const checkinForm = document.getElementById("checkinForm");
const checkinBtn = document.getElementById("checkinBtn");
const checkinMsg = document.getElementById("checkinMsg"); // العنصر موجود في HTML

checkinBtn.addEventListener("click", () => {
    const classCode = document.getElementById("classCode").value.trim();
    const smartQ = document.getElementById("smartQ").value.trim();

    if(!classCode){
        checkinMsg.innerHTML = '⚠ Class Code is required!';
        checkinMsg.style.color = 'red';
        return;
    }

    const record = {
        date: new Date().toLocaleString(),
        classCode,
        smartQ,
        status: "Present"
    };

    let history = JSON.parse(localStorage.getItem("attendanceHistory")) || [];
    history.push(record);
    localStorage.setItem("attendanceHistory", JSON.stringify(history));

    // عرض رسالة النجاح أسفل الفورم
    checkinMsg.innerHTML = '✅ Check-in successful!';
    checkinMsg.style.color = 'green';

    checkinForm.reset();
});
