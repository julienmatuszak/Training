#include <SDL/SDL.h>

int main(int argc, char *argv[])
{
    SDL_Surface *ecran = NULL ; //initializes the surface pointer, surfaces are necessary to put something on them
    SDL_Surface *rectangle = NULL; //intializes a new surface that will be "painted" inside the screen
    SDL_Surface *lignes[256] = {NULL}; //initializing the lines
    SDL_Rect position; //this will be necessary to place some objects in our window
    
    SDL_Event event;
    int continuer = 1, tempsactuel = 0, tempsavant = 0, i = 0;
    
    // Initialize SDL with video and prints an error message in case of failure
    if (SDL_Init(SDL_INIT_VIDEO) == -1)
    {
        fprintf(stderr, "Erreur d'initialisation de la SDL : %s\n", SDL_GetError()); //Writing of the error
        exit(EXIT_FAILURE);
    }
    
    ecran = SDL_SetVideoMode(640, 256, 32, SDL_HWSURFACE); // we can activate these options later, we set the screen/window with width, height, number of color bits and type of surface (memory wise) between other parameters
    
    rectangle = SDL_CreateRGBSurface(SDL_HWSURFACE, 220, 180, 32, 0, 0, 0, 0);
    // after we filled the screen with our background, we can create our shape which is a different layer with this specific function, we can adjust the type of surface (and others), dimensions, colors and opacity
    
    for(i=0; i <= 255; i++)
        lignes[i] = SDL_CreateRGBSurface(SDL_HWSURFACE, 640, 1, 32, 0, 0, 0, 0);
    //we build the loop for the lines
    
    if(ecran == NULL) // in case the window does not open, see message after
    {
        fprintf(stderr, "Impossible to load the screen: %s\n", SDL_GetError());
        //std::cerr << "Failed to set video mode\n"; a different way to use an error display function, without stdlib.h
        exit(EXIT_FAILURE);
        // return 1; is also possible
    }

    SDL_WM_SetCaption("Ma super fenetre SDL !", NULL);//gives a name to the window

    SDL_FillRect(ecran, NULL, SDL_MapRGB(ecran->format, 255, 255, 255)); //Fills the window with whatever can fill it, in this case it's a color, it could also be an image

    SDL_FillRect(rectangle, NULL, SDL_MapRGB(ecran->format, 255, 255, 255)); //without this call, we don't have any function, we don't have anything, we just created the shaped but we haven't filled it
    //very important! if you set it to be white and have put 0 filter of opacity, you will see nothing, it seems to be a big glitch in Xcode compared to other builders or maybe a problem with my settings
    
    for(i=0; i <= 255; i++)
    {
        position.x = 0;
        position.y = i;
        
        SDL_FillRect(lignes[i], NULL, SDL_MapRGB(ecran->format, i, i, i)); //and now for the loop for the filling of those 256 rectangles
        SDL_BlitSurface(lignes[i], NULL, ecran, &position); //and the necessary blitting, we place it here whereas the others are in a different section
    }
    //and now for the loop for the filling of those 256 rectangles
    
    
    //position is defined for the next function (position of the layer to adjust on the image
    /*
     SDL_Rect position;
    position.x = (640-220)/2; position.y = (480-180)/2; // position is a function that can accept two parameters, x & y
    */
     
    //Now the last surface doesn't appear because it is covered by the background layer and is not placed in the image, so we need to "blit" it, which means to put it over.
    SDL_BlitSurface(rectangle, NULL, ecran, &position); // we need to tell which surface will go on which, then at what position
    SDL_Flip(ecran); //Update the screen (already the case in the loop to keep the image

    while (continuer)
    {
        SDL_PollEvent(&event);
        switch (event.type)
        {
            case SDL_QUIT:
                continuer = 0 ; //on quitte la partie
                break;
        }
        tempsactuel = SDL_GetTicks();
        if ((tempsactuel - tempsavant)> 5)
        {
            SDL_Flip(ecran);
        }
        else
        {
            SDL_Delay(5 -(tempsactuel-tempsavant));
        }
    }

    SDL_FreeSurface(rectangle); // frees memory allocated to the building of the rectangle
    SDL_FreeSurface(ecran); // frees memory allocated to the building of the screen
    for(i=0; i <= 255; i++)
         SDL_FreeSurface(lignes[i]);
    
    // Quit SDL
    SDL_Quit();
    
    return EXIT_SUCCESS; //better than 0
}
