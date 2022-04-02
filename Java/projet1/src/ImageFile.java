public class ImageFile
{
    final int MAX_SIZE; // final -> variable initialis�e une seule fois

    // Bloc d'initialisation
    {
        int maxsize;
        try
        {
            maxsize = Integer.parseInt(System.getProperty("file.maxsize"));
        }
        catch(Exception ex) // propri�t� "file.maxsize" non d�finie (NullPointerException) ou n'est pas un nombre
        {
            maxsize = 1000; // valeur par d�faut
        }
        MAX_SIZE = maxsize; // variable initialis�e une seule fois
    }

    ImageFile(File f){ /* ... */ }
    ImageFile(File f, int width){ /* ... */ }
    ImageFile(File f, int width, int height){ /* ... */ }
}