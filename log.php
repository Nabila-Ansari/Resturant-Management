<?php 
$servername="localhost";
$username="root";
$password="";
$database_name="log123";

$conn=mysqli_connect($servername,$username,$password,$database_name,3306);
// now check the connection
if(!$conn)
{
    die("connection failed:" . mysqli_connect_error());

}
// echo "success connection";
if(isset($_POST['Login']))
{
  
     $email =$_POST['email'];
     $password=$_POST['password'];
     $sql_query="INSERT INTO entry_detail (email , password) VALUES ('$email' ,'$password')";
    if (mysqli_query($conn, $sql_query))
    {
        echo "Now Details Entry inerted successfully!";
    }
    else 
    {
        echo "Error:" . $sql_query . "" . mysqli_error($conn);
    }
    mysqli_close($conn);
     
     }  //  mysqli_close($conn);
?>