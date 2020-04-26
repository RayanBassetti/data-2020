# script to connect to the database 

import database_ids
import pandas as pd
import psycopg2
import datetime
import random
import json 

from faker import Faker

faker = Faker()

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

    for _, row in fakeClients.iterrows() : 
        count = 0
        while count < 29 :
            date = faker.date_between(start_date='-'+ str(31 - count) + 'd', end_date='-'+ str(29 - count) + 'd')
            consProd_array.append({
                "client_id": row["id"],
                "date": str(date)
            })
            count = count + 1
        

    with open('./json/cons_prod_clients.json', 'w') as outfile:
        json.dump(consProd_array, outfile)

    ## transform the result into a permanent excel file
    # singleClient = pd.read_excel('single_client.xlsx', sheet_name='single')

    # close the communication with the PostgreSQL
    cur.close()
except (Exception, psycopg2.DatabaseError) as error:
    print(error)
finally:
    if connection is not None:
        connection.close()

