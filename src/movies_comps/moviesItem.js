import React from 'react';
function MoviesItem(props) {
    let item = props.item;

    return (
        <div className="p-2 col-lg-3 col-6">
            <div className="card"
            onClick={() => {
                props.setOpenDark(true);
                props.setImdbID(item.imdbID);
            }}
            >
                {/* <img className="card-img-top" src={item.Poster} alt="Card image cap" /> */}
                <div className="pic" style={{ backgroundImage: `url(${item.Poster})` }}></div>
                <div className="card-body">
                    <h5 className="card-title">{item.Title}</h5>
                    <div className="card-text">{item.Year}</div>
                    {/* <button onClick={() => {
                        props.setOpenDark(true);
                        props.setImdbID(item.imdbID);
                    }} className="btn btn-info mt-3">More info</button> */}
                </div>
            </div>
        </div>
    )
}

export default MoviesItem
