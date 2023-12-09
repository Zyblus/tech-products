function myfun() {

    a = document.getElementById('extract').value;
    x = document.getElementById('laptops');
    y = document.getElementById('phones');

    if (a == "") {
        alert("Search-bar cannot be empty !!!")
    }

    if (a === "laptop" || a === "laptops" || a === "Laptops" || a === "LAPTOPS" || a === "LAPTOP") {
        window.location.href = 'index1.html';
    }

    else if (a === "mobile" || a === "mobiles" || a === "phones" || a === "phone" || a === "Phone" || a === " PHONES" || a === "Mobile" || a === "Mobiles") {
        window.location.href = 'index2.html';
    }

    else if (a != "") {
        alert("Items not found.")
    }
}


