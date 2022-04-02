use strict;
use warnings;

my $nb_mystere = int(rand 101);
my $essai = -1;

print "Devinez le nombre mystère.\n";

while ($essai != $nb_mystere)
{
	print'> ';
	$essai = <>;

	if ($essai < $nb_mystere)
	{
		print "C'est plus.\n";
	}
	elsif ($essai > $nb_mystere)
	{
		print "C'est moins.\n";
	}
}

print "Gagné !\n";