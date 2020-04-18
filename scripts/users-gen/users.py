# script to generate fake users
import json
from faker import Factory
fake = Factory.create('fr_FR')

def genUsers(number) : 
    users = []
    for _ in range(number):
        users.append({
            "name": fake.name(),
            "adress": fake.address()
        })
    with open('./json/users.json', 'w') as outfile:
        json.dump(users, outfile)

genUsers(5)