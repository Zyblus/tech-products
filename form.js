function fun() {
    a = document.getElementById("fname").value;
    b = document.getElementById("lname").value;
    c = document.getElementById("mail").value;
    d = document.getElementById("pass").value;
    e = document.getElementById("cpass").value;
    f = document.getElementById("addr").value;

    if (a == "" && b !== "" && c !== "" && d !== "" && e !== "" && f !== "") {
        alert("Please enter your first name.")
    }

    if (a !== "" && b == "" && c !== "" && d !== "" && e !== "" && f !== "") {
        alert("Please enter your last name.")
    }

    if (a !== "" && b !== "" && c == "" && d !== "" && e !== "" && f !== "") {
        alert("Please enter your email.")
    }

    if (a !== "" && b !== "" && c !== "" && d == "" && e !== "" && f !== "") {
        alert("Please enter your password.")
    }

    if (a !== "" && b !== "" && c !== "" && d !== "" && e == "" && f !== "") {
        alert("Please enter your confirm password.")
    }

    if (a !== "" && b !== "" && c !== "" && d !== "" && e !== "" && f == "") {
        alert("Please enter your address.")
    }

    x = document.getElementById("pass");
    y = document.getElementById("cpass");
    if (x.value !== y.value) {
        x.focus();
    }

    if (a !== "" && b !== "" && c !== "" && d !== "" && e !== "" && f !== "") {
        alert("Account successfully created.")
    }

    else if (a == "" && b == "" && c == "" && d == "" && e == "" && f == "") {
        alert("Please fill out the given fields!")
    }
}

function myfun1() {
    a = document.getElementById("pass").value;
    b = document.getElementById("cpass").value;
    error = document.getElementById("ps");

    if (a !== "" && b !== "") {
        if (a !== b) {
            error.innerHTML = "Password do not matched";
            error.style.color = "red";
        }

        else if (a == b) {
            error.innerHTML = "Password matched";
            error.style.color = "green";
        }
    }
}
