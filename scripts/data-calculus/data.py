# script to connect to the database 

import database_ids
import pandas as pd
import psycopg2

try:
    connection = psycopg2.connect(host=database_ids.host, database=database_ids.database, user=database_ids.user, password=database_ids.password)
    # declare a cursor
    cur = connection.cursor()
    # requests and reception of the data
    # all the requests are done on views, not tables
    request = "SELECT * FROM single_client"
    singleClient = pd.read_sql(request, connection)

    newSingleClient = singleClient

    newSingleClient["total"] = newSingleClient["from_gen_to_consumer"] + newSingleClient["from_grid_to_consumer"]

    connection.commit()

    # transform the result into a permanent excel file
    # singleClient.to_excel('single_client.xlsx', sheet_name='single', index=False)
    # singleClient = pd.read_excel('single_client.xlsx', sheet_name='single')

    # close the communication with the PostgreSQL
    cur.close()
except (Exception, psycopg2.DatabaseError) as error:
    print(error)
finally:
    if connection is not None:
        connection.close()

