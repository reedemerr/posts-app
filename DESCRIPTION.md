#Plain old posts app
Create a modern application written with either typescript or ES6, compiled to ES5 javascript.
Use as little code as possible to achieve required goals.

Initially application should load to mostly empty page and instantly
fetch posts from https://jsonplaceholder.typicode.com/.

There should be a loader indicating that request to server is happening.
After receiving response, posts should be rendered into page.

Each post`s title must be *hoverable* and *clickable*. Both actions should fetch comments for post.
However make sure that hover activates only if mouse is over title for at least *1 second*.
Click action should work immediately.

When comments are received, small number of them should be displayed near post.

Each post must have an icon that will link to a separate page
and display it`s author information.
Author page must be reachable without refreshing the browser, but browser navigation buttons must work

##Bonus points
* Render only few posts, make a button that renders more each time you click it
* Store comments in some local storage for some time and do less calls to API

##Workflow
When working a task, please take notes on what you do and why. Add those notes to resulting app`s docs.
