<?php
session_start(); // On démarre la session AVANT toute chose

// On s'amuse à créer quelques variables de session :
$_SESSION['prenom'] = 'Jean';
$_SESSION['nom'] = 'Dupont';
$_SESSION['age'] = 24;

// Maintenant que le session_start est fait, on peut taper du code HTML
?>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="fr" >
   <head>
       <title>Titre de ma page</title>
        <meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
    </head>
    <body>

    <p>
        Salut <?php echo $_SESSION['prenom']; ?> !<br />
        Tu es à l'accueil de mon site (index.php). Tu veux aller sur une autre page ?
    </p>
    
    <p>
        <a href="mapage.php" title="Lien vers mapage.php">Lien vers mapage.php</a><br />
        <a href="monscript.php" title="Lien vers monscript.php">Lien vers monscript.php</a><br />
        <a href="informations.php" title="Lien vers informations.php">Lien vers informations.php</a>
    </p>

    </body>
</html>