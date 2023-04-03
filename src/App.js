import logo from './logo.svg';
import './App.css';
import FlashCard from './flashcard';
import FlashCardList from './flashcardlist';
import FlashCardBuilder from './flashcardbuilder';
import { useState } from 'react';
require('purecss')

function App() {
  const [cards, setCards] = useState( [
    {front: "question1", back:"answer1", id: 0},
    {front: "question2", back:"answer2", id: 1},
    {front: "question3", back:"answer3", id: 2},
  ])

  function addCard(front, back){
    const newCard = {front: front, back: back, id: Math.floor(Math.random() * 10000)};
    setCards(cards.concat(newCard));
  }

  function removeCard(id){
    console.log("remove id " + id)
    setCards(cards.filter(card => card["id"] != id));
  }

  return (
    <div className="App">
      <FlashCardBuilder onAdd={addCard}></FlashCardBuilder>
      <FlashCardList questions={cards} onRemove={removeCard}></FlashCardList>
    </div>
  );
}

export default App;
