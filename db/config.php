<?php

$hostname = 'localhost';
$username = 'root';
$password = '';
$database = 'missing_person';

$conn= mysql_connect($hostname, $username, $password, $database);

if($conn){

    print("Connection successful");

}
else {
    print("Database connection failed");
}

?>

