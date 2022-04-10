use strict;
use warnings;

my $file_src = "fichier_test1.txt";
my $file_dst = "fichier_test2.txt";
my $fh_src;
my $fh_dst;

open ($fh_src, '<', $file_src) or die "Erreur. Impossible d'ouvrir le fichier '$file_src'";
open ($fh_dst, '>', $file_dst) or die "Erreur. Impossible d'ouvrir le fichier '$file_dst'";

while (my $ligne = <$fh_src>)
{
	print $fh_dst $ligne;
}

close $fh_src;
close $fh_dst;