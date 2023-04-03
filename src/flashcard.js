import {React, useState} from 'react'

export default function FlashCard({front, back}) {
    const [cardFront, setCardFront] = useState(true);

    function changeSide(){
        setCardFront(!cardFront);
    }

    if(cardFront){
        return (
            // <div onClick={changeSide} style={{backgroundColor:"#000000", height: '100px', width: "200px", textAlign: 'center', textAlignVertical: "center"}}>
            <div onClick={changeSide} style={{backgroundColor:"#000000", textAlign:"center", verticalAlign:"center", flex: 1}}>
                {front}
            </div>
            );
    }
    else {
        return (
            <div onClick={changeSide} style={{backgroundColor:"#595656", textAlign:"center", verticalAlign:"center", flex: 1}}>
                {back}
            </div>
            );
    }   
}
