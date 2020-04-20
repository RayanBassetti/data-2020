# script to generate fake clients
import json
import random
from faker import Factory
fake = Factory.create('fr_FR')

def randomGender() :
    return random.choice(["H", "F"])

def randomDevices() : 
    return random.choice([["Fronius"], ["Fronius", "NetAtmo"], ["MySonnen"], ["MySonnen", "NetAtmo"]])

def randomNbPanneaux() :
    return random.randrange(1, 6)

def randomPourcentage(start, finish) :
    return random.randrange(start, finish)

def randomProfil() :
    return random.choice(["Économe", "Autonome", "Écologie"])

def randomFamille() :
    return random.choice(["IFaP", "IFoP", "IFaN", "IFoN", "PFaP", "PFoP", "PFaN", "PFoN"])

def randomHumeur() :
    return random.choice(["Colère", "Mitigé", "Curieux", "Harmonieux", "Heureux"])

def scoringActivityApp() :
    numberConnection = random.randint(0, 30) # nombres de fois que l'application a été lancé 
    timeLoggedIn = random.randint(0, 90) # normalement en minutes, moyenne du temps passé sur l'application
    return numberConnection + timeLoggedIn


def genClients(number) : 
    clients = []
    clientid = 1
    for _ in range(number):
        fullName = fake.name()
        address = fake.address()
        departement = fake.department()
        phoneNumber = fake.phone_number()
        birthDate = str(fake.date_of_birth(None, 40, 65))
        mail = fake.free_email()
        engieTime = fake.date_between(start_date='-90d', end_date='today')
        lastActivity = fake.date_between(start_date='-6d', end_date='today')
        timeActivity = scoringActivityApp()
        clients.append({
            "id": clientid,
            "name": fullName,
            "address": address,
            "departement": departement,
            "phone_number": phoneNumber,
            "birthdate": birthDate,
            "email": mail,
            "gender": randomGender(),
            "engie_time": str(engieTime),
            "devices": randomDevices(),
            "nb_panneaux": randomNbPanneaux(),
            "last_activity": str(lastActivity),
            "time_activity" : str(timeActivity),
            "profil": randomProfil(),
            "famille": randomFamille(),
            "satisfaction": randomPourcentage(1, 100),
            "relation": randomPourcentage(1, 100),
            "advice": randomPourcentage(1, 50),
            "profil_speech": randomPourcentage(1, 50)
        })
        clientid = clientid + 1
    return clients

with open('./json/clients.json', 'w') as outfile:
    json.dump(genClients(2000), outfile)
