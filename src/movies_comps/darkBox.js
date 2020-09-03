import React, { useState, useEffect } from 'react';
function DarkBox(props) {
    // alert(props.imdbID)
    let [imd, setImd] = useState(null);
    let [plot, setPlot] = useState(true);
    let [read, setRead] = useState("more");


    useEffect(() => {

        let url = "http://www.omdbapi.com/?i=" + props.imdbID + "&apikey=5a292f28"
        fetch(url)
            .then(resp => resp.json())
            .then(data => {
                console.log(data);
                setImd(data)
                setPlot(data.Plot.substring(0, 50))

            })
    }, [props.imdbID])

    useEffect(() => {
        if (plot) {
            setRead("more");
        }
        else {
            setRead("less");
        }

    }, [plot])


    return (
        <div id="id_dark" className="dark container-fluid center" >
            <div className="dark_inside text-center">
                <div onClick={() => { props.setOpenDark(false); }}>
                    {(imd) ? <div><img src={imd.Poster} />
                        <h2>{imd.Title}</h2>
                        <h2>{imd.Year}</h2>
                        <p>{(plot) ? <p>{imd.Plot.substring(0, 50)}
                        </p>
                            : <p>{imd.Plot}</p>}
                        </p>
                        {/* <p className="text-primary" onClick={() => { setPlot(!plot) }}>{read}</p> */}

                    </div> : ""}

                </div>
                <button className=" btn btn-primary" onClick={() => { setPlot(!plot) }}>{read}</button>
                {/* <button className="btn btn-danger sm-3" onClick={() => {
                    props.setOpenDark(false);
                }}>Close</button> */}
            </div>
        </div>
    )
}

export default DarkBox
