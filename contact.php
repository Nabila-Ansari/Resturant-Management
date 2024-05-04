<?php 
$server_name="localhost";
$username="root";
$password="";
$database_name="databasecontact";

$conn=mysqli_connect($server_name,$username,$password,$database_name,3306);
// now check the connection
if(!$conn)
{
    die("connection failed:" . mysqli_connect_error());

}
// echo "success connection";
if(isset($_POST['Button']))
{
     $name=$_POST['name'];
     $number=$_POST['number'];
     $food=$_POST['food'];
     $email=$_POST['email'];
     $HowMuch=$_POST['HowMuch'];
     $Address=$_POST['Address'];
     $sql_query="INSERT INTO menu (name,number,food,email,HowMuch,Address) VALUES ('$name','$number','$food','$email','$HowMuch','$Address')";
    if (mysqli_query($conn, $sql_query))
    {
        echo "Now Details Entry inserted successfully!";
    }
    else 
    {
        echo "Error:" . $sql_query . "" . mysqli_error($conn);
    }
    mysqli_close($conn);
     
     }  //  mysqli_close($conn);
?>