# counter-app
To view counter web app:

Step 1: Run command:
npm i

Step 2: Open index file in a live server.

To make further edits, complete above steps. Then:

Step 1: Install Babel
https://babeljs.io/

Step 2:
From project folder, run:
babel src/app.js --out-file=public/scripts/app.js --presets=react,env --watch

Step 3:
Make code edits to src/app.js.

Babel should automatically update code in the app.js file in the public folder in ES5. Liver server should render the updated code on each save.