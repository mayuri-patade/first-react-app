function App() {
 let str = `Hello World`;
 let pi = 3.14;
 let active = true;
 let isUserLogIn = true;
 let user = {id : 1,name : "mayuri"};

 return (
  <>
  <h1>Hello World</h1>
  <h1>{str}</h1>
  <h1>{str.toUpperCase()}</h1>
  <h1>{str.substring(1)}</h1>
  <h1>PI {pi} !!</h1>
  <h1>ID:{user.id} NAME:{user.name}</h1>

  </>
 );
}

export default App;