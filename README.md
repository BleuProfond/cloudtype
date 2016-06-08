With Redux we need to centralize all our logic into actions and reducers as much as possible.

React components should never be making ajax requests. We rely on Redux to do that for us.

First step should always be to take your mockups and plan out all the different React components that will be needed.

Second step should be to determine which components need to be upgraded to containers. Containers have direct access to the Redux store.

React components are responsible for calling action creators either through user events or programatically. 

The SearchBar needs to have the ability to modify the state of our application by dispatching actions (call an action creator).

Whenever you pass a callback function that references 'this'; you need to bind the context.
eg. this.callBackFunction = this.callBackFunction.bind(this);

When using a form tag in a single page application, it is neccesary to prevent default on submit so that the page does not entirely refresh itself everytime a user triggers a submit event.