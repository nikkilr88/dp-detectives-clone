<?php

$to = "marco_afp@yahoo.com.mx";
$from = "noreply@dpdetectivesprofesionales.com";
$name = $_POST['name'];
$tel = $_POST['phone'];
$email = $_POST['email'];
$message = $_POST['message'];

$retval = mail ($to, $name.": ".$email, "Mensaje: ".$message."\n"."Tel:".$tel, 'From:'.$from);

if($retval == true) {
    echo 'Mensaje enviado con éxito <br /> <a href="index.html">Volver</a>';

} else {
    echo 'Uh-oh! Había un error. <br /> <a href="index.html">Volver</a>';
}

?>