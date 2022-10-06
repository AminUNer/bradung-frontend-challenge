## Bradung Front End Task App

#### A project that allow you to show list of recipes with add, delete and edit feature.

#### This project use external libraries such as: @mui/material and @reduxjs/toolkit.

#### The front end task app which includes a structured project architecture wired with redux.

#### The project includes a material custom theme(color), redux dev tools in order to preview how the store changes, and a persistence for the redux store to the localStorage, used as a  database for the created data.

#### Under the route '/add' the usr can add a new Recipe, under the route '/edit/:recipe_id' the user can see the Recipe in details and edit or delete it.



#### The project is configured for production via webpack

## Production build

```
$ npm run build
```

- this will generate a build folder in the racine directory

## Development run

- clone the projet from the git repository
- under your project directory execute this command

```
$ npm install
```

this will install all the required dependencies

- run your project using the following command

```
$ npm start
```

- your project will run on http://localhost:3000/
