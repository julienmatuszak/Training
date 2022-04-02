//Using SDL and standard IO
#include <SDL2/SDL.h>
#include <stdio.h>
#include <stdlib.h>
#include <SDL2/SDL_image.h>

//Using the FMOD library to manage the sound
#include <SDL2/fmod.h>

//surface dimension constants
const int surface_WIDTH = 500;
const int surface_HEIGHT = 500;

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
SDL_Surface* pochette = NULL;

//
SDL_Rect position;

//
SDL_Event event;

//
const char* title = "Gestion du son avec FMOD";

//
int time_to_sleep = 400;


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
        }
    }

    return success;
}

bool loadMedia()
{
    //Loading success flag
    bool success = true;

    //Loading of the pochette
    pochette = IMG_Load("hype_liesandspeeches.jpg");
    if (pochette == NULL)
    {
        printf( "Unable to load image %s! SDL Error: %s\n", "hype_liesandspeeches.jpg", SDL_GetError() );
        success = false;
    }

    return success;
}

void close()
{
    //Deallocate surface
    SDL_FreeSurface( pochette );
    pochette = NULL;

	//Deallocate surface
	SDL_FreeSurface( surface );
	surface = NULL;

    //Destroy window
    SDL_DestroyWindow( window );
    window = NULL;

/*
    //Quit FMOD subsystems
    FMOD_Sound_Release(musique);
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
            FMOD_SOUND* musique;
            FMOD_RESULT resultat;
            FMOD_CHANNEL* channel;

            //Creation of the fmod system object
            FMOD_System_Create(&system2);
            FMOD_System_Init(system2, 1, FMOD_INIT_NORMAL, NULL);
      
            //Loading of the sound
            resultat = FMOD_System_CreateSound(system2, "hype_home.mp3", FMOD_2D | FMOD_CREATESTREAM, 0, &musique);
            if (resultat != FMOD_OK)
            {
                fprintf(stderr, "Impossible de lire hype_home.mp3\n");
                exit(EXIT_FAILURE);
            }

            //We repeat the music ad infinitum
            FMOD_Sound_SetLoopCount(musique, -1);

            //We start playing the music
            FMOD_System_PlaySound(system2, musique, 0, 0, &channel);

            //We position the image
            position.x = 0;
            position.y = 0; 

            while ( !quit )
            {
                //Fill the image
                SDL_FillRect( surface, NULL, SDL_MapRGB( surface->format, 255, 0, 0 ) );
                
                //Apply the viewfinder to the surface
                SDL_BlitSurface( pochette, NULL, surface, &position );

                //Update the surface
                SDL_UpdateWindowSurface( window );

                SDL_WaitEvent(&event);
                switch(event.type)
                {
                    case SDL_QUIT:
                        quit = true;
                        break;
                    //If mouse is clicked
                    case SDL_KEYDOWN:
                        if(event.key.keysym.sym == SDLK_p)
                        {
                            //we create new parameters to pause
                            FMOD_CHANNELGROUP *canal;
                            FMOD_BOOL etat;
                            //we pause
                            FMOD_System_GetMasterChannelGroup(system2, &canal);
                            FMOD_ChannelGroup_GetPaused(canal, &etat);

                            //if the state is paused
                            if (etat)
                                FMOD_ChannelGroup_SetPaused(canal, 0);
                            else
                                FMOD_ChannelGroup_SetPaused(canal, 1);
                        }
                        break;
                }
            }

        }
    }

    //Free resources and close SDL
    close();

    return 0;
}
