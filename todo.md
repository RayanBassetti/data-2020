# scripts fake_clients : 
- Partie onboarding 
    - Fusion des colonnes devices
        - Mettre au clair tous les appareils qu'un client My Power peut avoir
- Partie satisfaction/relation/sentiments : 
    - Faire une fonction qui prend en compte la satisfaction/relation, et qui dit donc quel est 
    l'humeur actuel de la personne 

# script consProd : 
- Faire une boucle sur les clients de la table fake_clients
    - Faire une boucle pour chaque client, qui retourne 30 lignes (pour chaque jour d'un mois)
    - Dans cette boucle, on génére sur une période d'un mois une consommation et une production
        - Prendre en compte le fait que le chiffre peut être à 0 une fois - plusieurs fois 
        - Résultat en Kw/h, un chiffre après la virgule
    - Push dans la table cons_prod_clients les 30 lignes pour chaque client 
    - table cons_prod_clients prend en colonne : 
        - id_client
        - date
        - from_gen_to_consumer
        - from_grid_to_consumer 

    - On doit prendre en compte les alertes de consommation/production si la valeur est en dessous d'un certain seuil
    - On va retourner un objet JSON avec 2 clés : -consProd et alertes 
    - Ces 2 clés vont être séparées pour faire deux CSV et deux tables



