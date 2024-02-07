<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "form";

$conn = mysqli_connect($servername, $username, $password, $dbname);
if ($conn) {
    die("Connection successful");
    if (isset($_POST['submit'])) {
        $firstname = $_POST['fname'];
        $lastname = $_POST['lname'];
        $email = $_POST['mail'];
        $password = $_POST['pass'];
        $confirmpass = $_POST['cpass'];
        $address = $_POST['addr'];
        // inserting data

        $sql = 'INSERT INTO Data_entry("First name", "Last name", "E-mail", "Password", "Confirm-password", "Address") 
        VALUES ($firstname,$lastname,$email,$password,$confirmpass,$address)';
        //
        $sql = "INSERT INTO data entry (first_name, last_name, email, password, confirm_password, address)
        VALUES ('$firstname', '$lastname', '$email', '$password', '$confirmpass', '$address')";

        $res = mysqli_query($conn, $sql);
        if ($res) {
            die("<br>Data successfully entered.");
        } else {
            die("<br>Data insertion failed" . mysqli_error($conn));
        }
    }
} else {
    die("Connection fail" . mysqli_connect_error());
}