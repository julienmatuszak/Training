/*main.cpp

This source code has been made by Mateo 21 from openclassrooms and has been redesigned by Julien Matuszak

It is designed to create a Sokoban game
*/

//Using SDL, standard IO and library and SDL image to read all kinds of images
#include <SDL2/SDL.h>
#include <stdlib.h>
#include <stdio.h>
#include <SDL2/SDL_image.h>

//Using my personal headers
#include "constantes.h"
#include "jeu.h"
#include "fichiers.h"
//#include "editeur.h"

//Starts up SDL and creates window
bool init();

//Loads media
bool loadMedia();

//Frees media and shuts down SDL
void close();

//The window we'll be rendering to
SDL_Window* window = NULL;
    
//The surface contained by the window
SDL_Surface* screen = NULL;

//The image that we will be move on the screen
SDL_Surface* menu = NULL;

//The icon of the window
SDL_Surface* caisse = NULL;

//Position of the image
SDL_Rect positionMenu;

//Declaration of event
SDL_Event event;

//Title
const char* title = "Mario Sokoban";

//For the main loop delay duration time
const int time_to_sleep = 500;

bool init()
{
    //Initialization flag
    bool success = true;

    //Initialize SDL
    if( SDL_Init( SDL_INIT_VIDEO ) < 0 )
    {
        printf( "SDL could not initialize! SDL_Error: %s\n", SDL_GetError() );
        success = false;
    }
    else
    {
        //Create window
        window = SDL_CreateWindow( "Mario Sokoban", SDL_WINDOWPOS_UNDEFINED, SDL_WINDOWPOS_UNDEFINED, LARGEUR_FENETRE, HAUTEUR_FENETRE, SDL_WINDOW_SHOWN | SDL_WINDOW_RESIZABLE );
        if( window == NULL )
        {
            printf( "Window could not be created! SDL_Error: %s\n", SDL_GetError() );
            success = false;
        }
        else
        {
            //Get window surface
            screen = SDL_GetWindowSurface( window );
            //Generate a title
            SDL_SetWindowTitle( window, title );
            //Generate an icon (even if it doesn't work)
            //First load the image (No need to create a surface)
            caisse = IMG_Load( "caisse.ico" );
            //Then link to the surface
            SDL_SetWindowIcon( window, caisse );
            //Once the icon is set, we can free the memory
            SDL_FreeSurface( caisse );
        }
    }

    return success;
}

bool loadMedia()
{
    //Loading success flag
    bool success = true;

    //Load caisse image
    menu = IMG_Load( "menu.jpg" );
    if( menu == NULL )
    {
        printf( "Unable to load image %s! SDL Error: %s\n", "menu.jpg", SDL_GetError() );
        success = false;
    }
    //SDL_SetColorKey(menu, SDL_TRUE, SDL_MapRGB(zozor->format, 0, 0, 255));

    return success;
}

void close()
{
    //Deallocate surface
    SDL_FreeSurface( menu );
    menu = NULL;

    //Deallocate surface
    SDL_FreeSurface( screen );
    screen = NULL;

    //Destroy window
    SDL_DestroyWindow( window );
    window = NULL;

    //Quit SDL subsystems
    SDL_Quit();
}

int main( int argc, char* args[] )
{
    //Start up SDL and create window
    if( !init() )
    {
        printf( "Failed to initialize!\n" );
    }
    else
    {
        //Load media
        if( !loadMedia() )
        {
            printf( "Failed to load media!\n" );
        }
        else
        {
            //Main loop flag
            bool quit = false;

            //for(int i = 0; i < time_to_sleep; i++)
            //{ 

                //adjust menu position
                positionMenu.x = 0;
                positionMenu.y = 0;

                //While application is running
                while( !quit )
                {
                    //If we use the function SDL_WaitEvent, the game will just stop so nothing can be done!
                    SDL_WaitEvent(&event);
                    switch(event.type)
                    {
                        //In case we click the window to stop the program
                        case SDL_QUIT:
                            quit = true;
                            break;
                        //In case a touch is typed
                        case SDL_KEYDOWN:
                            switch (event.key.keysym.sym)
                            {
                                //In case the touch 1 is typed
                                case SDLK_1:
                                    jouer(screen, window);
                                    break;
                                //In case the touch 2 is typed
                                case SDLK_2:
                                    //editeur(screen);
                                    break;
                                //stop the game in case Escape touch is activated
                                case SDLK_ESCAPE:
                                    quit = true;
                                    break;
                            }
                            break;
                    }

                    //We erase the screen and fill it white
                    SDL_FillRect( screen, NULL, SDL_MapRGB( screen->format, 0, 0, 0 ) );

                    //Apply the menu image on the screen
                    SDL_BlitSurface( menu, NULL, screen, &positionMenu );
                
                    //Update the surface
                    SDL_UpdateWindowSurface( window );
                    //SDL_Delay(5000);

                //Initialize the index to pause the window
                SDL_PumpEvents();
                //SDL_Delay(1);
                }
            //}
        }
    }

    //Free resources and close SDL
    close();

    return 0;
}