function myfun() {

    a = document.getElementById('extract').value;
    x = document.getElementById('laptops');
    y = document.getElementById('phones');

    if (a == "") {
        alert("Search-bar cannot be empty !!!");
    }

    if (a === "laptop" || a === "laptops" || a === "Laptops" || a === "LAPTOPS" || a === "LAPTOP") {
        window.location.href = 'index1.html';
    }

    else if (a === "mobile" || a === "mobiles" || a === "phones" || a === "phone" || a === "Phone" || a === " PHONES" || a === "Mobile" || a === "Mobiles") {
        window.location.href = 'index2.html';
    }

    else if (a === "CALCULATOR") {
        window.location.href = 'calcul.html';
    }

    else if (a != "") {
        alert("Items not found.")
    }
}


function myfun1() {

    a = document.getElementById('extract').value;

    if (event.key === 'Enter' && a == "") {
        alert("Search-bar cannot be empty !!!");
    }

    if (event.key === "Enter" && (a === "laptop" || a === "laptops" || a === "Laptops" || a === "LAPTOPS" || a === "LAPTOP")) {
        window.location.href = 'index1.html';
    }

    else if (event.key === "Enter" && (a === "mobile" || a === "mobiles" || a === "phones" || a === "phone" || a === "Phone" || a === " PHONES" || a === "Mobile" || a === "Mobiles")) {
        window.location.href = 'index2.html';
    }

    else if (event.key === "Enter" && (a === "CALCULATOR" || a === "calculator" || a === "Calculator")) {
        window.location.href = 'calculator.html';
    }

    else if (event.key === "Enter" && a != '') {
        alert("Items not found.");
    }
}
