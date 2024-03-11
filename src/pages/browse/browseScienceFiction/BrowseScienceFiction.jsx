
import BrowseSubject from "../../../components/browseSubject/BrowseSubject.jsx";


function BrowseScienceFiction() {

    return (
        <>
            <BrowseSubject
                // endpoint={`https://openlibrary.org/subjects/science_fiction.json`}
                subject={'science_fiction'}
                subjectTitle='Science Fiction'
            />
        </>
    )
}



export default BrowseScienceFiction;
