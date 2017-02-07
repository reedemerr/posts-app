# Posts App example React/Redux

## Start the project

Clone Repo

````
git clone
````
Install dependencies
````
npm i
````
Running in development mode
````
npm run dev
````
Building a production version
````
npm run build
````
Running previously built production version
````
npm start
````
## Project file structure

Numbers alongside files or folders indicate spcecific comments and will be provided below.

Note: Since it a small path I chose to organize files in folders by type. Though for bigger ones I would group them by feature.
````
│   .babelrc
│   .editorconfig
│   .eslintrc
│   .gitignore
│   package.json
│   postcss.config.js
│   readme.md
│   server.js
│
├───src
│   │   index.html // entry point of the applcation
│   │
│   └───app
│       │   index.js // 1#
│       │   store.js
│       │
│       ├───actions
│       │       loaderActions.js // 2#
│       │       postActions.js // 3#
│       │       userActions.js
│       │
│       ├───components
│       │   │   CommentList.jsx // a stateless component that renders comments
│       │   │   PostItem.jsx // 4#
│       │   │   PostList.jsx // 5#
│       │   │   UserProfile.jsx // 6#
│       │   │
│       │   └───common //static common components
│       │           Loader.jsx
│       │           Navbar.jsx
│       │
│       ├───constants //constants for action types to prevent 'magic strings'
│       │       loaderActionTypes.js
│       │       postActionTypes.js
│       │       userActionTypes.js
│       │
│       ├───containers // 7#
│       │       App.jsx
│       │       Posts.jsx
│       │       User.jsx
│       │
│       ├───images
│       │       profilePhoto.png
│       │
│       ├───reducers
│       │       index.js
│       │       loaderReducer.js
│       │       postsReducer.js // 8#
│       │       userReducer.js
│       │
│       ├───repositories
│       │       restRepository.js // 9#
│       │       sessionStorageRepository.js // 10#
│       │
│       └───styles // 11#
│               bundle.scss
│               _custom.scss
│               _general.scss
│               _loader.scss
│
└───webpack // webpack configs, boilerplate code.
        webpack-dev.config.js
        webpack-prod.config.js
        webpack.config.js
````
1 - Index.js

The app has two routes, one for profile info and the index route for the posts.
App container is always rendered because it holds loader and navbar components


2 - loaderActions.js

One action witch has the ability to toggle full-page loader. As I didn't use E.X promise-middleware to append suffixes for asynchronous actions.

3 - postActions.js

Imports constants from constants/postActionTypes.js, so the project doesn't have any 'magic strings' floating around. Since I didn't implement error handling, repositories should resolve the promise even on error.

4 - PostItem.jsx

Pretty simple component that has a function to get more comments, since the onClick is on a anchor element, event.preventDefault() disables the native behavior. Instead of using bind(this) on functions inside the constructor I use core-decorators library that binds functions or every function inside a class to this. It has other useful features like throttling and debounce.

5 - PostList.jsx

Loads posts on componentDidMount lifcycle hook if no posts are loaded before. Preventing of loading more posts when navigating. Calls getPosts method provided with the current number to skip the ones loaded.

6 - UserProfile.jsx

Loads up user information on load. Could've added an if statement that reloading user info should happen only if the user has changed from previous one.

7 - containers

One for each route and an App wrapper which renders loader and the nav bar. These components connect to Redux store and pass specific parts of state/actions to child components as props.

8 - postsReducer.js

Maps posts ant comments to state. When the reducer receives new comments for a specific post, I couldn't think of another way to efficiently map them to the required post in immutable fashion.

9 - restRepository.js

Uses axios as the http client. Pretty straight forward, handles any possible errors by returning empty objects/arrays so the app wouldn't break. Since comments retrieved from the backend are stored in session storage, first tries to get them from there, if the promise rejects tries to do a backend call. Transforms posts response and adds empty comment arrays to each post.

10 - sessionStorageRepository.js

I think there is room for improvement here (and everywhere :)) this is the first implementation that got to my mind.

retrieveCommentsFromSS() - fetches all comments from session storage if the source was tampered returns an empty object. This thing occurs only once after that comments are managed in-memory and a copy is saved back.

getComments() - a public function that returns comments by post id. Basically rejects if we don't have any comments for the specific post or we can't return any based on the range specified. Otherwise resolves with a result.

saveComments() -  a public function that saves new comments retrieved from the backend to session storage. I didn't go with the trouble of array merging and removing duplicates.

Well that sums it up about sessionStorageRepository.js. It works, I think it could be implemented in numerious ways, but this is what I came up.

11 - styles

Nothing mutch here, general styles for overlay and one vertical padding class, loader.scss for the spinning loader, and bundle.scss is a collection of custom styles and bootstrap. As for the link hover delay the first thing that got to my mind was CSS3 transform-delay, so I used that. If going for IE8/IE9 , javascript path would be a better option.
