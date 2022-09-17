# Here I will be starting the various use cases of <mark>React Hooks</mark> 
## I will be focusing only on React hooks usage, Hoping the viewer knows basis of React

# 1. useState hook() 🪝: 
* The React useState hook allows us to track state in a function component by rerenderin the the page 
* State generally refers to data or properties that need to be tracking in an application
* e.g. toggle page with useState hook 

# 2. UseEffect hook() 🪝:
* syntax useEffect(()=>{}, [dependencies])
* a function that should be executed after every component evaluation if the specific dependencies changed
* the fucntion only runs if the dependencies changed, or if the hook is provided with empty dependencies the function inside will only run at when rendering of the page happen
* Data fetching, setting up a subscription, and manually changing the DOM in React components are all examples of side effects.
* e.g. fetching user data from json placeholder

# 3. useRef hook() 🪝:
* The useRef Hook allows you to persist values between renders.
* It can be used to store a mutable value that does not cause a re-render when updated.
* It can be used to access a DOM element directly.
* e.g. gettting the value of input

# 4. useMemo hook() 🪝:
* While rendering the page some functions take a slightly large time for computaion as they get called again and again with state change hindering the change of other properties too
* Hence react has useMemo hook, which cashes the value so you don't have to recompute it agian 
* here I take a example of squaring the input number by passing a huge for loop which delay it's time to square, hence the function which is callign the square number function result to rerender the page and hence other properties like changing the theme color also affect
* the slowFunction is wrapped with useMemo, so it does not recompute itself again 
* useMemo also support the idea of referncail equality, whenever you want to make sure that the reference of the object is exacatly the same as previous one use useMemo hook there

# 5. useCallback hook() 🪝:
* Somtimes while rerendering the dom some fucntion are recreated although they are their properties remains the same, resulting more computational power.
* useCallback hook is applied to those functions whose properties are not change while certain event changes. 
* The function inside useCallback can be recreated by changing the dependencies, as useCallback hook takes as an argument
* here in this example you can see by changing the background property getItem() function is not called again and hence the List component

useMemo and useCallback
useMemo takes a function and returns the return 'value' of that function 
useCallback changes the original function and return the entire function 