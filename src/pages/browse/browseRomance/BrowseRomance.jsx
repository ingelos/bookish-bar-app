import {useEffect, useState} from "react";
import axios from "axios";
import './BrowseRomance.css'
import BookCard from "../../../components/bookCard/BookCard.jsx";
import BrowseSubject from "../../../components/browseSubject/BrowseSubject.jsx";


function BrowseRomance() {

    return (
        <>
            <BrowseSubject
                endpoint={`https://openlibrary.org/subjects/romance.json`}
                subject={'romance'}
                subjectTitle='Romance'
            />
        </>
    )
}

export default BrowseRomance;


