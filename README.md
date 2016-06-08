With Redux we need to centralize all our logic into actions and reducers as much as possible. We only change our application state through our reducers and actions. 

React components should never be making ajax requests. We rely on Redux to do that for us. Action creators are responsible for making ajax requests. Action creators always have to return an action. An action is an object that always has a 'type' property that is the minimal representation of a change to the applciation state. Actions can also be passed with an optional 'payload' key with additional data that describes this specific action.

First step should always be to take your mockups and plan out all the different React components that will be needed.

Second step should be to determine which components need to be upgraded to containers. Containers have direct access to the Redux store.

React components are responsible for calling action creators either through user events or programatically. 

The SearchBar needs to have the ability to modify the state of our application by dispatching actions (call an action creator).

Whenever you pass a callback function that references 'this'; you need to bind the context.
eg. this.callBackFunction = this.callBackFunction.bind(this);

When using a form tag in a single page application, it is neccesary to prevent default on submit so that the page does not entirely refresh itself everytime a user triggers a submit event.

Make sure to use back ticks when making use of template strings in ES6.
