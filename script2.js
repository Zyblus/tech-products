function myfun1() {
  x = document.getElementById("background1");
  y = document.getElementById("overlay1");

  if (y.style.display === "none") {
    y.style.display = "initial";
    x.style.display = "none";
  } else {
    y.style.display = "none";
    x.style.display = "initial";
  }
}

function myfun2() {
  x = document.getElementById("background2");
  y = document.getElementById("overlay2");

  if (y.style.display === "none") {
    y.style.display = "initial";
    x.style.display = "none";
  } else {
    y.style.display = "none";
    x.style.display = "initial";
  }
}

function myfun3() {
  x = document.getElementById("background3");
  y = document.getElementById("overlay3");

  if (y.style.display === "none") {
    y.style.display = "initial";
    x.style.display = "none";
  } else {
    y.style.display = "none";
    x.style.display = "initial";
  }
}

function myfun4() {
  x = document.getElementById("background4");
  y = document.getElementById("overlay4");

  if (y.style.display === "none") {
    y.style.display = "initial";
    x.style.display = "none";
  } else {
    y.style.display = "none";
    x.style.display = "initial";
  }
}

function myfun5() {
  x = document.getElementById("background5");
  y = document.getElementById("overlay5");

  if (y.style.display === "none") {
    y.style.display = "initial";
    x.style.display = "none";
  } else {
    y.style.display = "none";
    x.style.display = "initial";
  }
}

function myfun6() {
  x = document.getElementById("background6");
  y = document.getElementById("overlay6");

  if (y.style.display === "none") {
    y.style.display = "initial";
    x.style.display = "none";
  } else {
    y.style.display = "none";
    x.style.display = "initial";
  }
}

function myfun7() {
  x = document.getElementById("background7");
  y = document.getElementById("overlay7");

  if (y.style.display === "none") {
    y.style.display = "initial";
    x.style.display = "none";
  } else {
    y.style.display = "none";
    x.style.display = "initial";
  }
}

function myfun8() {
  x = document.getElementById("background8");
  y = document.getElementById("overlay8");

  if (y.style.display === "none") {
    y.style.display = "initial";
    x.style.display = "none";
  } else {
    y.style.display = "none";
    x.style.display = "initial";
  }
}

function myfun9() {
  x = document.getElementById("background9");
  y = document.getElementById("overlay9");

  if (y.style.display === "none") {
    y.style.display = "initial";
    x.style.display = "none";
  } else {
    y.style.display = "none";
    x.style.display = "initial";
  }
}
function searchfun() {
  a = document.getElementById("search-box").value;
  if (
    a === "laptop" ||
    a === "laptops" ||
    a === "Laptops" ||
    a === "LAPTOPS" ||
    a === "LAPTOP"
  ) {
    window.location.href = "index1.html";
  } else if (
    a === "mobile" ||
    a === "mobiles" ||
    a === "phones" ||
    a === "phone" ||
    a === "Phone" ||
    a === " PHONES" ||
    a === "Mobile" ||
    a === "Mobiles"
  ) {
    window.location.href = "index2.html";
  }
}

function searchenter() {
  a = document.getElementById("search-box").value;
  if (event.key === "Enter" && a == "") {
    alert("Search-bar cannot be empty !!!");
  }
  if (event.key === "Enter" && a == "") {
    alert("Search-bar cannot be empty !!!");
  }

  if (
    event.key === "Enter" &&
    (a === "laptop" ||
      a === "laptops" ||
      a === "Laptops" ||
      a === "LAPTOPS" ||
      a === "LAPTOP")
  ) {
    window.location.href = "index1.html";
  } else if (
    event.key === "Enter" &&
    (a === "mobile" ||
      a === "mobiles" ||
      a === "phones" ||
      a === "phone" ||
      a === "Phone" ||
      a === " PHONES" ||
      a === "Mobile" ||
      a === "Mobiles")
  ) {
    window.location.href = "index2.html";
  } else if (
    event.key === "Enter" &&
    (a === "CALCULATOR" || a === "calculator" || a === "Calculator")
  ) {
    window.location.href = "calculator.html";
  } else if (event.key === "Enter" && a != "") {
    alert("Items not found.");
  }
}
