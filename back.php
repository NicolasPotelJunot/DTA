<?php
// llamando a los campos
    $nombre = $_POST["nombre"];
    $apellido = $_POST["apellido"];
    $email = $_POST["email"];
    $telefono = $_POST["telefono"];
    $empresa = $_POST["empresa"];
    $info = $_POST["info"];

//  datos para el correo
    $destinatario ="nicolaspoteljunot@gmail.com";
    $asunto = "DTA contacto";

    $carta = "De: $nombre $apellido \n";
    $carta .= "Correo: $email \n";
    $carta .= "Teléfono: $telefono \n";
    $carta .= "Empresa: $empresa \n";
    $carta .= "Mensaje: $info";  

// Enviar mensaje
mail($destinatario, $asunto, $carta);
header("Location:mensaje-enviado.html");
?> 