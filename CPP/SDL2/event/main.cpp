/*This source code copyrighted by Lazy Foo' Productions (2004-2019)
and may not be redistributed without written permission.*/

//Using SDL and standard IO
#include <SDL2/SDL.h>
#include <stdio.h>

//Screen dimension constants
const int SCREEN_WIDTH = 640;
const int SCREEN_HEIGHT = 480;

//
int continuer = 1;

//Starts up SDL and creates window
bool init();

//Loads media
bool loadMedia();

//Frees media and shuts down SDL
void close();

//The window we'll be rendering to
SDL_Window* gWindow = NULL;
    
//The surface contained by the window
SDL_Surface* gScreenSurface = NULL;

//The image that we will be move on the screen
SDL_Surface* zozor = NULL;

//Position of the image
SDL_Rect positionZozor;

//Title
const char* title = "Gestion des événements en SDL";

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
        gWindow = SDL_CreateWindow( "SDL Tutorial", SDL_WINDOWPOS_UNDEFINED, SDL_WINDOWPOS_UNDEFINED, SCREEN_WIDTH, SCREEN_HEIGHT, SDL_WINDOW_SHOWN | SDL_WINDOW_RESIZABLE );
        if( gWindow == NULL )
        {
            printf( "Window could not be created! SDL_Error: %s\n", SDL_GetError() );
            success = false;
        }
        else
        {
            //Get window surface
            gScreenSurface = SDL_GetWindowSurface( gWindow );
            //Generate a title
            SDL_SetWindowTitle(gWindow, title);
        }
    }

    return success;
}

bool loadMedia()
{
    //Loading success flag
    bool success = true;

    //Load zozor image
    zozor = SDL_LoadBMP( "zozor.bmp" );
    if( zozor == NULL )
    {
        printf( "Unable to load image %s! SDL Error: %s\n", "zozor.bmp", SDL_GetError() );
        success = false;
    }
    SDL_SetColorKey(zozor, SDL_TRUE, SDL_MapRGB(zozor->format, 0, 0, 255));

    return success;
}

void close()
{

    //Deallocate surface
    SDL_FreeSurface( zozor );
    zozor = NULL;

    //Destroy window
    SDL_DestroyWindow( gWindow );
    gWindow = NULL;

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

                //Event handler
                SDL_Event event;

                            for(int i = 0; i < time_to_sleep; i++)
            { 

                //adjust zozor position
                positionZozor.x = gScreenSurface->w / 2 - zozor->w / 2;
                positionZozor.y = gScreenSurface->h / 2 - zozor->h / 2;

                //In SDL2, there is key repeat activated by default
                //SDL_EnableKeyRepeat(10, 10); /* Activation de la répétition des touches */

                //Disable the cursor, which will not be seen
                //SDL_ShowCursor(SDL_DISABLE);

                //Put the mouse in the center of the screen
                //SDL_WarpMouse(gScreenSurface->w / 2, gScreenSurface->h / 2);

                //If window's visibility changes
                //SDL_ACTIVEEVENT
                //event.active.gain
                //event.active.state
                //SDL_APPMOUSEFOCUS
                //SDL_APPINPUTFOCUS
                //SDL_APPACTIVE
                /*
                if ((event.active.state & SDL_APPACTIVE) == SDL_APPACTIVE)
{
                    if (event.active.gain == 0) //Window has been minimized
                        pause = 1;
                    else if (event.active.gain == 1) //Window has been restored
                        pause = 0;
}               */

                //While application is running
                while( !quit )
                {
                    //If we use the function SDL_WaitEvent, the game will just stop so nothing can be done!
                    SDL_WaitEvent(&event);
                    switch(event.type)
                    {
                        case SDL_WINDOWEVENT_RESIZED:
                            //positionZozor.x = event.resize.w / 2 - zozor->w / 2;
                            //positionZozor.y = event.resize.h / 2 - zozor->h / 2;
                            break;
                        case SDL_QUIT:
                        //continuer = 0
                            quit = true;
                            break;
                        //We stop the program in case of right-click
                        case SDL_MOUSEBUTTONUP:
                            positionZozor.x = event.button.x;
                            positionZozor.y = event.button.y;
                            if (event.button.button == SDL_BUTTON_RIGHT)
                                quit = true;
                            break;
                        //In case a touch is typed
                        case SDL_KEYDOWN:
                            switch (event.key.keysym.sym)
                            {
                                case SDLK_UP:
                                    positionZozor.y--;
                                    break;
                                case SDLK_DOWN:
                                    positionZozor.y++;
                                    break;
                                case SDLK_RIGHT:
                                    positionZozor.x++;
                                    break;
                                case SDLK_LEFT:
                                    positionZozor.x--;
                                    break;
                                case SDLK_ESCAPE:
                                    quit = true;
                                    break;
                            }
                            break;
                    }

                                        //We erase the screen and fill it white
                    SDL_FillRect( gScreenSurface, NULL, SDL_MapRGB( gScreenSurface->format, 255, 255, 255 ) );

                    //Apply the image
                    SDL_BlitSurface( zozor, NULL, gScreenSurface, &positionZozor );
                
                    //Update the surface
                    SDL_UpdateWindowSurface( gWindow );

                }
                    //Handle events on queue
                    /*
                    while( SDL_PollEvent( &event ) != 0 )
                    {
                        //User requests quit
                        if( e.type == SDL_QUIT )
                        {
                            quit = true;
                        }
                    }
                    */
            }
        }
    }

    //Free resources and close SDL
    close();

    return 0;
}