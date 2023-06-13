function App() {

  let style = { background: "green",color: "white"};
  return (
    <>
    <h1 style={style}>Hello World</h1>

    <h1 style = {{ background: "blue",color: "white"}}>Hello World</h1>

    <h1 style = {{ backgroundColor: "red",color:"white",padding: "8px"}}>Hello World</h1>
    </>
  );
}

export default App;