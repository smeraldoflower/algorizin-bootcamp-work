// Nusaiba Mahmood
// ITP JS HW 3
// HW03script.js

function getFormInput(event)
{
    event.preventDefault();

    let name = document.querySelector("#student_name").value;
    let age = document.querySelector("#age").value;
    let phone = document.querySelector("#phone").value;
    let address = document.querySelector("#address").value;

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
            <td><button id="deleteButton">DELETE</button></td>
        </tr>`
    );
    
    //TO DO: Add functionality to the delete button
    
    //document.getElementById("deleteButton").addEventListener("click",)
};

function deleteStudent(event)
{
    let element = event.target
    if(element.id === 'deleteButton')
    {
        element.parentNode.parentNode.remove();
        //event.target.parentNode.parentNode.remove();
    }
    // document.querySelectorAll("button[id = 'deleteButton']")[0].parentNode.parentNode.remove();
}

document.getElementById("student_form").addEventListener('submit', getFormInput);
document.querySelector("#table").addEventListener('click', deleteStudent);
//document.querySelectorAll("#table button[id = 'deleteButton']").addEventListener('click', deleteStudent);
//document.getElementById("table").addEventListener()
