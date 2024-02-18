import {useEffect, useState} from "react";
import axios from "axios";
import Pagination from "../../../components/pagination/Pagination.jsx";
import BrowseSubject from "../../../components/browseSubject/BrowseSubject.jsx";


function BrowseFantasy() {



    return (
        <>
            <BrowseSubject
                endpoint={`https://openlibrary.org/subjects/fantasy.json`}
                subject={'fantasy'}
                subjectTitle='Fantasy'
            />

        </>
    )
}

export default BrowseFantasy;


