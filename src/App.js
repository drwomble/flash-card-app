import {useState, useEffect} from "react";
import CardList from "./CardList";
import Form from "./Form";

function App() {
  const [cards, setCards] = useState([])

  useEffect(() => {
    fetch('http://localhost:3001/questions')
    .then(response => response.json())
    .then(data => setCards(data))
  }, [])

  const handleForm = (newCard) => setCards(currentCardList => {
    return [...currentCardList, newCard]
    }
  )
  
  return (
    <div className="app">
      <div>
      <CardList cards={ cards } />
      </div>
      <div>
        <Form handleForm={handleForm}/>
      </div>
    </div>
  );
}

export default App;
