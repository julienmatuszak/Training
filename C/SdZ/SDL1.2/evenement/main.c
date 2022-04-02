#include <stdio.h>
#include <stdlib.h>
#include <SDL2/SDL.h>
#include <SDL2/SDL_image.h>

const int SCREEN_WIDTH = 640;
const int SCREEN_HEIGHT = 480;

int main(int argc, char** argv)
{
        SDL_Window *window = NULL;
        SDL_Surface *ecran = NULL, *zozor = NULL;
        SDL_Event event;
        SDL_Rect positionZozor;
        SDL_Renderer *gRenderer = NULL;
        int continuer = 1;

    if (SDL_Init(SDL_INIT_VIDEO) == -1)
    {
        fprintf(stderr, "Erreur d'initialisation de la SDL : %s\n", SDL_GetError());
        exit(EXIT_FAILURE);
    }
    else
    {
        window = SDL_CreateWindow( "Gestion des évènements en SDL", SDL_WINDOWPOS_UNDEFINED, SDL_WINDOWPOS_UNDEFINED, SCREEN_WIDTH, SCREEN_HEIGHT, SDL_WINDOW_SHOWN | SDL_WINDOW_RESIZABLE);
        if(window == NULL)
        {
            fprintf(stderr, "Erreur d'intialisation de la fenêtre : %s\n", SDL_GetError());
        }
        else
        {
                ecran = SDL_GetWindowSurface(window);

                zozor = SDL_LoadBMP("zozor.bmp");
                SDL_SetColorKey(zozor, SDL_TRUE, SDL_MapRGB(zozor->format, 0, 0, 255));
                positionZozor.x = 0;
                positionZozor.y = 0;
                positionZozor.x = ecran->w / 2 - zozor->w / 2;
                positionZozor.y = ecran->h / 2 - zozor->h / 2;

            while(continuer)
            {
                SDL_WaitEvent(&event);
                switch (event.type)
                {
                    case SDL_QUIT:
                        continuer = 0;
                        break;
                    case SDL_KEYDOWN:
                        switch (event.key.keysym.sym)
                        {
                            case SDLK_UP:
                                positionZozor.y--;
                                break;
                            case SDLK_DOWN:
                                positionZozor.y++;
                                break;
                            case SDLK_LEFT:
                                positionZozor.x--;
                                break;
                            case SDLK_RIGHT:
                                positionZozor.x++;
                                break;
                            case SDLK_ESCAPE:
                                continuer = 0;
                                break;
                        }
                    case SDL_MOUSEBUTTONUP:
                        positionZozor.x = event.motion.x;
                        positionZozor.y = event.motion.y;
                        if(event.button.button == SDL_BUTTON_RIGHT)
                        {
                            continuer = 0;
                        }
                    //Get new dimensions and repaint on window size change
                    case SDL_WINDOWEVENT_SIZE_CHANGED:
                        SDL_RenderPresent( gRenderer );
                        break;
                    //Repaint on exposure
                    case SDL_WINDOWEVENT_EXPOSED:
                        SDL_RenderPresent( gRenderer );
                        break;/*case SDL_WINDOWEVENT_RESIZED:
                        positionZozor.x = event.resize.w / 2 - zozor->w / 2;
                        positionZozor.y = event.resize.h / 2 - zozor->h / 2;*/
                        break;
                }

                SDL_FillRect(ecran, NULL, SDL_MapRGB(ecran->format, 0xFF, 0xFF, 0xFF));

                SDL_BlitSurface(zozor, NULL, ecran, &positionZozor);

                SDL_UpdateWindowSurface(window);
            }
            SDL_FreeSurface(zozor);
            SDL_DestroyWindow(window);
            SDL_Quit();
        }

    }

    return EXIT_SUCCESS;
}
