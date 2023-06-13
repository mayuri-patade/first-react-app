function App() {
  let id = "id1";
  let str = `Hello World`;
  let pi = 3.14;

 
  return (
   <>
   <h1 id="id1">Hello World</h1>
   <h1 id={id}>{str}</h1>

   <h1>PI {pi} !!</h1>
  
   <h1 id="id1">Hello World</h1>
   <h1 id={"id1"}>Hello World</h1>
   <h1 id={`id1`}>Hello World</h1>
   <h1 id={id}>Hello World</h1>
   </>
  );
 }
 
 export default App;