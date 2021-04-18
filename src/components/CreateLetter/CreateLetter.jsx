import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';


const CreateLetter = () => {
    //needed for dispatch
    const dispatch = useDispatch();

    //SPIKE: PREPOPULATE TEXT FROM TABLE
    //GET TEXT DOWN FROM DB
    //handler for dropdown to send GET request to db
    const getStateLetter = ( event ) =>{
        dispatch({ type: 'FETCH_LETTER', payload: event.target.value } );
    }

    //useSelector to draw from redux
    const text = useSelector( ( store )=>{
        return store.letter;
    })
    
    //GET TO TEXTBOX
    ////HOW DO I DO THIS????
    return (
        <div>
            <h2>Create request</h2>
            <select onChange={getStateLetter}>
                <option disabled value>Please select</option>
                <option>test</option>
                <option>test2</option>
            </select>
            <textarea value={text} onClick={navigator.clipboard.writeText(text)} ></textarea>
        </div>
    )
}

export default CreateLetter
