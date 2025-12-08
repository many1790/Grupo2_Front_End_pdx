# PDX PROJECT FRONTEND

Welcome! We are Isaac, Alvaro and Moises, from the XVIII edition of Web Development Full Stack + AI at CodeSpace Academy.
This document describes the Frontend of the PDX Project — a full recreation of a functional Pokédex inspired by the Pokémon universe.

The Frontend works as the visual interface for Pokémon trainers (users and admins), allowing them to view, create, edit, delete, and collect Pokémon using an interactive Pokédex layout.

### Tools Used for Frontend

The application is built using:

HTML5 and CSS3 (SCSS) for structure and styling

JavaScript ES Modules for event handling and UI logic

Vite as a modern development server and bundler

LocalStorage / SessionStorage for client-side session management

Fetch API for communication with the backend



## Getting Started
1. Install Dependencies

From the project root, install Vite and all necessary modules:

    `npm i`

2. Start the Frontend Server

Run the Vite server in development mode:

    `npm run dev`


By default, the frontend runs at:

http://localhost:5173


#### IMPORTANT!!
The backend must be running at http://localhost:3000, and CORS must be correctly enabled to allow the frontend to make API requests.


```
Project Structure
Front/
├── index.html      # Onboard (introduction)
├── index1.html     # Login screen (Pokémon or Admin)
├── index2.html     # Pokédex admin interface (create/edit/delete/toggle)
├── index3.html     # Pokémon user dashboard
└──  src/
    ├── scripts/
    │   ├── main.js (for index1)
    │   ├── main2.js (for index2)
    │   ├── main3.js (for index3)
    │   ├── dom/ (DOM element mapping)
    │   ├── events/ (click handlers, UI actions)
    │   └── Api/ (fetch requests to backend)
    ├── styles/
    │   ├── style-Index1.scss
    │   ├── style-Index2.scss
    │   ├── style-Index3.scss
    └── fonts/
        └── PKMNRBYGSC.ttf (Game Boy pixel font)

```


All JS modules use ES imports, ensuring modularity and maintainability.

## User Guide

Make sure you have the Backend repository set and running with DB.

1. #### Login (index1.html)

Users can log in as:

Admin → using an email (userID) + password.

we have at the moment 3 accounts to use: 
* alvaro@pdx.com -> alvaro123
* moises@pdx.com -> moises123
* isaac@pdx.com -> isaac123

Pokémon → using pokeName (as username) + pokeID (as password). For example:
* bulbasaur -> 1
* pikachu -> 25
* mewtwo -> 150

The login process:

Attempts admin login through /admin/login

If it fails, tries Pokémon login using /pokemon/:pokeID

Stores relevant session data in localStorage

2. #### Admin Interface (index2.html)

Admins can:

* View the Pokémon Grid

Displays all Pokémon stored in the backend database.

* Select a Pokémon

Clicking a Pokémon opens a detailed view with:

Sprite

Name

Description

Height

Weight

Types

#### Edit Pokémon

Updates name, description, type, height, and weight using:

PATCH /pokemon/:pokeID

* Create New Pokémon

Admins can create custom Pokémon with:

POST /pokemon

* Delete Pokémon

A confirmation modal appears before proceeding with:

DELETE /pokemon/:pokeID

* Toggle Admin Team (Collection System) Able/Disable

Each admin has a team of up to six Pokémon.

The toggle works via:

POST /pokemon/collection/:pokeID


The UI updates button text:

Add to team

Remove from team

And persists data to localStorage.

3. #### Pokémon Dashboard (index3.html)

Pokémon users (non-admin) can:

View their own stats

Read their description

Access a simplified interface without admin features

API Communication

Modify his own complete data

#### All backend requests use fetch() from the /Api folder, including:

loginValidation.js

createPokemonFetch.js

modifyPokemonFetch.js

deletePokemonFetch.js

toggleAdminPokemonFetch.js

Each module centralizes its endpoint definitions through:

apiConfig.js



## Tools and Skills Employed

Team collaboration with Git + GitHub

Task organization using Trello

SCSS styling

JavaScript Modular Architecture

Vite development bundler

REST API consumption

LocalStorage & SessionStorage

UI/UX for interactive Pokédex simulation

## Team GitHub Profiles

Isaac — many1970

Alvaro — palmera11

Moises — moiseslopez1014