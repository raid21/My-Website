<?php
    require "dbConnect.php";
    
    $name = mysqli_real_escape_string($conn,$_POST["name"]);
    $email = mysqli_real_escape_string($conn,$_POST["email"]);
    $msg = mysqli_real_escape_string($conn,$_POST["messsage"]);
  
    $sql = "INSERT INTO contact (name, email, message)
    VALUES ('$name', '$email', '$msg')";

    if (mysqli_query($conn, $sql))
    {
        echo "done";
    }
    else
    {
        echo "Error: " . $sql . "</br>" . mysqli_error($conn);
    }
    mysqli_close($conn);
?>
