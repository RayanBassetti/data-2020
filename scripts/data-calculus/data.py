# script to connect to the database 

import database_ids
import pandas as pd
import psycopg2
import datetime

try:
    connection = psycopg2.connect(host=database_ids.host, database=database_ids.database, user=database_ids.user, password=database_ids.password)
    # declare a cursor
    cur = connection.cursor()
    # requests and reception of the data
    # all the requests are done on views, not tables
    request = "SELECT * FROM single_client"
    singleClient = pd.read_sql(request, connection)

    # Calculs à faire (table daily): 
    # Total de la consommation : from_gen + from_grid
    # Consommation réelle : Total - (from_gen - from grid)
    # Revente hebdomadaire : from_gen_to_grid / 1000 * 0.10
    # Electricité non consommée : Consommation réelle - from_gen_to_grid / 1000
    # Economies faites sur une semaine : Total / 1000 * 0.175 / 12 / 4 / 7
    singleClient["from_gen_to_grid"] = singleClient["from_gen_to_grid"] / 1000
    singleClient["from_gen_to_consumer"] = singleClient["from_gen_to_consumer"] / 1000
    singleClient["from_grid_to_consumer"] = singleClient["from_grid_to_consumer"] / 1000

    
    singleClient["total"] = singleClient["from_gen_to_consumer"] + singleClient["from_grid_to_consumer"]
    singleClient["conso_réelle"] = - (singleClient["from_gen_to_consumer"] - singleClient["from_grid_to_consumer"])
    singleClient["revente_daily"] = singleClient["from_gen_to_grid"]  * 0.10
    singleClient["elec_non_cons"] = singleClient["conso_réelle"] - singleClient["from_gen_to_grid"]
    singleClient["economie_hedbomadaire"] = (((singleClient["total"] * 0.175) / 12) / 4 / 7) 
    ## transform the result into a permanent excel file
    singleClient.to_excel('single_client.xlsx', sheet_name='single', index=False)
    # singleClient = pd.read_excel('single_client.xlsx', sheet_name='single')

    # close the communication with the PostgreSQL
    cur.close()
except (Exception, psycopg2.DatabaseError) as error:
    print(error)
finally:
    if connection is not None:
        connection.close()

