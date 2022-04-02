public class ImageFile
{
    final int MAX_SIZE; // final -> variable initialisée une seule fois

    // Bloc d'initialisation
    {
        int maxsize;
        try
        {
            maxsize = Integer.parseInt(System.getProperty("file.maxsize"));
        }
        catch(Exception ex) // propriété "file.maxsize" non définie (NullPointerException) ou n'est pas un nombre
        {
            maxsize = 1000; // valeur par défaut
        }
        MAX_SIZE = maxsize; // variable initialisée une seule fois
    }

    ImageFile(File f){ /* ... */ }
    ImageFile(File f, int width){ /* ... */ }
    ImageFile(File f, int width, int height){ /* ... */ }
}