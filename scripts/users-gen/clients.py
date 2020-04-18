# script to generate fake clients
import json
import random
from faker import Factory
fake = Factory.create('fr_FR')

def randomGender() :
    return random.choice(["H", "F"])

def genClients(number) : 
    clients = []
    clientid = 1
    for _ in range(number):
        clients.append({
            "id": clientid,
            "name": fake.name(),
            "address": fake.address(),
            "departement": fake.department(),
            "phone_number": fake.phone_number(),
            "birthdate": fake.date_of_birth(None, 40, 65),
            "email": fake.free_email(),
            "gender": randomGender()

        })
        clientid = clientid + 1
    return clients

with open('./json/clients.json', 'w') as outfile:
    json.dump(genClients(1000), outfile)