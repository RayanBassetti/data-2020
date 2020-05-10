# PROJET DATA - P2021 - ENGIE

## Stack :

A) Front-end : 
- React.js
- React-Router
- Material UI
- Material Table
- ApexCharts.js
- Sass

B) Back-end : 
- Hapi
- Joi
- Nodemon
- Hapi-Swagger

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
- touch .env
- Variables needed : DB_H (host), DB_USER (username), DB_PASS (password)

6) Once everything is installed and properly setup, start the back-end
- (Inside the server folder) npm start 
- (At the root of the repository) npm start  
- You need to start both elements to make it work

The server starts at port 4000, the front at port 3000. 
Feel free to change them if needed.

## Known issues / bugs / missings parts 

- For the clients list : 
    - Plan was to change the toolbar of the material-table, and to be able to change the clients lists by modifying the row/body components depending on the user input.
      For now, it's only a change between 3 components.
    - The style of the body inside the MaterialTable can't be changed (not supported), making the display of the clients with squares possible but not good looking.

- For the client profile : 
    - The objectif creation gets me a 400 error once in a while.
    - Create components for user input to create a campaign

- Sass : 
    - Organize files

- UseEffect : 
    - Could have been used on the Alertes and Objectifs lists when generating a single card, but decided to do it softly instead

- Clients table : 
    - Do something about the column with date type, the front translates them as such, giving long dates and not just DD-MM-YYYY

- Alertes : 
    - A better handle of the number of queries/filters to apply to call the alertes
    - Refresh the list when an alert status changes
    
- React Hooks : 
    - UseEffect/UseMemo, still struggling to properly understand how they work

### GROUPE 14 : BASSETTI - COLLIGNON - BOUSSAID - MISBACH

The front-end of this project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
