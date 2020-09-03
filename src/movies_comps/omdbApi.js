import React, { useState, useEffect } from 'react';
import MoviesItem from './moviesItem';
function OMDbApi(props) {
    let [movies_arr, setMoviesArr] = useState([]);
    
    let url = "http://www.omdbapi.com/?s=" + props.userInput + "&apikey=5a292f28";
    useEffect(() => {
        fetch(url)
            .then(resp => resp.json())
            .then(data => {
                console.log(data);
                setMoviesArr(data)
            })
            .catch(err => {
                alert("testing: " + err);
                console.log(err);

            })
    }, [props.userInput])

    return (

        <div className="container">
            <div className="row mt-3">
                {(movies_arr.Response === "True") ? movies_arr.Search.map(item => {
                    return (
                        <MoviesItem key={item.imdbID} item={item} setImdbID={props.setImdbID} setOpenDark={props.setOpenDark} />
                    )
                    }) : (props.userInput !== "") ? <h3 className="text-danger">{movies_arr.Error}</h3> : ""
                    // }) :(props.userInput !=="")? "Not Found":""
                }

            </div>
        </div>
    )
}

export default OMDbApi

