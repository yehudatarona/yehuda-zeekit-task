import React, { useState } from 'react';
import Search from './search';
import OMDbApi from './omdbApi';
import DarkBox from './darkBox';
function AppMoives(props) {
    let [userInput, setUserInput] = useState("")
    let [imdbID, setImdbID] = useState("")
    let [openDark, setOpenDark]=useState(false);

    return (
        <div >
            {openDark && <DarkBox imdbID={imdbID} setOpenDark={setOpenDark}/>}
            <Search setUserInput={setUserInput} />
            <OMDbApi userInput={userInput} setImdbID={setImdbID} setOpenDark={setOpenDark}/>
        </div>
    )
}

export default AppMoives