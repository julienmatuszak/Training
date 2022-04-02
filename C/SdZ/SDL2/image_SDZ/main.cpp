//Using SDL and standard IO
#include <SDL2/SDL.h>
#include <stdio.h>
#include <SDL2/SDL_image.h>

//Screen dimension constants
const int SCREEN_WIDTH = 800;
const int SCREEN_HEIGHT = 600;

//Initialize
bool init();

//Loads media
bool loadMedia();

//Frees media and shuts down SDL
void close();

//The window we'll be rendering to
SDL_Window* gWindow = NULL;
    
//The surface contained by the window
SDL_Surface* gScreenSurface = NULL;

//The icon for the window
SDL_Surface* icon = NULL;

//The image we will load and show on the screen
SDL_Surface* imageDeFond = NULL;

//A second image to test transparency
SDL_Surface* zozor = NULL;

//A non-bitmap image
SDL_Surface* sapin = NULL;

//
const char* title = "Chargement d'images en SDL";

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
        gWindow = SDL_CreateWindow( "SDL Tutorial", SDL_WINDOWPOS_UNDEFINED, SDL_WINDOWPOS_UNDEFINED, SCREEN_WIDTH, SCREEN_HEIGHT, SDL_WINDOW_RESIZABLE );
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

    //Load splash image
    imageDeFond = SDL_LoadBMP( "lac_en_montagne.bmp" );
    if( imageDeFond == NULL )
    {
        printf( "Unable to load image %s! SDL Error: %s\n", "lac_en_montagne.bmp", SDL_GetError() );
        success = false;
    }

    //Load second image
    zozor = SDL_LoadBMP( "zozor.bmp" );
    if( imageDeFond == NULL )
    {
        printf( "Unable to load image %s! SDL Error: %s\n", "lac_en_montagne.bmp", SDL_GetError() );
        success = false;
    }

    return success;
}

void close()
{
    //Deallocate surface
    SDL_FreeSurface( imageDeFond );
    imageDeFond = NULL;

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
            //Wait five seconds
            //Instead of applying the SDL_Delay function for a long time, we can use SDL PumpEvents to make them resurface on the program
            //SDL_Delay( 5000 );
            for(int i = 0; i < time_to_sleep; i++)
            {
                //To adjust the position of the image on the window
                SDL_Rect positionFond;
                positionFond.x = 0;
                positionFond.y = 0;
                //Apply the image
                SDL_BlitSurface( imageDeFond, NULL, gScreenSurface, &positionFond);

                //Adjust the position of the second image
                SDL_Rect positionZozor;
                positionZozor.x = 500;
                positionZozor.y = 260;
                //set the degree of transparency
                SDL_SetSurfaceAlphaMod(zozor, 0);
                //Before making the image transparent, we have to set this function (here, the blue background will disappear)
                SDL_SetColorKey(zozor, SDL_TRUE, SDL_MapRGB(zozor->format, 0, 0, 255));

                //Apply the second image
                SDL_BlitSurface( zozor, NULL, gScreenSurface, &positionZozor);
                //set the degree of transparency doesn't work on sdl2
                SDL_SetSurfaceAlphaMod(zozor, 0);

                //Adjust the position of the non-bitmap image
                SDL_Rect positionSapin;
                positionSapin.x = 100;
                positionSapin.y = 50;
                //Load the non bitmap image with IMG_Load
                sapin = IMG_Load("sapin.png");
                //Apply the image
                SDL_BlitSurface(sapin, NULL, gScreenSurface, &positionSapin);

                //Update the surface
                SDL_UpdateWindowSurface( gWindow );

                //Loading of the icon before creating the window. Doesn't seem to work with mac
                icon = SDL_LoadBMP( "sdl_icone.bmp" );
                SDL_SetWindowIcon(gWindow, icon);
                //Once the icon is set, we can free the memory
                SDL_FreeSurface(icon);

                //Initialize the index to pause the window
                SDL_PumpEvents();
                SDL_Delay(1);
            }
        }
    }

    //Free resources and close SDL
    close();

    return 0;
}
