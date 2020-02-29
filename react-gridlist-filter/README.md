This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).


Application built in ReactJS
##### React GridList filter App #######
Features
Show results in a card grid format with the image prominently displayed.
Each card displays: Image , Name , Text , Set Name , and Type . Additional fields are
Display a loading indicator when communicating with the API.
Use a responsive design that accommodates, at minimum, desktop and mobile.
Initially, fetch and display the first 20 results returned by the API.
As the user scrolls down the page, load and append additional cards using “infinite scroll.”
Retrieve additional pages of results as needed but do not load more than 20 cards with
each request.
Allow the user to search for cards by Name

prerequisites
ReactJS
Jest/Enzyme
TypeScript
sass

installation
ReactJS
Jest/Enzyme
TypeScript
sass
npm install command to install node_modules

application setup 
Copy the source code files in a folder

Assumptions
api is called without any request paramaters/querystring
No validations has been put in place for textbox characters

Known Issues
UI issue might be there related to spinner not being aligned on the page
test case might not be covering all scenarios

build
npm run build
npm start
