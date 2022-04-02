//Using SDL and standard IO
#include <SDL2/SDL.h>
#include <stdio.h>
#include <stdlib.h>
#include <SDL2/SDL_image.h>

//Using the TTF library
#include <SDL2/SDL_ttf.h>

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

//The image we will load and show on the surface
SDL_Surface* text = NULL;

//
SDL_Surface* background = NULL;

//
SDL_Rect position;

//
SDL_Event event;

//
TTF_Font* police = NULL;

//
SDL_Color couleurNoire = {0, 0, 0}, couleurBlanche = {255, 255, 255};

//
const char* title = "Gestion du texte avec SDL_ttf";

//
int presentTime = 0, previousTime = 0, counter = 0;

//Sufficiently big array of characters
char temps[20] = "";


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
    else if ( TTF_Init() == -1 )
    {
        printf( "TTF could not initialize! TTF_Error: %s\n", TTF_GetError() );
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
            SDL_SetWindowTitle( window, title );
        }
    }

    return success;
}

bool loadMedia()
{
    //Loading success flag
    bool success = true;
/*
    //Load background image
    background = IMG_Load( "moraira.jpg" );
    if( background == NULL )
    {
        printf( "Unable to load image %s! SDL Error: %s\n", "moraira.jpg", SDL_GetError() );
        success = false;
    }

	//Remove the blue background
	SDL_SetColorKey(background, SDL_TRUE, SDL_MapRGB(background->format, 0, 0, 255));
*/
    //Load font
    police = TTF_OpenFont("angelina.ttf", 65);
    if( police == NULL )
    {
        printf( "Unable to load font %s! TTF Error: %s\n", "angelina.ttf", TTF_GetError() );
        success = false;
    }

    //Initializing time
    presentTime = SDL_GetTicks();
    sprintf(temps, "Temps : %d", counter);

    //Write some text to the text surface
    //text = TTF_RenderText_Blended(police, "Salut les Zer0s !", couleurNoire);
    text = TTF_RenderText_Shaded(police, temps, couleurNoire, couleurBlanche);

    if( text == NULL )
    {
        printf( "Failed to render text! TTF Error: %s\n", TTF_GetError() );
        success = false;
    }       

    return success;
}

void close()
{
	//Deallocate police
	TTF_CloseFont(police);
	TTF_Quit();

	//Deallocate surface
	SDL_FreeSurface( surface );
	surface = NULL;

	//Deallocate surface
	SDL_FreeSurface( text );
	text = NULL;

    //Deallocate surface
    SDL_FreeSurface( background );
    background = NULL;

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
            bool quit = false;

            while ( !quit )
            {
                SDL_PollEvent(&event);
                switch(event.type)
                {
                    case SDL_QUIT:
                        quit = true;
                        break;
                }

                //Fill the image
                SDL_FillRect( surface, NULL, SDL_MapRGB( surface->format, 255, 255, 255 ) );
                
                presentTime = SDL_GetTicks();
                if (presentTime - previousTime >= 100) /* Si 100ms au moins se sont écoulées */
                {
                    counter += 100; /* On rajoute 100ms au compteur */
                    sprintf(temps, "Temps : %d", counter); /* On écrit dans la chaîne "temps" le nouveau temps */
                    SDL_FreeSurface(text); /* On supprime la surface précédente de la mémoire avant d'en charger une nouvelle (IMPORTANT) */
                    text = TTF_RenderText_Shaded(police, temps, couleurNoire, couleurBlanche); /* On écrit la chaine temps dans la SDL_Surface */
                    previousTime = presentTime; /* On met à jour le tempsPrecedent */
                }
                //New position
                position.x = 180;
                position.y = 210;

                //Apply the text to the surface
                SDL_BlitSurface( text, NULL, surface, &position );

                //Update the surface
                SDL_UpdateWindowSurface( window );

            }
        }
    }

    //Free resources and close SDL
    close();

    return 0;
}
