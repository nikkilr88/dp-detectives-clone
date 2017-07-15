<?php

$to = "nikki.lyn.rivera@gmail.com";
$from = "noreply@notify.com";
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

$retval = mail ($to, $name."e-mail: ".$email, $message, 'From:'.$from);

if($retval == true) {
    echo 'Mensaje enviado con éxito <br /> <a href="index.html">Volver</a>';

} else {
    echo 'Uh-oh! Había un error. <br /> <a href="index.html">Volver</a>';
}

?>