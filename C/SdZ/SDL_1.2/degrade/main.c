#include <stdio.h>
#include <stdlib.h>
#include <SDL2/SDL.h>

const int SCREEN_WIDTH = 640;
const int SCREEN_HEIGHT = 512;
void pause();

int main(int argc, char** argv)
{
    SDL_Window* window = NULL;
    SDL_Surface* ecran = NULL;
    //SDL_Surface* lignes[512] = {NULL};
    SDL_Surface* colonnes[640] = {NULL};
    SDL_Rect position;

    if (SDL_Init(SDL_INIT_VIDEO) == -1)
    {
        fprintf(stderr, "Erreur d'initialisation de la SDL : %s\n", SDL_GetError());
        exit(EXIT_FAILURE);
    }
    else
    {
        window = SDL_CreateWindow( "Mon ", SDL_WINDOWPOS_UNDEFINED, SDL_WINDOWPOS_UNDEFINED, SCREEN_WIDTH, SCREEN_HEIGHT, SDL_WINDOW_SHOWN);
        if(window == NULL)
        {
            fprintf(stderr, "Erreur d'intialisation de la fenêtre : %s\n", SDL_GetError());
        }
        else
        {
            ecran = SDL_GetWindowSurface(window);
            SDL_FillRect(ecran, NULL, SDL_MapRGB(ecran->format, 0xFF, 0xFF, 0xFF));

            /*for (int i = 0; i<512; i++)
            {
                lignes[i] = SDL_CreateRGBSurface(0, 640, 1, 32, 0, 0, 0, 0);
            }*/

            for (int i = 0; i<640; i++)
            {
                colonnes[i] = SDL_CreateRGBSurface(0, 1, 512, 32, 0, 0, 0, 0);
            }

            /*for (int i=0; i<256; i++)
            {
                position.x = 0;
                position.y = i;
                SDL_FillRect(lignes[i], NULL, SDL_MapRGB(ecran->format, i, i, i));
                SDL_BlitSurface(lignes[i], NULL, ecran, &position);
            }

            for (int i=0; i<256; i++)
            {
                position.x = 0;
                position.y = 512-i;
                SDL_FillRect(lignes[i], NULL, SDL_MapRGB(ecran->format, i, i, i));
                SDL_BlitSurface(lignes[i], NULL, ecran, &position);
            }*/

            for (int i =0; i<640; i++)
            {
                position.x = i;
                position.y = 0;
                SDL_FillRect(colonnes[i], NULL, SDL_MapRGB(ecran->format, 255-i*255/640, 0/*255-i*255/640*/, 0/*255-i*255/640*/));
                SDL_BlitSurface(colonnes[i], NULL, ecran, &position);
            }

            SDL_UpdateWindowSurface(window);
            SDL_Delay(2000);
            //pause();
        }
    }
    SDL_FreeSurface(ecran);
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
