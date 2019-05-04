1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?
    Map,filter, filter, concat return new arrays( a non-mutated new object based on another object,)
    The NEWLY returned object has its own memory location so any modifications DO NOT affect original object
    
    We can use old-school Object.assign or the nicer to read spread operator as 
            return {... state, /*otherStuff from forms or payload data for example*/}

2.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
    Actions are a command pattern with a type & payload. They are also generically defined as events.
        The store only received information from actions.
        
        Reducers are pure functions(no side effects) that receive the current state and then
        return a new state(non-mutated). One can look back at the previous history states. It receives
        an action as argument an then (usually) combines the old state and the dispatched action.
        
        The store is an object that holds the state tree. There should only be a single store(the single source of truth)
        in a redux app. A key idea is that state is read only and we only change it with 
        actions(an object describing what happened) that is passed to the reducer to manage state change. 

3.  What is the difference between Application state and Component state? When would be a good time to use one over the other?
    The Component state is similar to props, but it is private and fully controlled by the component.
        If state is used in only one component, that component can manage the state and pass around copies of the 
        state to other components as props & handler can pass data back up to the Component that manages state. 
        Form fields are commonly use Component State as info from them can be passed up via handlers. This can get complicated
        in more complex applications that one with just a form. However, the state of each component(e.g. FriendForm, FriendList,...) can be managed
        and the parts of state needed in another components(e.g. FriendsList) can be brought in. 
        
        Application state is useful if state shared between several components, the shared state should be in a 
        single store(single source of truth as repeated in a lot of documentation). The store should use Application state.
        An app that uses API calls is good for this because the several components will need the API data.

4.  What is middleware?
        Middleware exists between an action and a reducer. It can modify the original action or do more actions before the
        object that the the action prepare the object that the reducer receives. It is very helpful with async operations
        involving axios calls and helps make sure the reducer receives the correct info.

5.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
   Redux-thunk is a type of middleware and can be used to dispatch various actions involving async data. 
    When an action creator is called, redux-thunk will intercept and look at what is returned. If the thing returned is an 
    action, it will forward the action through to the reducer. But, if the thing returned is a function, 
    (e.g. a thunk-function returned from a function), it will call that function and pass in the dispatch function as an argument to it.

    This is how redux-thunk becomes extremely useful. The thunk that is returned by the action creator NOW has access 
    to the dispatch function. Therefore NOW we can run an async function(e.g. an API call) and inside the .then() we can dispatch an action!


6.  Which `react-redux` method links up our `components` with our `redux store`?
     The connect method is used for 'connecting' data and functions from components that are needed to interact 
        with the  redux store.