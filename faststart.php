<?php
$db=mysqli_connect('localhost','root','','faststart');
mysqli_set_charset($db,'utf8');
if(isset($_POST['message']))mysqli_query($db,"insert into message(name,email,message)values('{$_POST["name"]}','{$_POST["email"]}','{$_POST["message"]}')");
else mysqli_query($db,"insert into connect(name,email)values('{$_POST["name"]}','{$_POST["email"]}')");