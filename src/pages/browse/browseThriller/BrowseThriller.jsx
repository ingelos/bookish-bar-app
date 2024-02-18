import BrowseSubject from "../../../components/browseSubject/BrowseSubject.jsx";

function BrowseThriller() {

    return (
        <>
            <BrowseSubject
                endpoint={`https://openlibrary.org/subjects/thriller.json`}
                subject={'thriller'}
                subjectTitle='Thriller'
            />
        </>
    )
}

export default BrowseThriller;