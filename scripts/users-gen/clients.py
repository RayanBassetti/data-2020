# script to generate fake clients
import json
import random
from faker import Factory
fake = Factory.create('fr_FR')

def randomGender() :
    return random.choice(["H", "F"])

def genClients(number) : 
    clients = []
    for _ in range(number):
        clients.append({
            "name": fake.name(),
            "address": fake.address(),
            "departement": fake.department(),
            "phone_number": fake.phone_number(),
            "email": fake.free_email(),
            "gender": randomGender()

        })
    with open('./json/clients.json', 'w') as outfile:
        json.dump(clients, outfile)

genClients(1000)