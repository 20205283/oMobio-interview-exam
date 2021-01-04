<?php
    // CHANGE THE DB INFO ACCORDING TO YOUR DATABASE
    $db_host = 'localhost';
    $db_name = 'exam';
    $db_username = 'root';
    $db_password = '';

    $conn=mysqli_connect($db_host, $db_username, $db_password);
    $database=mysqli_select_db($conn, $db_name);

    // get json values
    $encoded_data=file_get_contents('php://input');
    $decoded_data=json_decode($encoded_data, true);

    //variables for values
    $email=$decoded_data['email'];

    $sql="select id ,email, name, username from user where email='$email'";

    $result=mysqli_query($conn,$sql);

    if(mysqli_num_rows($result) > 0){
      $row=mysqli_fetch_assoc($result);
      $email=$row["email"];
      $name=$row["name"];
      $username=$row["username"];
      $id=$row["id"];
    }
    else{
      $name="";
      $username="";
      $id="";
      $email="";
    }

    $response[]=array("id"=>$id,"email"=>$email, "username"=>$username, "name"=>$name);
    echo json_encode($response);

 ?>
