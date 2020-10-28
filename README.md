# Herramientas HTML Y CSS II PEC 1, proyecto basado en UOC Boilerplate

Esta es la primera práctica de la asgignatura Herramientas HTML y CSS II. El proyecto está basado en el UOC Biolerplate y consiste en la implementación de un curriculum web aplicando alguna metodología CSS (BEM en nuestro caso) así como una guía de estilo par la condificación.

## Requirements

[Node.js](http://nodejs.org/) >= 10.15.x

## Getting started

Clone this repository with `git clone`, or download a .zip file using the top right green button.

Using the Terminal, navigate to the project folder and run `npm install`.

### Commands

| Command         | Description                                                                                                                                                                                                                                                                   |
| --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `npm run dev`   | Runs a local web server for development and opens the browser to display it. Automatically compiles styles and scripts whenever a file in `src/` is changed, and live reloads the browser. This is what _must be run_ on the development stage.                               |
| `npm run build` | Compiles and minifies and optimizes the files in the assets folder. The generated compiled and optimized files are located in the `dist/` folder. This is what _must be run_ before publishing the project. The publishable files are the ones located in the `dist/` folder. |
| `npm run clean` | Deletes the current `/dist` folder.                                                                                                                                                                                                                                           |
| `npm run test`  | Displays a success message if everything is working as expected.                                                                                                                                                                                                              |

| `npm run stylelint` | check style rules defined in stylelint configuration file. |
