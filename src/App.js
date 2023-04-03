import logo from './logo.svg';
import './App.css';
import FlashCard from './flashcard';
import FlashCardList from './flashcardlist';

function App() {
  const QUESTIONS = [{front: "question1", back:"answer1"},
                    {front: "question2", back:"answer2"},
                    {front: "question3", back:"answer3"},]

  return (
    <div className="App">
      <header className="App-header" >
      {/* <FlashCard front="front" back="back"></FlashCard> */}
        <FlashCardList questions={QUESTIONS}></FlashCardList>
      </header>
     
      


    </div>
  );
}

export default App;
