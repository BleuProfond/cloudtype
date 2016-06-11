##CloudType

A front end weather forecast application that gives you the average temperature, pressure and humidity for the next five days in any Canadian City. 

The app is built with a [Node.js](https://nodejs.org/en/) framework and React.js plus Redux to manage the views and data. The weather data is accessed through the [Open Weather Map API][(https://openweathermap.org).

###Installation Insctructions

1. Both [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) and [Node.js](https://nodejs.org/en/) need to be installed to run this development build.
2. On your terminal run the following command

 > git clone https://github.com/BleuProfond/cloudtype.git

3. Through your terminal cd into the CloudType root folder and run the following command

 > npm install

 > npm start

4. Visit [localhost:8080](https://localhost:8080) to start the application.

####General Notes on React.js and Redux

  The first step when creacting an application with React should always be to take your mockups and plan out all the different components(modular views) that will be needed.

  The second step should be to determine what components need to be upgraded to containers. Containers have direct access to the Redux store; which holds the entire state tree of the application.

  With Redux we need to centralize all our application's logic into actions and reducers as much as possible. Application state(the fluid data represented through the UI) only ever changes through our reducers and actions and we need to centralize all our logic here.

#####Actions 

  React components are responsible for calling action creators either through user events or programatically. Containers need to be able to call action creators to reach out to the Redux store. You can bind action creators to a container as a class property. 

  Actions are plain JavaScript objects that represent the minimal change to your application state. An action always has a 'type' property describing the change and an optional 'payload' key with additional data for the new peice of application state.

#####MiddleWares

  A dispatched action will always flow through middlewares before it reaches any reducers. These middlewares can potentially manipulate the action before it reaches the reducers. 

  If you send a promise as a payload, redux-promise can stop the action in it's tracks, allow the promise to resolve and then replace the action with one of the same type, but with the response of the resolved promise as the payload. 

