import React, { useRef, useState } from 'react';
import SearchIcon from '@material-ui/icons/Search';
// import { TextField, InputAdornment, IconButton } from '@material-ui/core';
function Search(props) {
    let searchInput = useRef()
    let [inputLocation, setInputLocation] = useState("css_searchBoxCenter")

    const onInput = () => {
        if (searchInput.current.value === "") {
            setInputLocation("css_searchBoxCenter")
        }
        else {
            setInputLocation("css_searchBoxTop")
        }
        props.setUserInput(searchInput.current.value);
    }

    return (
        <div className="container">
            
            <div className={inputLocation}>
                <div className="col-lg-9">
                    <h1 className=" text-center text-primary mb-3">OMDb search site</h1>
                    <input ref={searchInput} onInput={onInput} type="text" placeholder="search ..." className="form-control w-100 searchBox_input" />
                </div>
                {/* <input ref={searchInput} onInput={onInput} type="text" placeholder="search ..." className="form-control w-75 searchBox_input" /> */}

                {/* <TextField
                    ref={searchInput}
                    variant="outlined"
                    onChange={onInput}
                    className="searchBox_input rounded-circle"
                    InputProps={{
                        endAdornment: (
                            <InputAdornment >
                                <IconButton>
                                    <SearchIcon />
                                </IconButton>
                            </InputAdornment>
                        )
                    }}
                /> */}


            </div>
        </div>
    )
}

export default Search
