import {React} from 'react'
import FlashCard from './flashcard';
import './App.css';

export default function FlashCardList({questions, onRemove}) {

    return <ul className='card-list'>
        {questions.map(question => (
            <li className='card-li'> 
                <FlashCard front={question["front"]} back={question["back"]} id={question["id"]} onRemove={onRemove}></FlashCard>
            </li>
        ))}
    </ul>
    
}
