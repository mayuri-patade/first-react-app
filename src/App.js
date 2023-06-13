//JSX :: View
function App() {
 let str = `Hello World`;


 return (
  <>
  <h1>{str}</h1>
  <h1>{str.toUpperCase()}</h1>
  <h1>{str.substring(1)}</h1>
  </>
 );
}

export default App;