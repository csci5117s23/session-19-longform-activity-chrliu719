import {React} from 'react'
import FlashCard from './flashcard';

export default function FlashCardList({questions}) {

    return <div style={{display: "grid"}}>
        {questions.map(question => (
            <FlashCard front={question["front"]} back={question["back"]}></FlashCard>
        ))}
    </div>
    
}
