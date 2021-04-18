import React, { useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import useClippy from 'use-clippy';


const CreateLetter = () => {
    //needed for dispatch
    const dispatch = useDispatch();

    //SPIKE #1: PREPOPULATE TEXT FROM TABLE
    //GET TEXT DOWN FROM DB
    //handler for dropdown to send GET request to db
    const getStateLetter = ( event ) =>{
        dispatch({ type: 'FETCH_LETTER', payload: event.target.value } );
    }

    //useSelector to draw from redux
    const text = useSelector( ( store )=>{
        return store.letter;
    })
    
    //SPIKE #2: ALLOW USER TO COPY TO CLIPBOARD
    //useClippy tool imported, acts like useState
    const [ clipboard, setClipboard ] = useClippy();

    //disable button if text is already copied
    const isDisabled = clipboard === text;

    const handleCopy = React.useCallback(()=>{
        setClipboard(text)
    }, [setClipboard, text])


    return (
        <div>
            <h2>Create request</h2>
            <select onChange={getStateLetter}>
                <option disabled value>Please select</option>
                <option>test</option>
                <option>test2</option>
            </select>
            <textarea value={text} ></textarea>
            <button disabled = {isDisabled} onClick={handleCopy}>Copy</button>
        </div>
    )
}

export default CreateLetter
