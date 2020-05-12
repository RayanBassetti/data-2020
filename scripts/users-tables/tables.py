# script to connect to the database 

import database_ids
import pandas as pd
import psycopg2
import datetime
import random
import shortuuid
import json 

from faker import Faker

faker = Faker()

def randomRange(start, finish) : 
    return round(random.uniform(start, finish), 2)

try:
    connection = psycopg2.connect(host=database_ids.host, database=database_ids.database, user=database_ids.user, password=database_ids.password)
    # declare a cursor
    cur = connection.cursor()
    # requests and reception of the data
    fake_clients = "SELECT * FROM fake_clients"
    refreshC = "DELETE FROM cons_prod_clients"
    refreshA = "DELETE FROM list_alertes"

    updateClientMood = "UPDATE fake_clients SET feeling = %s, satisfaction = %s WHERE id = %s"
    consProdClient = "INSERT INTO cons_prod_clients VALUES(%s, %s, %s, %s)"
    alerte = "INSERT INTO list_alertes VALUES(%s, %s, %s, %s, %s, %s, %s, %s)"

    fakeClients = pd.read_sql(fake_clients, connection)

    cur.execute(refreshC)
    cur.execute(refreshA)

    for _, row in fakeClients.iterrows() : 
        count = 0
        while count < 35 : #since we want to have 5 weeks of data, we set the max count to 7 days * 5
            date = faker.date_between(start_date='-'+ str(37 - count) + 'd', end_date='-'+ str(35 - count) + 'd')
            fromGenToConsumer = randomRange(10, 30)
            if fromGenToConsumer < 11 : 
                # création d'une alerte
                cur.execute(alerte, (shortuuid.uuid(), row["id"], row["name"], str(date), "Production des panneaux trop faible", 2, "Marketing", 1))
                # update du sentiment utilisateur 
                cur.execute(updateClientMood, (1, randomRange(1, 20), row["id"]))
            # création d'une ligne cons/prod pour une semaine pour un client    
            cur.execute(consProdClient, (row["id"], str(date), fromGenToConsumer, randomRange(100, 200)))
            count = count + 7
        
    connection.commit()
    # close the communication with the PostgreSQL
    cur.close()
except (Exception, psycopg2.DatabaseError) as error:
    print(error)
finally:
    if connection is not None:
        connection.close()