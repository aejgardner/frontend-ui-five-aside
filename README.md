# Team Generator App

This app was produced to fulfill the brief of the individual technical challenge set at the end of the DevelopMe Fellowship. This is the repository for the front-end of the app. The app can be viewed [here](https://stormy-crag-38510.herokuapp.com/). 

The app utilises an API on the back-end, and the repository for this can be found [here](https://github.com/aejgardner/backend-api-five-aside).

## Project Brief

Create a tool which randomly picks a 5-a-side football team from a list of 10 names.

## Planning

* I first set out the MVP for the project and some stretch goals.
* I then wire-framed the layout and decided what should go on each page.
* I created the tables, choosing the field names and what would be stored in them.
* I listed the necesarry API routes and corresponding controller methods.
* I then layed out the redux api and state actions.

## functionality goals

In addition to satisfying the project brief, I set myself the following goals:

1. The user can set a player rating for each player out of 10.

2. The user can edit and update a player who has already been submitted.

3. The user can edit the team names and choose shirt colours from a list.

4. The user can submit a match's final score and be able to view their match history in a table.

## Technologies

Given my goals to store matches and edit players, I thought it suitable to create an API in Laravel where actions like these could be easily executed via the relevant HTTP requests. This would also seperate concerns between the business logic of the app and the front-end logic that deals with the app's presentation. 

In terms of editing team names and shirt colours, I viewed this as something that would be changed rapidly, and thus viewed React and Redux as suitable to manage this high level of user interactivity in the form of state management. This would also reduce the number of API requests being made, making the app less sluggish and lessening the likelihood of a 429 error.

## Features 

* Generate two teams with *n* amount of players
- As instructed by the sub-heading, once the user has entered 4 players, they are given the option to generate their teams. There is no limit to the amount of players they are able to add.

* Team assignment based on fairness
- One of the suggestions in the brief was to assign teams based on each player's skill level. When the user clicks 'generate teams', I used a get request to retrieve the players from the database, order them by their rating chosen by the user, and then loop through them and assign even indexed players to team 1 and odd indexed players to team 2. This then allowed me to filter the players by their team number in the front-end and list them on the screen.

* Validation
- The user is only given the option to add a player if they have input text into the add player input. The player rating range is defaulted as 10, but once the user has moved it, it will stay at the last value they left it on.

* Edit player functionality
- As stated in the functionality goals, when the user has added a player, they have the option to either delete the player or update their name and rating. These are carried out via delete and patch requests respectively, using the player's unique id to let the API know which player to affect.

* Change teams functionality
- Once the user has generated the two teams, they are able to go back to the home page to add, remove or clear the list of players, or change the team settings.

* Team settings
- The Settings component allows the user to change the team names and shirt colours. While the user has clicked the edit button, any changes they make are held in local state until they click save, which then dispatches the values to the app's global state, allowing them to be used in other components.

* Average team rating
- When the two teams have been listed, I thought it would be useful to inform the user the average rating of the teams, even though it is likely they will be similar due to the assign teams functionality basing team selection on fairness.

* Option to post final score to API
- Once the user has genereated their teams, there is a form on the team-sheet page that allows them to submit the final score to the API. I thought this may be useful in the context of tournaments or betting on results. The team names chosen in the settings component are also dispatched to the matches table in the database. Once the user has submitted the form, a message stating that the match has been saved is temporarily displayed.

* Match history table
- When the user navigates to the match-history page, they will find a table listing all matches they have submitted (if any have been), stating the team names, scores, and who won. The History component is surrounded by a Loading component that shows until the API get request for previous matches has completed. The user can also clear all previous matches with a delete request.

Plans for future features: 

* Two additional columns in the history table listing team players.
* Functionality for user to assign teams in a fully randomised manner.
* Functionality to resume previous matches, delete a single match or edit a final score.
* Pagination of match history table.

## Improvements

* I attempted to store each team's players in the database to be used in the history table. To do so I added two columns with the type of JSON in Laravel. While I could store the player name arrays as JSON, I could not find a way to convert them back to arrays, even after using the $casts variable to signify this. This sadly meant that when retrieving the data I couldn't do anything with it. This is something I would like to address as the advantages of storing lists in databases are clear.
* I used a combinatin of CSS Grid and Flexbox for my Settings component, which made responsivity very fiddly. Style refactoring would help lessen this issue.
* A style methodology such as BEMM or the use of SASS would help standardise classes, making classNames informative and ensuring there isn't more than one class doing basically the same thing.
* As users are all making requests to the same database, it is clear that some form of registration is necesarry so that, for instance, when a user clears their list of players this does not happen for other users players lists. At present any changes made by a user affect all users, which defeats the object of saving players in a database.

## Version Management

* I used git and GitHub throughout the project. As it was a solo project I worked on the master branch, making frequent atomic commits.

# How to install the project:

1. cd into the directory on your local machine where you would like the project to be saved

```cd {directory}```

2. Clone the repository to your local machine as follows

```git clone {git@github.com:mdm106/team-selector-frontend.git} {foldername}```

3. Run npm install to install all the required packages

```npm install```

4. Run npm start to run the app locally in development mode

```npm start```

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
