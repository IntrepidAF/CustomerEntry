let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const displayBtn = document.getElementById("display-btn")

class Customer {
    constructor(name, phone, address, email) {
        this.name = name;
        this.phone = phone;
        this.address = address;
        this.email = email;
    }
}

displayBtn.addEventListener("click", function() {
   
    
    renderLeads()
})

inputBtn.addEventListener("click", function() {
    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;
    let address = document.getElementById("address").value;
    let email = document.getElementById("email").value;
    myLeads.push(new Customer(name, phone, address, email));
    
})

// 1. Wrap the code below in a renderLeads() function
function renderLeads() {
    let listItems = ""
    for (let i = 0; i < myLeads.length; i++) {
        listItems += "<li>" + "Name: " + myLeads[i].name + "</li>" +
                     "<li>" + "Phone: " + myLeads[i].phone + "</li>" +
                     "<li>" + "Address: " + myLeads[i].address + "</li>" +
                     "<li>" + "Email: " + myLeads[i].email + "</li>" +
                     "<br>"
    }
    ulEl.innerHTML = listItems
}

