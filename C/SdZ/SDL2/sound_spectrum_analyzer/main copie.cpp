//Using SDL and standard IO
#include <SDL2/SDL.h>
#include <stdio.h>
#include <stdlib.h>
#include <SDL2/SDL_image.h>

//Using the FMOD library to manage the sound
#include <SDL2/fmod.h>

//surface dimension constants
const int surface_WIDTH = 640;
const int surface_HEIGHT = 480;

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

//The surface containing the viewfinder
SDL_Surface* viseur = NULL;

//
SDL_Rect position;

//
SDL_Event event;

//
const char* title = "Gestion du fond avec FMOD";


bool init()
{
    //Initialization flag
    bool success = true;

    //Initialize SDL
    if( SDL_Init( SDL_INIT_VIDEO ) < 0 )
    {
        printf( "SDL could not initialize! SDL_Error: %s\n", SDL_GetError() );
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
            SDL_SetWindowTitle( window, title );
            //Disable the cursor
            SDL_ShowCursor(SDL_DISABLE);
        }
    }

    return success;
}

bool loadMedia()
{
    //Loading success flag
    bool success = true;

    //Loading of the viewfinder
    viseur = IMG_Load("viseur.png");
    if (viseur == NULL)
    {
        printf( "Unable to load image %s! SDL Error: %s\n", "viseur.png", SDL_GetError() );
        success = false;
    }

    return success;
}

void close()
{
    //Deallocate surface
    SDL_FreeSurface( viseur );
    surface = NULL;   

	//Deallocate surface
	SDL_FreeSurface( surface );
	surface = NULL;

    //Destroy window
    SDL_DestroyWindow( window );
    window = NULL;

/*
    //Quit FMOD subsystems
    FMOD_Sound_Release(tir);
    FMOD_System_Close(system2);
    FMOD_System_Release(system2);
*/
    
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
            bool quit = false;

            //Initialize fmod
            FMOD_SYSTEM* system2;
            FMOD_SOUND* tir;
            FMOD_RESULT resultat;
            FMOD_CHANNEL* channel;

            //Creation of the fmod system object
            FMOD_System_Create(&system2);
            FMOD_System_Init(system2, 1, FMOD_INIT_NORMAL, NULL);
      
            //Loading of the sound
            resultat = FMOD_System_CreateSound(system2, "pan.wav", FMOD_CREATESAMPLE, 0, &tir);
            if (resultat != FMOD_OK)
            {
                fprintf(stderr, "Impossible de lire pan.wav\n");
                exit(EXIT_FAILURE);
            }

            while ( !quit )
                {
                    SDL_WaitEvent(&event);
                    switch(event.type)
                    {
                        case SDL_QUIT:
                            quit = true;
                            break;
                        //If mouse is clicked
                        case SDL_MOUSEBUTTONDOWN:
                            FMOD_System_PlaySound(system2, tir, 0, 0, &channel);
                            break;
                        //If mouse is moving
                        case SDL_MOUSEMOTION:
                            position.x = event.motion.x - (viseur->w / 2);
                            position.y = event.motion.y - (viseur->h / 2);
                            break;
                    }

            //Fill the image
            SDL_FillRect( surface, NULL, SDL_MapRGB( surface->format, 0, 0, 0 ) );
            
            //Apply the viewfinder to the surface
            SDL_BlitSurface( viseur, NULL, surface, &position );

            //Update the surface
            SDL_UpdateWindowSurface( window );

            }
        }
    }

    //Free resources and close SDL
    close();

    return 0;
}
