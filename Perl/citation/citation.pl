use strict;
use warnings;

my $filename = "citation.txt";
my $count = 1;

open (my $fh, '<', $filename) or die "Erreur. Impossible d'ouvrir le fichier '$filename'";

while (my $ligne = <$fh>)
{
    print $count . "\t" . $ligne;
    $count++;
}
print "\n";
close $fh;