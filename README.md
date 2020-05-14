# PROJET DATA - P2021 - ENGIE

## Design of the app : 

https://www.figma.com/file/PSmFUG7tMkzrDvhKBj5OdN/CRM-ENGIE?node-id=207%3A1

## Stack :

### Front-end : 
- Base : 
    - React (and React Hooks)
    - React Router
    - Context
- UI :
    - Material UI
    - Sass
- Components : 
    - Material Table
    - Material DatePicker
    - React Spinner
- Dataviz : 
    - ApexCharts

### Back-end : 
- Base :
    - Node
- Framework :
    - Hapi
    - Joi
- Configuration : 
    - dot-env
    - Nodemon
- Others :
    - Hapi-Swagger
- Lexicon : 
    - https://docs.google.com/spreadsheets/d/17zEY9pYN28mQ3iuS1iuc9ESDDr4OYT7D--nUVsgAO0E/edit?usp=sharing

### Scripts : 
- Base : 
    - Python 
- External librairies : 
    - Virtual-Env
    - Faker
    - Shortuuid
    - Pandas
    - Psycopg2

## How to setup : 

1) Clone the project on your local machine 
- git clone https://github.com/RayanBassetti/data-2020

2) Once downloaded, go to the project location
- cd data-2020/

3) At the root of the project, install the front dependencies 
- npm i / npm install

4) Go inside the server folder, and install the back dependencies
- cd server/
- npm i /npm install

5) Add the credidentials you want to use to connect to the database neeeded at the root of the server folder
- touch .env / create a file named ".env"
- Variables needed : DB_H (host), DB_USER (username), DB_PASS (password)

6) Once everything is installed and properly setup, start the back-end
- (Inside the server folder) npm start 
- (At the root of the repository) npm start  
- You need to start both elements to make it work

The server starts at port 4000, the front at port 3000. 
Feel free to change them if needed.

## Known issues / bugs / missings parts 

### What might happen on another computer (which worked on mine, I know, basic excuse): 
- UUID module not found for the two POST routes
- Alerte status switch not working on the first click, have to do the procedure twice to record it and update the alerte

### Front

- Shortcuts : 
    - Can only save clients links

- For the clients list : 
    - Plan was to change the toolbar of the material-table, and to be able to change the clients lists by modifying the row/body components depending on the user input.
      For now, it's only a change between 3 components.

- For the client profile : 
    - Create components for user input to create a campaign

- Sass : 
    - Organize files

- React Hooks : 
    - UseEffect/UseMemo, still struggling to properly understand how they work

- Alertes : 
    - A better handle of the number of queries/filters to apply to call the alertes

### Back

- Clients table : 
    - Do something about the column with date type, the front translates them as such, giving long dates and not just DD-MM-YYYY

- Objectif post :
    - Seems to work at first glance, but glitches sometimes, no idea why

- Create a planning table with data inside

## What I would have done under other circumstances : 
- Given more time : 
    - Dynamically create the tasks for the planning 
    - Create the filter for the clients list
    - Create the Messagerie page
    - Create the historique for the client profile

- Given another go at the project : 
    - More discussions with my designers, and especially making sure that some functionnalities were not green lighted
    - Would have started the project with fake static data, worked on the front, and then worked on the back to make the data dynamic.

### GROUPE 14 : BASSETTI - COLLIGNON - BOUSSAID - MISBACH

The front-end of this project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
