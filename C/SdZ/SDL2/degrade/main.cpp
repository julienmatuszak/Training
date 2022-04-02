//Using SDL and standard IO
#include <SDL2/SDL.h>
#include <stdio.h>

//Screen dimension constants
const int SCREEN_WIDTH = 640;
const int SCREEN_HEIGHT = 256;

void pause();

int main( int argc, char* args[] )
{
    //The window we'll be rendering to
    SDL_Window* window = NULL;
    
    //The surface contained by the window
    SDL_Surface* screenSurface = NULL;

    //The declaration of the array of surfaces that will constitute the gradiations
    SDL_Surface* lignes[SCREEN_HEIGHT] = {NULL};

    //The index for the gradation
    int i;
    
    //The position of the gradation line
    SDL_Rect position;


    //Initialize SDL
    if( SDL_Init( SDL_INIT_VIDEO ) < 0 )
    {
        printf( "SDL could not initialize! SDL_Error: %s\n", SDL_GetError() );
    }
    
    else
    {
        //Create window (used to be SDL_SetVideoMode instead of SDL_CreateWindow)
        window = SDL_CreateWindow( "SDL Tutorial", SDL_WINDOWPOS_UNDEFINED, SDL_WINDOWPOS_UNDEFINED, SCREEN_WIDTH, SCREEN_HEIGHT, SDL_WINDOW_SHOWN );
        if( window == NULL )
        {
            printf( "Window could not be created! SDL_Error: %s\n", SDL_GetError() );
        }
        
        else
        {
            //Get window surface
            screenSurface = SDL_GetWindowSurface( window );

            //Fill the surface white
            SDL_FillRect( screenSurface, NULL, SDL_MapRGB( screenSurface->format, 0xFF, 0xFF, 0xFF ) );

            //We build a loop to fill the basic surface with our gradation from black to white
            for(i = 0; i < SCREEN_HEIGHT; i++)
            {
                position.x = 0;
                position.y = 0;
                //To create the revert gradation
                //position.y = 255-i;

                //No need to create new surfaces, we can just create color ones with this function
                lignes[i] = SDL_CreateRGBSurface(0, 640, 1, 32, 0, 0, 0, 0);

                //printf("%d", i);
                SDL_FillRect( lignes[i], NULL, SDL_MapRGB( screenSurface->format, i, i, i ) );

                SDL_BlitSurface(lignes[i], NULL, screenSurface, &position);

                //Update the surface
                SDL_UpdateWindowSurface( window );
            }

            //Free space
            for(i = 0; i < SCREEN_HEIGHT; i++)
            {
                SDL_FreeSurface(lignes[i]);
            }

            //Wait five seconds
            SDL_Delay( 5000 );
            //We can also use a pause program. See pause()
        }
    }
    
    //Destroy window
    SDL_DestroyWindow( window );
    
    //Quit SDL subsystems
    SDL_Quit();
    
    return 0;
}

void pause(){
    int continuer = 1;
    SDL_Event event;

    while(continuer){
        SDL_WaitEvent(&event);
        switch(event.type){
            case SDL_QUIT:
                continuer = 0;
        }
    }
}
