#include "SDL/SDL.h"

void pause();

int main(int argc, char *argv[])
{
    SDL_Surface *ecran = NULL, *lignes[256] = {NULL};
    SDL_Rect position;
    
    SDL_Event event;
    int i = 0, continuer =1,tempsactuel=0,tempsavant =0;
    
    SDL_Init(SDL_INIT_VIDEO);
    
    ecran = SDL_SetVideoMode(640, 256, 32, SDL_HWSURFACE);
    
    for (i = 0 ; i <= 255 ; i++)
        lignes[i] = SDL_CreateRGBSurface(SDL_HWSURFACE, 640, 1, 32, 0, 0, 0, 0);
    
    SDL_WM_SetCaption("Mon dégradé en SDL !", NULL);
    
    SDL_FillRect(ecran, NULL, SDL_MapRGB(ecran->format, 0, 0, 0));
    
    for (i = 0 ; i <= 255 ; i++)
    {
        position.x = 0; // Les lignes sont à gauche (abscisse de 0)
        position.y = i; // La position verticale dépend du numéro de la ligne
        SDL_FillRect(lignes[i], NULL, SDL_MapRGB(ecran->format, i, i, i));
        SDL_BlitSurface(lignes[i], NULL, ecran, &position);
    }
    
    SDL_Flip(ecran);

    while (continuer)
    {
        SDL_PollEvent(&event);
        switch (event.type)
        {
            case SDL_QUIT:
                continuer = 0 ; //on quitte la partie
                break;
        }
        tempsactuel = SDL_GetTicks();
        if ((tempsactuel - tempsavant)> 5)
        {
            SDL_Flip(ecran);
        }
        else
        {
            SDL_Delay(5 -(tempsactuel-tempsavant));
        }
    }
    
    for (i = 0 ; i <= 255 ; i++) // N'oubliez pas de libérer les 256 surfaces
        SDL_FreeSurface(lignes[i]);
    SDL_Quit();
    
    return EXIT_SUCCESS;
}
