function clearall() {
    x = document.getElementById('inputbox');
    x.value = x.value.slice(null, null);
    x.value = "";
}

function slice() {
    x = document.getElementById('inputbox');
    x.value = x.value.slice(null, -1);
}

function appendtoinput(val) {
    document.getElementById('inputbox').value += val;
}

function result() {
    l = document.getElementById('inputbox').value;
    if (l != "") {
        const expression = document.getElementById('inputbox').value;
        try {
            x = eval(expression);
            document.getElementById('inputbox').value = x;
        }
        catch {
            document.getElementById('inputbox').value = "Error";
        };
    }
}