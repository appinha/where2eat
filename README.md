<h1 align="center">
	📍 where2eat 🍴
</h1>

<p align="center">
	<i>A fullstack project with React and Flask.</i>
</p>

<p align="center">
	<img alt="GitHub code size in bytes" src="https://img.shields.io/github/languages/code-size/appinha/where2eat?color=blueviolet" />
	<img alt="Number of lines of code" src="https://img.shields.io/tokei/lines/github/appinha/where2eat?color=blueviolet" />
	<img alt="Code language count" src="https://img.shields.io/github/languages/count/appinha/where2eat?color=blue" />
	<img alt="GitHub top language" src="https://img.shields.io/github/languages/top/appinha/where2eat?color=blue" />
	<img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/appinha/where2eat?color=brightgreen" />
</p>

<h3 align="center">
	<a href="#%EF%B8%8F-about">About</a>
	<span> · </span>
	<a href="#%EF%B8%8F-usage">Usage</a>
	<span> · </span>
	<a href="-work-plan">Work Plan</a>
</h3>

---

## 🗣️ About

A minimal website app for randomly selecting a place to eat.

Tech Stack:

- **Front-end:** Typescript, React, Vite, Vitest, Testing Library, MSW.
- **Back-end:** Python, Flask, Postgresql, SQLAlchemy, Docker, Pytest.

## 🛠️ Usage

Refer to the README files inside the `client` and `server` folders.

## 📄 Work Plan

### 0. Define requirements

- **Home page:** contains a CTA to randomly select a restaurant and links to the AddNew and List pages.
- **Results page:** displays the randomly selected restaurant details.
- **AddNew page:** contains a form to add a new restaurant to the database.
- **List page:** displays a list of all restaurants in the catalogue.
- **Details page:** displays the details of a selected restaurant.

### 1. Create client app with mocked funcionality

- [x] [client] Create app using Vite + React + TS
- [x] [client] Set up linter and formatter
- [x] [client] Set up testing
- [ ] [client][Home] Create page UI (with animation)
- [ ] [client] Set up React Router + navigate to (empty) Results page
- [ ] [client][Results] Create page UI (with mock data)
- [ ] [client][Home] Add link to AddNew page + navigate to (empty) page
- [ ] [client][AddNew] Create page UI (with mock submit)
- [ ] [client][Home] Add link to List page + navigate to (empty) page
- [ ] [client][List] Create page UI (with mock data) + navigate to Details page
- [ ] [client][Details] Create restaurant details page UI (with mock data)

### 2. Create api to serve mocked data + connect client to api

- [ ] [server] Create api with Flask
- [ ] [server] Set up linter and formatter
- [ ] [server] Set up testing
- [ ] [server] Create GET `/restaurants/random` endpoint to serve mocked data (imported from JSON)
- [ ] [client][Home] Fetch restaurant data from server
- [ ] [server] Create POST `/restaurants` endpoint to create new restaurant entry
- [ ] [client][AddNew] Add request to form page
- [ ] [server] Create GET `/restaurants` endpoint to serve mocked data (imported from JSON)
- [ ] [client][List] Fetch restaurant data from server on restaurant list page
- [ ] [server] Create GET `/restaurants/<id>` endpoint to serve mocked data (imported from JSON)
- [ ] [client][Details] Fetch restaurant data from server on restaurant

### 3. Set up database

- [ ] [server] Set up database on api
- [ ] [server] Create `Restaurant` table + update controllers
