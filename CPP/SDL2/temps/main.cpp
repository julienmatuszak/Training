//Using SDL and standard IO
#include <SDL2/SDL.h>
#include <stdio.h>
#include <stdlib.h>
#include <SDL2/SDL_image.h>

//surface dimension constants
const int surface_WIDTH = 640;
const int surface_HEIGHT = 256;

//Initialize
bool init();

//Loads media
bool loadMedia();

//Frees media and shuts down SDL
void close();

//The window we'll be rendering to
SDL_Window* window = NULL;
    
//The surface contained by the window
SDL_Surface* surface = NULL;

//The image we will load and show on the surface
SDL_Surface* zozor = NULL;

//
SDL_Rect positionZozor;

//
SDL_Event event;

//
const char* title = "Maîtrisez le temps!";

//
int presentTime = 0, previousTime = 0, timeToSleep = 400;


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
        window = SDL_CreateWindow( "SDL Tutorial", SDL_WINDOWPOS_UNDEFINED, SDL_WINDOWPOS_UNDEFINED, surface_WIDTH, surface_HEIGHT, SDL_WINDOW_RESIZABLE );
        if( window == NULL )
        {
            printf( "Window could not be created! SDL_Error: %s\n", SDL_GetError() );
            success = false;
        }
        else
        {
            //Get window surface
            surface = SDL_GetWindowSurface( window );
            //Generate a title
            SDL_SetWindowTitle(window, title);
        }
    }

    return success;
}

bool loadMedia()
{
    //Loading success flag
    bool success = true;

    //Load splash image
    zozor = SDL_LoadBMP( "zozor.bmp" );
    if( zozor == NULL )
    {
        printf( "Unable to load image %s! SDL Error: %s\n", "zozor.bmp", SDL_GetError() );
        success = false;
    }

    //Remove the blue background
    SDL_SetColorKey(zozor, SDL_TRUE, SDL_MapRGB(zozor->format, 0, 0, 255));

    return success;
}

void close()
{
    //Deallocate surface
    SDL_FreeSurface( zozor );
    zozor = NULL;

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
            //Create a loop to keep the window open
            int i;
            bool quit = false;

            //position Zozor
            positionZozor.x = surface->w / 2 - zozor->w / 2;
            positionZozor.y = surface->h / 2 - zozor->h / 2;

            while ( !quit )
            {
                //We use this function instead of Delay
                SDL_PollEvent(&event);

                switch(event.type)
                {
                    case SDL_QUIT:
                        quit = true;
                        break;
                }

                presentTime = SDL_GetTicks();
                if(presentTime - previousTime > 30)
                {
                    positionZozor.x ++;
                    previousTime = presentTime;
                }
                
                //Make the CPU idle for the time when nothing has to be done
                else
                {
                    SDL_Delay( 30 - (presentTime - previousTime ) );
                }
                //Apply the image
                SDL_FillRect( surface, NULL, SDL_MapRGB( surface->format, 255, 255, 255 ) );
                SDL_BlitSurface( zozor, NULL, surface, &positionZozor );

                //Update the surface
                SDL_UpdateWindowSurface( window );



            }
        }
    }

    //Free resources and close SDL
    close();

    return 0;
}
