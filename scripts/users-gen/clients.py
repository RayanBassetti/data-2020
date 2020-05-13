# script to generate fake clients

import database_ids
from datetime import date
import json
import random
import shortuuid
import pandas as pd
import psycopg2
from faker import Factory
fake = Factory.create('fr_FR')

def randomStrRange(choiceOne, choiceTwo) :
    return random.choice([choiceOne, choiceTwo])

def randomIntRange(start, finish) :
    return int(random.randrange(start, finish))

# def randomDevices() : 
#     # return random.choice([["Fronius"], ["Fronius", "NetAtmo"], ["MySonnen"], ["MySonnen", "NetAtmo"]])
#     allDevices = []
#     nbDevices = random.randrange(1, 3)
#     for device in range(nbDevices) :
#          allDevices.append(random.randrange(1, 3))
        
def scoringActivityApp() :
    numberConnection = randomIntRange(0, 30) # nombres de fois que l'application a été lancé sur un mois
    timeLoggedIn = randomIntRange(0, 90) # normalement en minutes, moyenne du temps passé sur l'application
    return numberConnection + timeLoggedIn

try:
    connection = psycopg2.connect(host=database_ids.host, database=database_ids.database, user=database_ids.user, password=database_ids.password)
    # declare a cursor
    cur = connection.cursor()
    # requests and reception of the data

    # createClient = "INSERT INTO fake_clients_clone VALUES(%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)"
    refresh = "DELETE FROM fake_clients"
    createClient = "INSERT INTO fake_clients VALUES(%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)"
    
    # empties the table
    cur.execute(refresh)
    count = 0
    while count < 200 : 
        client_id = shortuuid.uuid()
        name = fake.name()
        address = fake.address()
        phone_number = fake.phone_number()
        birthdate = str(fake.date_of_birth(None, 40, 65))
        email = fake.free_email(),
        gender = randomStrRange("H", "F")
        et = fake.date_between(start_date='-90d', end_date='today') # need the raw version to make the last_maintenance
        engie_time = str(et)
        nb_panneaux = randomIntRange(1, 6)
        last_activity = fake.date_between(start_date='-6d', end_date='today'),
        time_activity = scoringActivityApp()
        profil = randomIntRange(1, 4) # "Économe", "Autonome", "Écologie"
        famille = randomIntRange(1, 8) # "IFaP", "IFoP", "IFaN", "IFoN", "PFaP", "PFoP", "PFaN", "PFoN"
        feeling = randomIntRange(3, 5) # "Curieux", "Harmonieux", "Heureux"
        satisfaction = randomIntRange(20, 100)
        relation = randomIntRange(1, 100)
        advice = randomIntRange(1, 100)
        profil_speech = randomIntRange(1, 100)
        type_building = randomStrRange("Maison", "Appartement")
        owner = randomStrRange("Propriétaire", "Locataire")
        orientation = random.choice(["Nord", "Est", "Sud", "Ouest"])
        nb_meters = randomIntRange(70, 240)
        nb_floors = randomIntRange(1, 3)
        nb_people = randomIntRange(1, 5)
        construction = str(fake.date_of_birth(None, 10, 60)) # the date_between method didn't work here, created conflicts with multiple clients
        last_maintenance = str(fake.date_between(start_date=et, end_date='today'))
        facture = name + '_Devis.pdf'
        updated = date.today()

        # executes the request
        cur.execute(createClient, (
            client_id, 
            name, 
            address, 
            phone_number, 
            birthdate, 
            email, 
            gender, 
            engie_time, 
            nb_panneaux, 
            last_activity, 
            time_activity, 
            profil, 
            famille, 
            feeling, 
            satisfaction, 
            relation, 
            advice,
            profil_speech,
            type_building,
            owner, 
            orientation,
            nb_meters,
            nb_floors,
            nb_people,
            construction,
            last_maintenance,
            facture,
            updated
        ))

        # commit the requests to the database
        connection.commit()

        count = count + 1;
    # close the communication with the PostgreSQL
    cur.close()

except (Exception, psycopg2.DatabaseError) as error:
    print(error)
finally:
    if connection is not None:
        connection.close()