// Nusaiba Mahmood
// ITP JS HW 3
// HW03script.js

function getFormInput()
{
    let name = document.getElementById("student_form").elements.namedItem("student_name").value;
    let age = document.getElementById("student_form").elements.namedItem("age").value;
    let phone = document.getElementById("student_form").elements.namedItem("phone").value;
    let address = document.getElementById("student_form").elements.namedItem("address").value;

    console.log(name);
    console.log(age);
    console.log(phone);
    console.log(address);

    document.getElementById("table-headings").insertAdjacentHTML
    (
        'afterend',
        `<tr>
            <td>${name}</td>
            <td>${age}</td>
            <td>${phone}</td>
            <td>${address}</td>
        </tr>`
    );
};

document
    //.getElementById("student_form").elements.namedItem("addButton")
    .getElementById("addButton")
    .addEventListener("click", getFormInput);