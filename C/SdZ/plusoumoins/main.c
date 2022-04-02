#include <stdio.h>
#include <stdlib.h>
#include <time.h>
#include <stdbool.h>

int main ( int argc, char** argv )
{
    int niveau = 0, max = 0, min = 0, nombreMaxChoisi = 0, nombreJoueurs = 0, nombreMystere = 0, nombreEntre = 0, nombreChoisi = 0;
    bool rejouer = true;
    char nouvellePartie = "";


    /* La boucle de partie. Elle se répète tant que le ou les utilisateurs choisi(ssen)t de recommencer après chaque partie */

    while(rejouer)
    {
         /* Choix du niveau de difficulté */

         printf("Choix du niveau de difficulté (1-3) : ");
         scanf("%d", &niveau);
         printf("\n");

         if (niveau == 1)
         {
             max = 100; min = 1; nombreMaxChoisi = 100;
         }
         else if (niveau == 2)
         {
             max = 1000; min = 1; nombreMaxChoisi = 1000;
         }
         else
         {
             max = 10000; min = 1; nombreMaxChoisi = 10000;
         }

         /* Choix du nombre de joueurs */

        printf("Combien de joueurs SVP (1/2) ? ");
        scanf ("%d", &nombreJoueurs);

        /* Mode 1 joueur */

        if (nombreJoueurs == 1)
        {

            // Génération du nombre aléatoire

            srand(time(NULL));
            nombreMystere = (rand() % (max - min + 1)) + min;

            /* Il faut réinitialiser la variable du nombre d'essais ici, car sinon elle totalisera aussi les essais des parties précédentes ! */
            int nombreEssais = 0;

            /* La boucle du programme. Elle se répète tant que l'utilisateur n'a pas trouvé le nombre mystère */

            do
            {
                // On demande le nombre
                printf("Quel est le nombre ? ");
                scanf("%d", &nombreEntre);
                nombreEssais++;


                // On compare le nombre entré avec le nombre mystère
                if (nombreMystere > nombreEntre)
                    printf("C'est plus !\n\n");
                else if (nombreMystere < nombreEntre)
                    printf("C'est moins !\n\n");
                else
                    printf ("Bravo, vous avez trouve le nombre mystere en %d coups\n\n", nombreEssais);
            } while (nombreEntre != nombreMystere);
        }

        /* Mode 2 joueurs */

        else
        {
            /* On demande à un joueur de choisir le nombre et on introduit donc une nouvelle variable, après le reste du programme reste le même qu'en mode 1 joueur */

            printf("Joueur 1: Choisissez un nombre entre 1 et %d: ", nombreMaxChoisi);
            scanf("%d", &nombreChoisi);
            int nombreEssais = 0;

            do
            {
                // On demande le nombre
                printf("Joueur 2: Quel est le nombre ? ");
                scanf("%d", &nombreEntre);
                nombreEssais++;

                // On compare le nombre entré avec le nombre mystère
                if (nombreChoisi > nombreEntre)
                    printf("C'est plus !\n\n");
                else if (nombreChoisi < nombreEntre)
                    printf("C'est moins !\n\n");
                else
                    printf ("Bravo, vous avez trouve le nombre mystere en %d coups\n\n", nombreEssais);
            } while (nombreEntre != nombreChoisi);
        }

        /* Après chaque partie, on propose le choix d'en rejouer une nouvelle */

        printf("Voulez-vous jouer une nouvelle partie ? ");
        scanf(" %c", &nouvellePartie);
        printf("\n");

        if(nouvellePartie == 'O')
        {
            rejouer = true;
        }
       else
       {
            rejouer = false;
        }
    }
    return 0;
}
