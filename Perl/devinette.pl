use strict;
use warnings;

print "Choisissez un animal parmi les suivants :\n";
print "Chat, Mouette, Lama, Chouette\n";
print "-" x 30 . "\n";
print "Est-ce que c'est un oiseau [o/n] ? ";
my $oiseau = <>;
chomp $oiseau;

if ($oiseau eq "o")
{
    print "Est-ce que c'est un oiseau nocturne [o/n] ? ";
    my $nuit = <>;
    chomp $nuit;

    if ($nuit eq "o")
    {
    	print "C'est une chouette !\n";
    }
    elsif ($nuit eq "n")
    {
    	print "C'est une mouette !\n";
    }
    else
    {
    	die "Erreur. Veuillez recommencer SVP.";
	    exit(1);
    }
}
elsif ($oiseau eq "n")
{
    print "Est-ce que cet animal crache [o/n] ? ";
    my $crache = <>;
    chomp $crache;
    
    if ($crache eq "o")
    {
    	print "C'est un lama !\n";
    }
    elsif ($crache eq "n")
    {
    	print "C'est une chat !\n";
    }
    else
    {
    	die "Erreur. Veuillez recommencer SVP.";
	    exit(1);
	}
}
else
{
	die "Erreur. Veuillez recommencer SVP.";
	exit(1);
}