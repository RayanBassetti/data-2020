# script to generate fake clients
import json
import random
import shortuuid
from faker import Factory
fake = Factory.create('fr_FR')

def randomStrRange(choiceOne, choiceTwo) :
    return random.choice([choiceOne, choiceTwo])

def randomIntRange(start, finish) :
    return random.randrange(start, finish)

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


def genClients(number) : 
    clients = []
    for _ in range(number):

        birthDate = fake.date_of_birth(None, 40, 65)
        engieTime = fake.date_between(start_date='-90d', end_date='today')
        lastActivity = fake.date_between(start_date='-6d', end_date='today')
        constructionDate = fake.date_of_birth(None, 10, 60) # the date_between method didn't work here, created conflicts with multiple clients
        lastMaintenance = fake.date_between(start_date=engieTime, end_date='today')
        fullName = fake.name()
        facture = fullName + '_Devis.pdf'
        orientation = random.choice(["Nord", "Est", "Sud", "Ouest"])

        clients.append({
            "id": shortuuid.uuid(),
            "name": fullName,
            "address": fake.address(),
            "phone_number": fake.phone_number(),
            "birthdate": str(birthDate),
            "email": fake.free_email(),
            "gender": randomStrRange("H", "F"),
            "engie_time": str(engieTime),
            # "devices": randomDevices(),
            "nb_panneaux": randomIntRange(1, 6),
            "last_activity": str(lastActivity),
            "time_activity" : scoringActivityApp(),
            "profil": randomIntRange(1, 3), # "Économe", "Autonome", "Écologie"
            "famille": randomIntRange(1, 8), # "IFaP", "IFoP", "IFaN", "IFoN", "PFaP", "PFoP", "PFaN", "PFoN"
            "feeling": randomIntRange(1, 5), # "Colère", "Mitigé", "Curieux", "Harmonieux", "Heureux"
            "satisfaction": randomIntRange(1, 100),
            "relation": randomIntRange(1, 100),
            "advice": randomIntRange(1, 100),
            "profil_speech": randomIntRange(1, 100),
            "type_building": randomStrRange("Maison", "Appartement"),
            "owner": randomStrRange("Propriétaire", "Locataire"),
            "orientation": orientation,
            "nb_meters": randomIntRange(70, 240),
            "nb_floors": randomIntRange(1, 3),
            "nb_people": randomIntRange(1, 5),
            "construction": str(constructionDate),
            "last_maintenance": str(lastMaintenance),
            "facture": facture
        })
    return clients

with open('./json/clients.json', 'w') as outfile:
    json.dump(genClients(500), outfile)

