## Get-web is an aplication that allows to dynamically change the content of the 'main' page from the 'control panel' that is created like Jira. 

## Core functionallity:
*To create 'events' and 'career' section we use fetched data from database
*The contant form at the bottom of the page allows send emails which are displayed in control panel of the 'company' 
*At the 'Company' section u can log in to our control panel and if u are on admin account you are allowed to edit data(i will pass the login and password below to check if it works but you can also sing in with Facebook account or GitHub account)
*After sing in you can see fetched data from database which show us latests events and accnouncemenets
*At the task section, admin can add task to specific worker and delete/edit task.
*At the employers section u can add new employee, dismiss someone or add task to specific worker automatically 
*At the event section you can add or delete event
*At the Job offers you can add or delete job offer
*At the Emails section u can see all emails that comes from the contact section 

## All of the data are stored in Firebase/Firestore
*Login and password for specific account:
*Login: admin@admin.pl password: adminadmin
*Login: user@user.pl password: useruser

##Used technologies:
*React
*Redux toolkit
*React hook form
*React-router-hash-link
*Styled Components
*Firebase / Firestore


## Setup
To run this project, install it locally using npm:

$ cd ../get-web
$ npm install
$ npm start






This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) template.

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

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

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
