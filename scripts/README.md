# Trois scripts : 
- (dossier users-gen) clients.py : Grâce à la librairie "Faker" et au provider français, j'ai pu créer un script qui me génére des faux clients, correspondants
à des clients types que l'équipe d'Engie trouvera sur le CRM, et qui génére un fichier JSON.

- (dossier data-calculus) data.py : Script qui va se connecter à la vue "single_client" pour optimiser la lecture de la data, et l'interprétation que l'on va en faire sur nos maquettes de concept et sur notre présentation globale

- (dossier users-table) tables.py : Génération d'un JSON simulant la consommation/production d'un système MyPower d'un client Engie sur 5 semaines (1 ligne par semaine), et génération
d'un JSON qui met une ligne en alerte pour le client si la production est trop faible.