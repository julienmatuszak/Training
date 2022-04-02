use strict;
use warnings;

print "Entrez le mot de passe : ";
my $pass = <>;
chomp $pass;

if ($pass eq "s'il te plait")
{
	print "Accès autorisé.\n";
	print "Bienvenu.\n";
}
else
{
	print "Accès refusé.\n";
	print "Allez vous faire voir !\n";
}