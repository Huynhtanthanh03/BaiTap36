// ===========================
// TK5 - Accordion
// ===========================

function toggleAccordion() {

    const panel = document.getElementById("panel");

    panel.classList.toggle("open");

}

// ===========================
// TK7 - Random Password
// ===========================

function randomPassword() {

    const chars = "abcdefghijklmnopqrstuvwxyz0123456789";

    let password = "";

    for (let i = 0; i < 8; i++) {

        const index = Math.floor(Math.random() * chars.length);

        password += chars[index];

    }

    document.getElementById("password").innerHTML = password;

}

// ===========================
// TK8 - HEX -> RGB
// ===========================

function hexToRGB() {

    const hex = document.getElementById("hex").value;

    if (hex.length !== 7) {

        alert("Nhập mã màu dạng #RRGGBB");

        return;

    }

    const r = parseInt(hex.substring(1, 3), 16);

    const g = parseInt(hex.substring(3, 5), 16);

    const b = parseInt(hex.substring(5, 7), 16);

    document.getElementById("rgb").innerHTML =
        `rgb(${r}, ${g}, ${b})`;

}

// ===========================
// K4 - Pagination
// ===========================

const items = [];

for (let i = 1; i <= 50; i++) {

    items.push("Mục " + i);

}

const perPage = 10;

function showPage(page) {

    const list = document.getElementById("list");

    list.innerHTML = "";

    const start = (page - 1) * perPage;

    const end = start + perPage;

    items.slice(start, end).forEach(item => {

        list.innerHTML += `<li>${item}</li>`;

    });

}

function createPagination() {

    const pagination = document.getElementById("pagination");

    if (!pagination) return;

    pagination.innerHTML = "";

    for (let i = 1; i <= 5; i++) {

        pagination.innerHTML +=
            `<button onclick="showPage(${i})">${i}</button>`;

    }

    showPage(1);

}

// ===========================
// K6 - Keyboard Event
// ===========================

let topPosition = 0;

document.addEventListener("keydown", function (event) {

    const box = document.getElementById("box");

    if (!box) return;

    if (event.key === "ArrowUp") {

        topPosition -= 10;

    }

    if (event.key === "ArrowDown") {

        topPosition += 10;

    }

    box.style.top = topPosition + "px";

});

// ===========================
// K8 - BMI
// ===========================

function calculateBMI() {

    const weight = parseFloat(document.getElementById("weight").value);

    const height = parseFloat(document.getElementById("height").value);

    const bmi = weight / (height * height);

    let result = "";

    if (bmi < 18.5)

        result = "Thiếu cân";

    else if (bmi < 25)

        result = "Bình thường";

    else

        result = "Thừa cân";

    document.getElementById("bmiResult").innerHTML =
        `BMI = ${bmi.toFixed(2)} (${result})`;

}

// ===========================

window.onload = function () {

    createPagination();

};
