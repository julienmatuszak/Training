use strict;
use warnings;

open (my $fh, '>', 'fichier_test.txt') or die "Impossible d'ouvrir le fichier";
print $fh "Hello, World !\n";

close $fh;