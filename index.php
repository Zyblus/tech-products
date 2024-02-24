<!DOCTYPE html>
<html>

<head>
    <title>Validation</title>
    <link rel="stylesheet" href="form.css">
    <script src="form.js"></script>
</head>

<body>
    <form method="POST">
        <div class="heading">
            <p>Please fill out the form</p><br>
            <input type="text" id="fname" name="fname" placeholder="First name"><br><br>
            <input type="text" id="lname" name="lname" placeholder="Last name"><br><br>
            <input type="email" id="mail" name="mail" placeholder="E-mail"><br><br>
            <input type="password" id="pass" name="pass" placeholder="Password" onkeyup="myfun1()"><br><br>
            <input type="password" id="cpass" name="cpass" placeholder="Confirm-password" onkeyup="myfun1()"><br><br>
            <input type="text" id="addr" name="addr" placeholder="Address"><br><br>
            <span id="ps"></span>
            <br><button name="submit" onclick="fun()" id="b1">Create account</button><br>
            <a href="#">Forget password?</a><br>
            <a href="#">Don't have an account?</a>
        </div>
    </form>
    <?php
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "form";

    $conn = new mysqli($servername, $username, $password, $dbname);

    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    if (isset($_POST['submit'])) {
        $firstname = $_POST['fname'];
        $lastname = $_POST['lname'];
        $email = $_POST['mail'];
        $password = $_POST['pass'];
        $confirmpass = $_POST['cpass'];
        $address = $_POST['addr'];

        $stmt = $conn->prepare("INSERT INTO `data_entry`(`First name`, `Last name`, `E-mail`, `Password`, `Confirm-password`, `Address`) VALUES (?, ?, ?, ?, ?, ?)");
        $stmt->bind_param("ssssss", $firstname, $lastname, $email, $password, $confirmpass, $address);

        if ($stmt->execute()) {
        } else {
            echo "Data insertion failed: " . $conn->error;
        }

        $stmt->close();
    }

    $conn->close();
    ?>

</html>
</body>