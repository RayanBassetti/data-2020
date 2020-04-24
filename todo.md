# scripts fake_clients : 
- Partie onboarding 
- Dernier entretien
- Fusion des colonnes devices
- Générer une facture pour chaque utilisateur avec Prénom/Nom_Devis.pdf

# script consProd/alertes : 
- Faire une boucle sur le nombre d'utilisateurs de la table fake_clients
- Faire une boucle pour chaque utilisateur aléatoire de 30 lignes
- Dans cette boucle, on génére sur une période d'un mois une consommation et une production
    - Prendre en compte le fait que le chiffre peut être à 0 une fois - plusieurs fois 
    - Résultat en Kw/h, un chiffre après la virgule
- On doit prendre en compte les alertes de consommation/production si la valeur est en dessous d'un certain seuil
- On va retourner un objet JSON avec 2 clés : -consProd et alertes 
- Ces 2 clés vont être séparées pour faire deux CSV et deux tables

- table prend en colonne : 
    - id_client
    - date
    - from_gen_to_consumer
    - from_grid_to_consumer

# script factures : 
- Faire une boucle sur le nombre d'utilisateurs de la table fake_clients 


