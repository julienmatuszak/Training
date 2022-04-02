<?php

$chaine = 'Cette chaîne va être mélangée !';
$chaine = utf8_encode(str_shuffle(utf8_decode($chaine)));

echo $chaine;
?>
