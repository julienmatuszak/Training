/*
jeu.cpp
-----

This source code has been made by Mateo 21 from openclassrooms and has been redesigned by Julien Matuszak

It is the core game
*/

#include <stdlib.h>
#include <stdio.h>
#include <SDL2/SDL.h>
#include <SDL2/SDL_image.h>

#include "constantes.h"
#include "jeu.h"
#include "fichiers.h"

//The SDL and the window have already been initialized.

//Loads media
bool loadMedia2();

//Frees media. The SDL shut down will take place in the main
void close2();

//We draw 4 surfaces containing each a different direction of Mario
SDL_Surface* mario[4] = {NULL};

//Wall, crate, checked crate, objective and present Mario surfaces
SDL_Surface* mur = NULL, *caisse2 = NULL, *caisseOK = NULL, *objectif = NULL, *marioActuel = NULL;

//Basic position and position of the player
SDL_Rect position, positionJoueur;

//Event initialization
SDL_Event event2;

//ints: If there are more than one objective, shows the ones left + 2 indexes for loops + the MAP
int objectifsRestants = 0, i = 0, j = 0;
int carte[NB_BLOCS_LARGEUR][NB_BLOCS_HAUTEUR] = {0};
int time_to_sleep = 500;

bool loadMedia2()
{
    //Loading success flag
    bool success = true;

    //Loading of all the sprites
    mur = IMG_Load("mur.jpg");
    caisse2 = IMG_Load("caisse.jpg");
    caisseOK = IMG_Load("caisse_ok.jpg");
    objectif = IMG_Load("objectif.png");
    mario[BAS] = IMG_Load("mario_bas.gif");
    mario[GAUCHE] = IMG_Load("mario_gauche.gif");
    mario[HAUT] = IMG_Load("mario_haut.gif");
    mario[DROITE] = IMG_Load("mario_droite.gif");

    if( mur == NULL || caisse2 == NULL || caisseOK == NULL || objectif == NULL || mario[BAS] == NULL || mario[GAUCHE] == NULL || mario[HAUT] == NULL || mario[DROITE] == NULL )
    {
        printf( "Unable to load image! SDL Error: %s\n", SDL_GetError() );
        success = false;
    }

    return success;
}

void close2()
{
    //Deallocate surfaces
    for ( i = 0; i < 4; i++)
    {
        SDL_FreeSurface( mario[i] );
        mario[i] = NULL;
    }
    SDL_FreeSurface( mur );
    mur = NULL;
    SDL_FreeSurface( marioActuel );
    marioActuel = NULL;
    SDL_FreeSurface(caisse2);
    caisse2 = NULL;
    SDL_FreeSurface(caisseOK);
    caisseOK = NULL;
    SDL_FreeSurface(objectif);
    objectif = NULL;
}

//This function is designed to make Mario move himself and the crates in the sokoban level
void jouer(SDL_Surface* screen, SDL_Window* window)
{
    //Load media
    if( !loadMedia2() )
    {
        printf( "Failed to load media!\n" );
    }
    else
    {
        //Main loop flag
        bool quit = false;
        
        //Positioning of Mario towards the bottom
        marioActuel = mario[BAS];

        //Loading the level + stopping the game in case level is not loaded
        if ( !chargerNiveau(carte) )
            exit( EXIT_FAILURE );

        //Looking for Mario initial position
        for (i = 0 ; i < NB_BLOCS_LARGEUR ; i++)
        {
            for (j = 0 ; j < NB_BLOCS_HAUTEUR ; j++)
            {
                if ( carte[i][j] == MARIO ) // Si Mario se trouve à cette position sur la carte
                {
                    positionJoueur.x = i;
                    positionJoueur.y = j;
                    carte[i][j] = VIDE;
                }
            }
        }

            //We erase the screenn and fill it white
            SDL_FillRect( screen, NULL, SDL_MapRGB( screen->format, 255, 255, 255 ) );

            //for(int i = 0; i < time_to_sleep; i++)
            //{ 
        //While application is running
        while( !quit )
        {
            SDL_WaitEvent(&event2);
            switch(event2.type)
            {
                case SDL_QUIT:
                    quit = true;
                    break;
                case SDL_KEYDOWN:
                    switch(event2.key.keysym.sym)
                    {
                        case SDLK_ESCAPE:
                            quit = true;
                            break;
                        case SDLK_UP:
                            marioActuel = mario[HAUT];
                            deplacerJoueur(carte, &positionJoueur, HAUT);
                            break;
                        case SDLK_DOWN:
                            marioActuel = mario[BAS];
                            deplacerJoueur(carte, &positionJoueur, BAS);
                            break;
                        case SDLK_RIGHT:
                            marioActuel = mario[DROITE];
                            deplacerJoueur(carte, &positionJoueur, DROITE);
                            break;
                        case SDLK_LEFT:
                            marioActuel = mario[GAUCHE];
                            deplacerJoueur(carte, &positionJoueur, GAUCHE);
                            break;
                    }
                    break;
            }

            //We erase the screenn and fill it white
            SDL_FillRect( screen, NULL, SDL_MapRGB( screen->format, 255, 255, 255 ) );

            //Place the objects on the screen
            objectifsRestants = 0;

            //Aoply the different objects on the screen
            for (i = 0 ; i < NB_BLOCS_LARGEUR ; i++)
            {
                for (j = 0 ; j < NB_BLOCS_HAUTEUR ; j++)
                {
                    position.x = i * TAILLE_BLOC;
                    position.y = j * TAILLE_BLOC;

                    switch(carte[i][j])
                    {
                        case MUR:
                            SDL_BlitSurface(mur, NULL, screen, &position);
                            break;
                        case CAISSE:
                            SDL_BlitSurface(caisse2, NULL, screen, &position);
                            break;
                        case CAISSE_OK:
                            SDL_BlitSurface(caisseOK, NULL, screen, &position);
                            break;
                        case OBJECTIF:
                            SDL_BlitSurface(objectif, NULL, screen, &position);
                            objectifsRestants = 1;
                            break;
                    }
                }
            }

            //We check if there are any objectives left
            if ( !objectifsRestants )
                quit = true;

            //Otherwise we place the player at the right position
            position.x = positionJoueur.x * TAILLE_BLOC;
            position.y = positionJoueur.y * TAILLE_BLOC;
            //Apply the new position of Mario on the screen
            SDL_BlitSurface(marioActuel, NULL, screen, &position);

            //Update the surface
            SDL_UpdateWindowSurface( window );
                                //SDL_Delay(5000);


                            //Initialize the index to pause the window
               // SDL_PumpEvents();
                //SDL_Delay(1);

        }
    //}
        }

    //Free resources
    close2();

}


void deplacerJoueur(int carte[][NB_BLOCS_HAUTEUR], SDL_Rect *pos, int direction)
{
    switch(direction)
    {
        case HAUT:
            if (pos->y - 1 < 0) // Si le joueur dépasse l'écran, on arrête
                break;
            if (carte[pos->x][pos->y - 1] == MUR) // S'il y a un mur, on arrête
                break;
            // Si on veut pousser une caisse, il faut vérifier qu'il n'y a pas de mur derrière (ou une autre caisse, ou la limite du monde)
            if ((carte[pos->x][pos->y - 1] == CAISSE || carte[pos->x][pos->y - 1] == CAISSE_OK) &&
                (pos->y - 2 < 0 || carte[pos->x][pos->y - 2] == MUR ||
                carte[pos->x][pos->y - 2] == CAISSE || carte[pos->x][pos->y - 2] == CAISSE_OK))
                break;

            // Si on arrive là, c'est qu'on peut déplacer le joueur !
            // On vérifie d'abord s'il y a une caisse à déplacer
            deplacerCaisse(&carte[pos->x][pos->y - 1], &carte[pos->x][pos->y - 2]);

            pos->y--; // On peut enfin faire monter le joueur (oufff !)
            break;


        case BAS:
            if (pos->y + 1 >= NB_BLOCS_HAUTEUR)
                break;
            if (carte[pos->x][pos->y + 1] == MUR)
                break;

            if ((carte[pos->x][pos->y + 1] == CAISSE || carte[pos->x][pos->y + 1] == CAISSE_OK) &&
                (pos->y + 2 >= NB_BLOCS_HAUTEUR || carte[pos->x][pos->y + 2] == MUR ||
                carte[pos->x][pos->y + 2] == CAISSE || carte[pos->x][pos->y + 2] == CAISSE_OK))
                break;


            deplacerCaisse(&carte[pos->x][pos->y + 1], &carte[pos->x][pos->y + 2]);

            pos->y++;
            break;


        case GAUCHE:
            if (pos->x - 1 < 0)
                break;
            if (carte[pos->x - 1][pos->y] == MUR)
                break;

            if ((carte[pos->x - 1][pos->y] == CAISSE || carte[pos->x - 1][pos->y] == CAISSE_OK) &&
                (pos->x - 2 < 0 || carte[pos->x - 2][pos->y] == MUR ||
                carte[pos->x - 2][pos->y] == CAISSE || carte[pos->x - 2][pos->y] == CAISSE_OK))
                break;


            deplacerCaisse(&carte[pos->x - 1][pos->y], &carte[pos->x - 2][pos->y]);

            pos->x--;
            break;


        case DROITE:
            if (pos->x + 1 >= NB_BLOCS_LARGEUR)
                break;
            if (carte[pos->x + 1][pos->y] == MUR)
                break;

            if ((carte[pos->x + 1][pos->y] == CAISSE || carte[pos->x + 1][pos->y] == CAISSE_OK) &&
                (pos->x + 2 >= NB_BLOCS_LARGEUR || carte[pos->x + 2][pos->y] == MUR ||
                carte[pos->x + 2][pos->y] == CAISSE || carte[pos->x + 2][pos->y] == CAISSE_OK))
                break;

            deplacerCaisse(&carte[pos->x + 1][pos->y], &carte[pos->x + 2][pos->y]);

            pos->x++;
            break;
    }
}

void deplacerCaisse(int *premiereCase, int *secondeCase)
{
    if (*premiereCase == CAISSE || *premiereCase == CAISSE_OK)
    {
        if (*secondeCase == OBJECTIF)
            *secondeCase = CAISSE_OK;
        else
            *secondeCase = CAISSE;

        if (*premiereCase == CAISSE_OK)
            *premiereCase = OBJECTIF;
        else
            *premiereCase = VIDE;
    }
}
