/*jeu.h

This source code has been made by Mateo 21 from openclassrooms and has been redesigned by Julien Matuszak

It is the header of the core game
*/

#ifndef DEF_JEU
#define DEF_JEU

	void jouer( SDL_Surface* screen, SDL_Window* window );
	void deplacerJoueur( int carte[][ NB_BLOCS_HAUTEUR ], SDL_Rect *pos, int direction );
	void deplacerCaisse( int *premiereCase, int *secondeCase );

#endif