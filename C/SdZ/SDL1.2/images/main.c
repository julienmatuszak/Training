#include <stdio.h>
#include <stdlib.h>
#include <SDL2/SDL.h>
#include <SDL2/SDL_image.h>

const int SCREEN_WIDTH = 640;
const int SCREEN_HEIGHT = 480;
void pause();

int main(int argc, char** argv)
{
        SDL_Window *window = NULL;
        SDL_Surface *ecran = NULL, *imageDeFond = NULL, *icone = NULL, *sapin = NULL;
        SDL_Rect positionFond, positionSapin;

    if (SDL_Init(SDL_INIT_VIDEO) == -1)
    {
        fprintf(stderr, "Erreur d'initialisation de la SDL : %s\n", SDL_GetError());
        exit(EXIT_FAILURE);
    }
    else
    {
        window = SDL_CreateWindow( "Chargement d'images en SDL", SDL_WINDOWPOS_UNDEFINED, SDL_WINDOWPOS_UNDEFINED, SCREEN_WIDTH, SCREEN_HEIGHT, SDL_WINDOW_SHOWN);
        if(window == NULL)
        {
            fprintf(stderr, "Erreur d'intialisation de la fenêtre : %s\n", SDL_GetError());
        }
        else
        {
            ecran = SDL_GetWindowSurface(window);
            SDL_FillRect(ecran, NULL, SDL_MapRGB(ecran->format, 0xFF, 0xFF, 0xFF));

            positionFond.x = 0;
            positionFond.y = 0;
            positionSapin.x = 500;
            positionSapin.y = 260;
            imageDeFond = SDL_LoadBMP("lac_en_montagne.bmp");
            SDL_BlitSurface(imageDeFond, NULL, ecran, &positionFond);

            icone = SDL_LoadBMP("jaune.bmp");
            SDL_SetSurfaceBlendMode(icone, SDL_BLENDMODE_BLEND);
            SDL_SetSurfaceAlphaMod(icone, 128);
            //SDL_SetColorKey(icone, SDL_TRUE, SDL_MapRGB(icone->format, 255, 255, 0));
            SDL_BlitSurface(icone, NULL, ecran, &positionFond);

            sapin = IMG_Load("sapin.png");
            SDL_BlitSurface(sapin, NULL, ecran, &positionSapin);

            SDL_UpdateWindowSurface(window);
            SDL_Delay(2000);
            //pause();
        }
    }
    SDL_FreeSurface(sapin);
    SDL_FreeSurface(icone);
    SDL_FreeSurface(imageDeFond);
    SDL_DestroyWindow(window);
    SDL_Quit();

    return EXIT_SUCCESS;
}


void pause()
{
    int continuer=1;
    SDL_Event event;

    while(continuer)
    {
        SDL_WaitEvent(&event);
        switch(event.type)
        {
            case SDL_QUIT:
                continuer = 0;
        }
    }
}
