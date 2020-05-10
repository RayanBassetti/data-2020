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
    cons_prod_client = "SELECT * FROM cons_prod_clients"
    fakeClients = pd.read_sql(fake_clients, connection)
    consProdClient = pd.read_sql(cons_prod_client, connection)

    consProd_array = []
    alertes_array = []
    for _, row in fakeClients.iterrows() : 
        count = 0
        while count < 35 : #since we want to have 5 weeks of data, we set the max count to 7 days * 5
            date = faker.date_between(start_date='-'+ str(37 - count) + 'd', end_date='-'+ str(35 - count) + 'd')
            fromGenToConsumer = randomRange(0, 10)
            if fromGenToConsumer < 0.3 : 
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
            consProd_array.append({
                "client_id": row["id"],
                "date": str(date),
                "from_gen_to_consumer": fromGenToConsumer,
                "from_grid_to_consumer": randomRange(10, 30)
            })
            count = count + 7
        

    with open('./json/cons_prod_clients.json', 'w') as outfile:
        json.dump(consProd_array, outfile)

    with open('./json/list_alertes.json', 'w') as outfile_2:
        json.dump(alertes_array, outfile_2)

    ## transform the result into a permanent excel file
    # singleClient = pd.read_excel('single_client.xlsx', sheet_name='single')

    # close the communication with the PostgreSQL
    cur.close()
except (Exception, psycopg2.DatabaseError) as error:
    print(error)
finally:
    if connection is not None:
        connection.close()