#!/bin/bash

#On commence par rentrer la condition primordiale: il faut rentrer un fichier à analyser! S'il n'y a pas de paramètre ou s'il n'existe pas, on indique un message d'erreur.

if [ -z $1 ]
then
    echo 'Erreur! Pas de fichier à analyser! Veuillez recommencer SVP'
elif [ ! -e $1 ]
then
    echo 'Erreur! Fichier incorrect! Veuillez recommencer SVP'

# Pour la dernière condition, on commence par créer un fichier. Même si ça n'est pas demandé, ça nous entraîne sur diverses commandes.

else
    echo -n '' > sortie

# On continue par une boucle qui va 'épeler' l'alphabet de A à Z (merci aux auteurs de l'exercice qui n'ont choisi que des majuscules et merci Stack Overflow pour la syntaxe).

    for lettre in {A..Z}
        do

# On repère le nombre d'occurrences par ligne avec la fonction grep et l'option -c (merci man grep) puis on concatène les chaînes obtenues avec les lettres correspondantes grâce à echo en n'oubliant pas les backquotes car on exécute une commande. On met le tout dans le fichier sortie.

        echo `grep -c $lettre $1`" - "$lettre >> sortie
        done

# Il reste à trier sortie, numériquement à l'envers, à l'afficher, puis à lui dir adieu.

    sort -nr -o sortie sortie
    cat sortie
    rm sortie
fi

# Et c'est là qu'on comprend mieux l'origine des points des parties de Scrabble avec grand-mère durant les longues soirées d'hiver.

# On peut tout simplement imaginer dans la continuité de cet exercice dénombrer le nombre total d'occurrences pour chaque lettre (car nous avons fait le nombre d'occurrences par ligne jusqu'à présent). Il faudra donc modifier la commande grep de manière à ce qu'elle compte le nombre total d'occurrences. C'est sûr, c'est pas ce qu'il y a de plus original, je le confesse, mais c'est un nouveau petit challenge de Zéro!

# On peut donc imaginer un second paramètre --tot. Lorsqu'il est reconnu, on active le programme:

if [ ! -z $2 ] && [ $2 == "--tot" ]
    then
    echo -e "\nNombre total d'occurrences par lettre"
    for lettre in {A..Z}
        do

# On recommence la même boucle mais en activant l'option -o qui permet de compter le nombre total d'occurrences de la chaîne recherchée. Cependant, le stdout n'est plus un nombre donc il faut utiliser la commande word count "wc". On pourrait imaginer faire un -oc mais les options sont incompatibles et c est prioritaire (sans doute pour une raison qui m'échappe).
     
        echo `grep -o $lettre $1 | wc -l`" - "$lettre >> sortie
        done
    sort -nr -o sortie sortie
    cat sortie
    rm sortie
fi

# On pourrait maintenant imaginer faire deux sorties différentes et les comparer (on pourrait les "coller" ligne à ligne avec la fonction paste - que je viens de découvrir sur un forum - pour voir si le nombre d'occurrences reste dans le même ordre, ce qui n'est d'ailleurs pas le cas (tous ces 'S' en début de fichier y sont pour quelque chose). C'est incroyable, les possibilités offertes par bash!

# Allez, un dernier script pour la route

if [ ! -z $2 ] && [ $2 == "--motmoy" ]
then
    echo -ne "\nNombre de lettres par mot dans la langue française : "

# Je n'arrive pas à trouver un moyen plus simple d'afficher! Je crois qu'il faut utiliser la commande printf

    echo $(wc -m < $1)/$(wc -l < $1) | bc
fi
