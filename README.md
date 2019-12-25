# Sezzle Calc


This full-stack project was a (language agnostic) coding challenge given to me by Sezzle. It is a calculator that allows multiple users to remotely make basic calculations and display the results for anyone else connected to see. It can be thought of as a WebSocket-based chat React app where the only form of communication is math operations. A live version of the project can be found at https://sezzle-collab-calc.netlify.com/
The original version of the project is [here.](https://github.com/mromerom/sezzle-collab-calc) There are very small differences between the two, and those were done for hosting/deployment purposes.

![Sezzle Calc Demo](demo/sezzle-calc-demo.gif)


## Specifications

- Multiple users can add calculations.
- See calculations added in real time.
- Only the last 10 results should be displayed (from newest to oldest).
- The calculations must remain between sessions.


## Meeting the Specifications

The project is split up into a small backend built in node.js and using [Socket.IO](https://socket.io); and a frontend built using React and implementing [Hooks](https://reactjs.org/docs/hooks-reference.html) and [Context](https://reactjs.org/docs/context.html#when-to-use-context) as a solution for state management. Calculations are stored in a state array, and Socket.IO is used to allow real-time rendering of calculations across clients. Limiting the calculations displayed to 10 was done using `.slice`. There was no expectation or specification to allow user account creation; to avoid setting up a database and all the work that comes with that, calculations were maintained between sessions using client-side local storage in the browser.


## Hosting and Deployment

The backend was deployed using [Heroku](https://heroku.com) and the frontend was deployed using [Netlify](https://www.netlify.com). To deploy to Heroku it is sometimes necessary to create a [Procfile](https://devcenter.heroku.com/articles/procfile), in which the default language of the project being uploaded is specified. Additionally, when deploying to Netlify, it may necessary to create a build of the application and upload that instead of the entire project (as was the case with the frontend of this application).
