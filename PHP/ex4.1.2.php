<?php
include('/var/www/sdz/web/lib/db.class.php');
$lang_str = 'fr';
include('/var/www/sdz/web/lib/config/config_local.php');
$db = new db($config, 'sdz') or die('hoho : '. pg_last_error());


$reponse = pg_query("SELECT * FROM tutos.jeux_videos WHERE possesseur='Patrick'");

while ($donnees = pg_fetch_array($reponse) )
{
echo '<pre>';
print_r($donnees);
echo '</pre>';
}

pg_close();
?>