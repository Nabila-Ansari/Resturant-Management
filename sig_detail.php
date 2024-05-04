<?php 
$server_name="localhost";
$username="root";
$password="";
$database_name="sign_in";

$conn=mysqli_connect($server_name,$username,$password,$database_name,3306);
// now check the connection
if(!$conn)
{
    die("connection failed:" . mysqli_connect_error());

}
// echo "success connection";
if(isset($_POST['signing']))
{
    $Username=$_POST['Username'];
     $email =$_POST['email'];
     $password=$_POST['password'];
     $sql_query="INSERT INTO sig_detail ( Username , email , password) VALUES ('$Username' , '$email' ,'$password')";
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