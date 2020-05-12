# Trois scripts : 
- (dossier users-gen) clients.py : Grâce à la librairie "Faker" et au provider français, j'ai pu créer un script qui me génére des faux clients, correspondants
à des clients types que l'équipe d'Engie trouvera sur le CRM, et qui les envoie directement dans la table "fake_clients".

- (dossier data-calculus) data.py : Script qui va se connecter à la vue "single_client" pour optimiser la lecture de la data, et l'interprétation que l'on va en faire sur nos maquettes de concept et sur notre présentation globale

- (dossier users-table) tables.py : Envoie dans la table "cons_prod_clients" 5 lignes par clients de consommation/production, et si un des chiffres de production est très faible, update du feeling/satisfaction de l'utilisateur concerné + création d'une alerte

