import BrowseSubject from "../../../components/browseSubject/BrowseSubject.jsx";

function BrowseFashion() {

    return (
        <>
            <BrowseSubject
                endpoint={`https://openlibrary.org/subjects/fashion.json`}
                subject={'fashion'}
                subjectTitle='Fashion'
            />
        </>
    )
}

export default BrowseFashion;