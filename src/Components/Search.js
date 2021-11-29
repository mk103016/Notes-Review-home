import React from 'react'
import axios from 'axios';
import ReactStars from "react-rating-stars-component";
export default class Search extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
        results: [],
        listOfNotes: '',
        queryString: ''
        }
    }

    onInputchange = (event) => {
        this.setState({
            queryString: event.target.value
        });
    }

    ratingChanged = (newRating) => {
        console.log(newRating);
    };

    getNotesData = () => {
        var URLString = 'http://localhost:5000/notes?search=' + this.state.queryString;
        axios.get(URLString).then(response => {
            console.log(response.data);
            var notes = response.data;
            for (let note of notes) {
                console.log(note);
                if (note.rating >= 7.5) {
                    note.className = 'green';
                } else if (note.rating < 5) {
                    note.className = 'red';
                } else {
                    note.className = 'yellow';
                }
            }
            this.setState({ results: notes })
        }).catch(error => {
            console.log(error);
            alert("No Data found!");
        })
    };

    renderResults = () => {
        const notes = this.state.results;
        let listOfNotes = '';
        if (notes && notes.length > 0) {
            listOfNotes = notes.map((note, idx) =>
                <div className = "search-upload-box" key = { idx } >
                    <div className = "description" > Description: { note.description } </div> 
                    <div className = "author" > Author: { note.author } </div> 
                    <div className = "subject" > Subject: { note.subject } </div> 
                    <div className = { note.className } > Average Rating: { note.rating } </div> 
                    <button className = "comment-button" >comments </button> 
                    <button className = "delete-button" >delete </button>  
                    <button className = "view-button" >view </button>  
                    <ReactStars
                        count = { 5 }
                        onChange = { this.ratingChanged }
                        size = { 24 }
                        isHalf = { true }
                        emptyIcon = { < i className = "far fa-star" > </i>}
                        halfIcon = { < i className = "fa fa-star-half-alt" > </i>}
                        fullIcon = { < i className = "fa fa-star" > </i>}
                    activeColor = "#ffd700"/>
                    <div className = "extra-space" > </div> 
                    <div className = "gap-space" > </div > 
                </div> );
        }
        console.log('list of notes', listOfNotes);
        return ( <div> { listOfNotes } </div>);
    }

    render() {
        return ( 
            <>
                <div className = "search-back" >
                    <div className = "search-head" > NotesHub Search / View Page </div>   
                    <input type = "search"
                        onChange = { this.onInputchange }
                        className = "search-bar"
                        placeholder = "Search for notes.." />
                    <button className = "search-button"
                        onClick = { this.getNotesData } > Submit </button>
                    <div className = "searchResult" ></div> 
                    <div className = "search-choose" > Choose a document: - </div> { this.renderResults() } 
                </div> 
            </>
        )
    }
}