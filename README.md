# Here I will be starting the various use cases of <mark>React Hooks</mark> 
## I will be focusing only on React hooks usage, Hoping the viewer knows basis of React

# 1. useState hook(): 
* The React useState hook allows us to track state in a function component by rerenderin the the page 
* State generally refers to data or properties that need to be tracking in an application
* e.g. toggle page with useState hook 

# 2. UseEffect hook():
* syntax useEffect(()=>{}, [dependencies])
* a function that should be executed after every component evaluation if the specific dependencies changed
* the fucntion only runs if the dependencies changed, or if the hook is provided with empty dependencies the function inside will only run at when rendering of the page happen
* Data fetching, setting up a subscription, and manually changing the DOM in React components are all examples of side effects.