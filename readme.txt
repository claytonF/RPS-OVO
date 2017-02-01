Before running the app in the root directory run npm install
To start the app run a node server (http-server) - assumes have node, npm and the http-server package installed, but it should run on any server instance.

Navigate to the app folder i.e. localhost:8080/app/. The app folder is essentially what would be deployed.

———————————————

Given more time I would:

- improve the core function that compares and computer selection. It is quite verbose and UnDRY at the moment and some refactoring would certainly improve maintainability.
- Add some animation to the elements so that the result perhaps span into the screen or pulsed and the ‘play’ button maybe throbbed to attract attention. 
- Would like to have added an input field so users can enter their name
- Could add local storage option to keep scores recorded, or even create a league of best local scores
- The app is very small but scaling up I would implement web pack to handle bundling and moving dependencies from node_modules to app folder
- responsive design
- I didn’t build any unit tests so that would be definite next step but not something I have a great deal of experience doing.





