use strict;
use warnings;

print "Entrez H si vous êtes un homme ou F si vous êtes une femme : ";
my $genre = <>;
chomp $genre;

if ($genre eq "H")
{
	print "Bonjour monsieur\n";
}
elsif ($genre eq "F")
{
	print "Bonjour madame\n";
}
else
{
	print "Salut machin\n";
}