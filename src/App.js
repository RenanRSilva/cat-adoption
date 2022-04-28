import Card from "./components/Card/Card";

function App() {
  return (
    <div className="App">
      <Card
        name="Sydney"
        phone="111-111-1111"
        email="laith@hotmail.com"
        image={{
          url: "https://media.istockphoto.com/photos/kitten-exploring-domestic-setting-picture-id1335433001?b=1&k=20&m=1335433001&s=170667a&w=0&h=9XToSFW4X8uO4QJKBdwFbKJjgxjXiaizLyULFrb4_Gc=",
          alt: "cute cat"
        }}
        favoured={false}
      />
    </div>
  );
}

export default App;
