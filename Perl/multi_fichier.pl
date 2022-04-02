use strict;
use warnings;

print "Entrez un nombre : ";
my $table_de = <>; #Récupération de la table demandée
chomp $table_de;
my $file = "multi$table_de.txt";
open (my $fh, '>', $file) or die "Erreur. Impossible d'ouvrir le fichier $file.";

for (my $count=0; $count<=100; $count++)
{
	print $fh "$table_de x $count = ".$table_de * $count."\n";
}
close $fh;