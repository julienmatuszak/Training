#On définit une classe-mère Personne qui nous permettra de définir les classes Joueur et Ennemi

class Personne
  attr_accessor :nom, :points_de_vie, :en_vie

  def initialize(nom)
    @nom = nom
    @points_de_vie = 100
    @en_vie = true
  end

  def info
    # - Renvoie le nom et les points de vie si la personne est en vie
    if points_de_vie > 0
        return [nom, points_de_vie]
    # - Renvoie le nom et "vaincu" si la personne a été vaincue
    else
        return [nom, "vaincu"]
    end
  end

  def attaque(personne)
    # C'est cette méthode qui est appelée dans le déroulement du jeu. On l'associe à l'autre méthode subit_attaque, ce qui est assez logique quand on y pense, le bourreau et la victime, tout ça.
    # - Fait subir des dégats à la personne passée en paramètre
    personne.points_de_vie = personne.subit_attaque(degats)
    # - Affiche ce qu'il s'est passé
    if personne.points_de_vie == 0
      puts "#{personne.nom} est mort !" 
    else
      puts "#{personne.nom} a encore #{personne.points_de_vie} points de vie !\n" 
    end
  end

  def subit_attaque(degats_recus)
    # A faire:
    # - Réduit les points de vie en fonction des dégats reçus
    nouveaux_points = points_de_vie - degats_recus
    points_de_vie = nouveaux_points
    # - Affiche ce qu'il s'est passé
    puts "#{nom} a reçu #{degats_recus} points de dégâts !"
    # - Détermine si la personne est toujours en_vie ou non
    if points_de_vie <= 0
      points_de_vie =0
    end
    return points_de_vie
  end
end


#On définit maintenant la classe Joueur héritée de Personne avec des spécificités inhérentes au héros: combien de points de dégâts il prendra à chaque tour, comment il sera hérité de la classe mère, quelles méthodes il ser la seul à utiliser pour terrasser ses adversaires

class Joueur < Personne
  attr_accessor :degats_bonus

  def initialize(nom)
    # Par défaut le joueur n'a pas de dégats bonus
    @degats_bonus = 0

    # Appelle le "initialize" de la classe mère (Personne): si j'ai bien compris, il faut utiliser la commande super pour récupérer le contenu de la classe-mère car on a défini une nouvelle méthode initialize qui a le même nom que celle de la classe-mère, donc si on crée une instance de la classe Personne, seul le nom sera défini
    super(nom)
  end

  def degats
    # Il s'agit donc des dégâts que le joueur peut occasionner, c'est en effet une bonne chose de définir une propriété dégâts pour le joueur différente de celles pour les ennemis car on peut mieux s'adapter aux règles du jeu. On réutilise ensuite cette propriété degats, qu'elle soit pour le héros ou les méchants dans la méthode subit_attaque
    degats_occasionnes = degats_bonus + rand(30..40)
    puts "#{nom} a fait subir #{degats_occasionnes} points de dégâts !"
    return degats_occasionnes 
  end

  def soin
    # Il faut faire en sorte que l'on récupère un certain nombre de points et qu'il y ait un facteur dû au hasard, comme dans tous les jeux, mais aussi de ne pas dépasser les 100 points maximum
    if points_de_vie < 100
    nouveaux_points = points_de_vie + rand(35..45)
        if nouveaux_points > 100
           nouveaux_points = 100
        end
    points_de_vie = nouveaux_points
    puts "#{nom} regagne de la vie (#{points_de_vie}/100 pv)."
    # Je n'ai pas trop compris pourquoi je ne peux pas faire points_de_vie += rand(15..25) ou points_de_vie = points_de_vie + rand(15..25). J'ai vérifié, ce sont tous les deux des Fixnum et donc je pourrais les additionner a priori. Mais je reçois une erreur undefined method + for nil:NilClass (NoMethodError) Bref, utiliser une variable intermédiaire semble marcher alors gardons cette méthode
    return points_de_vie
    else
    # Sinon, la punition pour le jeune padawan imprudent
      puts "Vous êtes déjà au maximum de vie ! Dommage, vous avez perdu un tour !"
    end
  end

  def ameliorer_degats
    # A faire:
    # - Augmenter les dégats bonus
    degats_augment = rand(5..10)
    nouveaux_degats = degats_bonus + degats_augment
    degats_bonus = nouveaux_degats # même souci que pour les points de vie lors des soins
    # - Affiche ce qu'il s'est passé
    puts "#{nom} a augmenté ses dégâts bonus de #{degats_augment}. Il dispose maintenant de #{degats_bonus} points de dégâts bonus."
  return degats_bonus
  end

end


#On passe maintenant à l'ennemi pour lequel on ne va limiter les méthodes qu'aux dégâts qu'il peut faire (oui, le jeu est biaisé mais c'est nous qui décidons des règles alors autant en profiter et en plus ils attaquent surnumérairement)

class Ennemi < Personne
  def degats
    # Il s'agit ici des dégâts occasionnés par les ennemis. On les réutilise également dans la méthode subit_attaque. Cette méthode peut donc être utilisée pour tous les joueurs.
    # - Calculer les dégats
    degats_occasionnes = rand(5..15)
    puts "#{nom} a fait subir #{degats_occasionnes} points de dégâts !"
    return degats_occasionnes 
  end
end
#Ici, pas besoin de faire appel à super car en faisant hériter de la classe-mère sans définir la même méthode initialize, on l'utilise automatiquement


#On peut maintenant s'attaquer à l'affichage du jeu

class Jeu
# self est, je pense, l'équivalent du this en Java/Javascript. C'est un peu comme un modèle: self peut être remplacé par le nom de l'objet que l'on souhaite utiliser.
  # On a 2 choix: soit on est dans le jeu...
  def self.actions_possibles(monde)
    puts "ACTIONS POSSIBLES :"

    puts "0 - Se soigner"
    puts "1 - Améliorer son attaque"
    
    # On donne un indice qui dépend du nombre d'ennemis, ce qui est plus élégant que de lister sans itérations, car ça anticipe l'évolution du jeu (si on veut par exemple ajouter ou enlever des méchants)
    # On commence à 2 car 0 et 1 sont réservés pour les actions
    # de soin et d'amélioration d'attaque
    i = 2
    monde.ennemis.each do |ennemi|
      puts "#{i} - Attaquer #{ennemi.info[0]} (#{ennemi.info[1]}/100 pv)"
      i = i + 1
   end
    puts "99 - Quitter"
  end

  # 2e choix: le jeu est terminé
  def self.est_fini(joueur, monde)
    # A faire:
    # - Déterminer la condition de fin du jeu
  end
end


# Enfin, on définit le monde i.e. le monde des ennemis, c'est donc l'ensemble des ennemis que le héros va devoir affronter, on doit le faire car il faudra modifier notre affichage et les conditions du jeu selon le nombre d'ennemis en vie. On va d'ailleur ensuite composer les classes Monde et Ennemi

class Monde
  attr_accessor :ennemis

  def ennemis_en_vie
    # - Ne retourner que les ennemis en vie
     ennemis.each do |ennemi|
       if ennemi.points_de_vie == 0
         ennemis.delete(ennemi) 
       end
     end
  end

end

##############

# Initialisation du monde
monde = Monde.new

# Ajout des ennemis
monde.ennemis = [
  Ennemi.new("Balrog"),
  Ennemi.new("Goblin"),
  Ennemi.new("Squelette")
]
# On a composé l'objet monde avec la classe Ennemi

# Initialisation du joueur
joueur = Joueur.new("Jean-Michel Paladin")

# Message d'introduction. \n signifie "retour à la ligne"
puts "\n\nAinsi débutent les aventures de #{joueur.nom}\n\n"

# Boucle de jeu principale
# On fixe une limite d'itérations à 100 car il est possible - mais improbable - que le jeu ne se termine pas! On pourra par la suite interrompre la boucle
100.times do |tour|
  puts "\n------------------ Tour numéro #{tour} ------------------"

  # Affiche les différentes actions possibles
  Jeu.actions_possibles(monde)

  puts "\nQUELLE ACTION FAIRE ?"
  # On range dans la variable "choix" ce que l'utilisateur renseigne
  choix = gets.chomp.to_i

  # En fonction du choix on appelle différentes méthodes sur le joueur
  if choix == 0
    joueur.points_de_vie = joueur.soin
  elsif choix == 1
    joueur.degats_bonus = joueur.ameliorer_degats
  elsif choix == 99
    # On quitte la boucle de jeu si on a choisi
    # 99 qui veut dire "quitter"
    break
  else
    # Choix - 2 car nous avons commencé à compter à partir de 2
    # car les choix 0 et 1 étaient réservés pour le soin et
    # l'amélioration d'attaque
    ennemi_a_attaquer = monde.ennemis[choix - 2]
    joueur.attaque(ennemi_a_attaquer)
    monde.ennemis_en_vie
  end

  puts "\nLES ENNEMIS RIPOSTENT !"
  # Pour tous les ennemis en vie ...
  monde.ennemis_en_vie.each do |ennemi|
    # ... le héro subit une attaque.
    ennemi.attaque(joueur)
  end

  puts "\nEtat du héro: #{joueur.points_de_vie}\n"

  # Si le jeu est fini, on interrompt la boucle
  break if Jeu.est_fini(joueur, monde)
end

puts "\nGame Over!\n"

# A faire:
# - Afficher le résultat de la partie

if joueur.en_vie && monde.ennemis.size == 0
  puts "Vous avez gagné !"
elsif joueur.en_vie && monde.ennemis.size != 0
  puts "Il n'y a pas de gagnant !"
else
  puts "Vous avez perdu !"
end




