//JSX :: View
function App() {
 let str = `Hello World`;
 let pi = 3.14;
 let active = true;
 let isUserLogIn = true;

 return (
  <>
  <h1>Hello World</h1>
  <h1>{str}</h1>
  <h1>{str.toUpperCase()}</h1>
  <h1>{str.substring(1)}</h1>
  <h1>PI {pi} !!</h1>

  {/**Login */}
  {isUserLogIn && <h1>Welcome To React</h1>}
  
  {/** Boolean usage */}
  <h1>{active ? "morning" : "night"}</h1>

  {/**Most useful */}
  {active && <h1>Morning</h1>}
  {active ? <h1>Morning</h1> : <h1>Night</h1>}
  </>
 );
}

export default App;