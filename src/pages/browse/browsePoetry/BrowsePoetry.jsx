import BrowseSubject from "../../../components/browseSubject/BrowseSubject.jsx";

function BrowsePoetry() {

    return (
        <>
            <BrowseSubject
                endpoint={`https://openlibrary.org/subjects/poetry.json`}
                subject={'poetry'}
                subjectTitle='Poetry'
            />
        </>
    )
}

export default BrowsePoetry;