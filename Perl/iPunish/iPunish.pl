use strict;
use warnings;

print "Entrez une phrase : ";
my $phrase = <>; #Récupération de la phrase à recopier
print "Combien de copies ? ";
my $nombre_copies = <>;

print '-' x 30 . "\n";

print $phrase x $nombre_copies;