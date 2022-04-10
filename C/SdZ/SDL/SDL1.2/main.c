#include <stdio.h>
#include <stdlib.h>
#include <SDL2/SDL.h>

const int SCREEN_WIDTH = 640;
const int SCREEN_HEIGHT = 480;
void pause();

int main(int argc, char** argv)
{
        SDL_Window* window = NULL;
        SDL_Surface* ecran = NULL;
        SDL_Surface* rectangle = NULL;

    if (SDL_Init(SDL_INIT_VIDEO) == -1)
    {
        fprintf(stderr, "Erreur d'initialisation de la SDL : %s\n", SDL_GetError());
        exit(EXIT_FAILURE);
    }
    else
    {
        window = SDL_CreateWindow( "SDL Tutorial", SDL_WINDOWPOS_UNDEFINED, SDL_WINDOWPOS_UNDEFINED, SCREEN_WIDTH, SCREEN_HEIGHT, SDL_WINDOW_SHOWN);
        if(window == NULL)
        {
            fprintf(stderr, "Erreur d'intialisation de la fenêtre : %s\n", SDL_GetError());
        }
        else
        {
            ecran = SDL_GetWindowSurface(window);
            SDL_FillRect(ecran, NULL, SDL_MapRGB(ecran->format, 0xFF, 0xFF, 0xFF));

            rectangle = SDL_CreateRGBSurface(0, 220, 180, 32, 0, 0, 0, 0);
            SDL_FillRect(rectangle, NULL, SDL_MapRGB(ecran->format, 0, 255, 255));

            SDL_Rect position;
            position.x =0;
            position.y=0;

            SDL_BlitSurface(rectangle, NULL, ecran, &position);

            SDL_UpdateWindowSurface(window);
            SDL_Delay(2000);
            //pause();
        }
    }
    SDL_FreeSurface(rectangle);
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
