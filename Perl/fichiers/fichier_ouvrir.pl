use strict;
use warnings;

my $filename = "fichier_test.txt";
open (my $fh, '<', $filename) or die "Erreur. Impossible d'ouvrir le fichier '$filename'";

while (my $ligne = <$fh>)
{
    print $ligne;
}
close $fh;