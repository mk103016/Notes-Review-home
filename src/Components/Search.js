import React from 'react'

export default function Search() {
    return (
        <>
            <div className="search-back">
                <div className="search-head">NotesHub Search/View Page</div>  
                <input type="search" className="search-bar" placeholder="Search.." />
                <button className="search-button">Submit</button>
                <div className="search-choose">Choose a document:-</div>
                <div className="search-upload-box"></div>
            </div>
        </>
    )
}
