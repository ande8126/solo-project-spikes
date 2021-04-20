import React, { useCallback, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import useClippy from 'use-clippy';


const CreateLetter = () => {
    //needed for dispatch
    const dispatch = useDispatch();



    //function to handle textbox
    const handleText = ( event ) =>{
        setText( event.target.value );
    }

    //SPIKE #1: PREPOPULATE TEXT FROM TABLE
    //GET TEXT DOWN FROM DB
    //handler for dropdown to send GET request to db
    const getStateLetter = ( event ) =>{
        dispatch({ type: 'FETCH_LETTER', payload: event.target.value } );
    }

    //useSelector to draw from redux
    const starterText = useSelector( ( store )=>{
        return store.letter;
    })

    //local state for textbox
    const [ text, setText ] = useState('')
    
    //SPIKE #2: ALLOW USER TO COPY TO CLIPBOARD
    //useClippy tool imported, acts like useState
    const [ clipboard, setClipboard ] = useClippy();

    //disable button if text is already copied
    const isDisabled = clipboard === text;

    const handleCopy = useCallback(()=>{
        setClipboard( text )
    }, [ setClipboard, text ])


    return (
        <div>
            <h2>Create request</h2>
            <select onChange={getStateLetter}>
                <option value=''>Please select</option>
                <option>test</option>
                <option>test2</option>
            </select>
            <p><textarea cols="50" rows="6" onChange={()=>handleText} defaultValue={starterText} /></p>
            <button disabled = {isDisabled} onClick={handleCopy}>Copy</button>
        </div>
    )
}

export default CreateLetter
