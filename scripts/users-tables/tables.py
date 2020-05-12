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

    updateClientMood = "UPDATE fake_clients SET feeling = %s, satisfaction = %s WHERE id = %s"

    fakeClients = pd.read_sql(fake_clients, connection)

    consProd_array = []
    alertes_array = []
    for _, row in fakeClients.iterrows() : 
        count = 0
        while count < 35 : #since we want to have 5 weeks of data, we set the max count to 7 days * 5
            date = faker.date_between(start_date='-'+ str(37 - count) + 'd', end_date='-'+ str(35 - count) + 'd')
            fromGenToConsumer = randomRange(10, 30)
            if fromGenToConsumer < 11 : 
                # création d'une alerte
                alertes_array.append({
                    "alerte_id": shortuuid.uuid(),
                    "client_id": row["id"],
                    "client_name": row["name"],
                    "date": str(date),
                    "title": "Production des panneaux trop faible",
                    "priority": 2,
                    "tags": "Marketing",
                    "status": 1
                })
                # update du sentiment utilisateur 
                cur.execute(updateClientMood, (1, randomRange(1, 20), row["id"]))
                print(row["id"])
            consProd_array.append({
                "client_id": row["id"],
                "date": str(date),
                "from_gen_to_consumer": fromGenToConsumer,
                "from_grid_to_consumer": randomRange(100, 120)
            })
            count = count + 7
        

    with open('./json/cons_prod_clients.json', 'w') as outfile:
        json.dump(consProd_array, outfile)

    with open('./json/list_alertes.json', 'w') as outfile_2:
        json.dump(alertes_array, outfile_2)

    ## transform the result into a permanent excel file
    # singleClient = pd.read_excel('single_client.xlsx', sheet_name='single')
    connection.commit()
    # close the communication with the PostgreSQL
    cur.close()
except (Exception, psycopg2.DatabaseError) as error:
    print(error)
finally:
    if connection is not None:
        connection.close()