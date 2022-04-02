//Using SDL and standard IO
#include <SDL2/SDL.h>
#include <stdio.h>
#include <stdlib.h>

//Using the FMOD library to manage the sound
#include <SDL2/fmod.h>

//surface dimension constants
#define LARGEUR_FENETRE         512
#define HAUTEUR_FENETRE         400
#define RATIO                   (HAUTEUR_FENETRE / 255.0)
#define DELAI_RAFRAICHISSEMENT  25
#define TAILLE_SPECTRE          512

void setPixel(SDL_Surface* surface, int x, int y, Uint32 pixel);

//Initialize
bool init();

//Frees media and shuts down SDL
void close();

//The window we'll be rendering to
SDL_Window* window = NULL;
    
//The surface contained by the window
SDL_Surface* surface = NULL;

//
SDL_Event event;

//size of the different frequencies + parameters to adjust the time and the loops
int hauteurBarre = 0, tempsActuel = 0, tempsPrecedent = 0, i = 0, j = 0;

//the spectrum itself
float spectre[TAILLE_SPECTRE];

//
const char* title = "Spectre de fréquences avec FMOD";

//
//int time_to_sleep = 400;

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
        window = SDL_CreateWindow( "SDL Tutorial", SDL_WINDOWPOS_UNDEFINED, SDL_WINDOWPOS_UNDEFINED, LARGEUR_FENETRE, HAUTEUR_FENETRE, SDL_WINDOW_RESIZABLE );
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
}

void close()
{
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
        bool quit = false;

        //Iniitialize FMOD
        FMOD_SYSTEM* system2;
        FMOD_SOUND* musique;
        FMOD_CHANNEL* canal;
        FMOD_RESULT resultat;

        //Loading of the music
        resultat = FMOD_System_CreateSound(system2, "hype_home.mp3", FMOD_2D | FMOD_CREATESTREAM, 0, &musique );
        if (resultat != FMOD_OK)
        {
            fprintf( stderr, "Impossible de lire le fichier mp3\n");
            exit(EXIT_FAILURE);
        }

        FMOD_System_Create(&system2);
        FMOD_System_Init(system2, 1, FMOD_INIT_NORMAL, NULL);


        //We play the music
        FMOD_System_PlaySound(system2, musique, 0, 0, &canal);

        //We get the pointer of the canal
        FMOD_System_GetChannel(system2, 0, &canal);

        while ( !quit )
        {
            //We sute this function because we don't wait for an event to update the window
            SDL_PollEvent(&event);
            switch(event.type)
            {
                case SDL_QUIT:
                    quit = true;
                    break;
            }
            //Fill the image
            SDL_FillRect( surface, NULL, SDL_MapRGB( surface->format, 0, 0, 0 ) );
            
            //Apply the viewfinder to the surface
            //SDL_BlitSurface( pochette, NULL, surface, &position );

            //Update the surface
            //SDL_UpdateWindowSurface( window );

            //time management
            tempsActuel = SDL_GetTicks();
            if (tempsActuel - tempsPrecedent < DELAI_RAFRAICHISSEMENT)
            {
                SDL_Delay(DELAI_RAFRAICHISSEMENT - (tempsActuel - tempsPrecedent));
            }
            tempsPrecedent = SDL_GetTicks();

            //Realise the spectrum
            FMOD_Channel_GetSpectrum(canal, spectre, TAILLE_SPECTRE, 0, FMOD_DSP_FFT_WINDOW_RECT);

            SDL_LockSurface(surface);

            for (i = 0; i < LARGEUR_FENETRE; i++)
            {
                hauteurBarre = spectre[i] * 20 * HAUTEUR_FENETRE;

                if (hauteurBarre > HAUTEUR_FENETRE)
                    hauteurBarre = HAUTEUR_FENETRE;

                for (j = HAUTEUR_FENETRE - hauteurBarre; j < HAUTEUR_FENETRE; j++)
                {
                    setPixel(surface, i, j, SDL_MapRGB(surface->format, 255 - (j / RATIO), j / RATIO, 0));
                }
            }
        SDL_UnlockSurface(surface);
        SDL_UpdateWindowSurface( window );
        }

    }

    //Free resources and close SDL
    close();

    return 0;
}

//setPixel draws the spectrum pixel by pixel
void setPixel(SDL_Surface *surface, int x, int y, Uint32 pixel)
{
    int bpp = surface->format->BytesPerPixel;

    Uint8 *p = (Uint8 *)surface->pixels + y * surface->pitch + x * bpp;

    switch(bpp)
    {
    case 1:
        *p = pixel;
        break;

    case 2:
        *(Uint16 *)p = pixel;
        break;

    case 3:
        if(SDL_BYTEORDER == SDL_BIG_ENDIAN) {
            p[0] = (pixel >> 16) & 0xff;
            p[1] = (pixel >> 8) & 0xff;
            p[2] = pixel & 0xff;
        } else {
            p[0] = pixel & 0xff;
            p[1] = (pixel >> 8) & 0xff;
            p[2] = (pixel >> 16) & 0xff;
        }
        break;

    case 4:
        *(Uint32 *)p = pixel;
        break;
    }
}
