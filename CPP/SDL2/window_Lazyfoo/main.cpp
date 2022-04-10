//Using SDL and standard IO
#include <SDL2/SDL.h>
#include <stdio.h>

//Screen dimension constants
const int SCREEN_WIDTH = 640;
const int SCREEN_HEIGHT = 480;

void pause();

int main( int argc, char* args[] )
{
    //The window we'll be rendering to
    SDL_Window* window = NULL;
    
    //The surface contained by the window
    SDL_Surface* screenSurface = NULL;

    //The second face to create a surface
    SDL_Surface* rectangle = NULL;
    
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

            //Get the other surface
            rectangle = SDL_CreateRGBSurface(0, 220, 180, 32, 0, 0, 0, 0);
            
            //Fill the surface white
            SDL_FillRect( screenSurface, NULL, SDL_MapRGB( screenSurface->format, 17, 206, 112 ) );

            //Fill the other surface green
            SDL_FillRect( rectangle, NULL, SDL_MapRGB( screenSurface->format, 0xFF, 0xFF, 0xFF ) );
            
            //Create a position to fix the second surface
            SDL_Rect position;
            //position.x = 0;
            position.x = (SCREEN_WIDTH / 2) - (220 / 2);
            //position.y = 0;
            position.y = (SCREEN_HEIGHT / 2) - (180/ 2);

            //Blit the surface to the other
            SDL_BlitSurface(rectangle, NULL, screenSurface, &position);

            //Update the surface
            SDL_UpdateWindowSurface( window );
            
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
