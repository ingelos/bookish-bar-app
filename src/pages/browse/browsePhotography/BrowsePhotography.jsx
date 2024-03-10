import BrowseSubject from "../../../components/browseSubject/BrowseSubject.jsx";

function BrowsePhotography() {

    return (
        <>
            <BrowseSubject
                endpoint={`https://openlibrary.org/subjects/photography.json`}
                subject={'photography'}
                subjectTitle='Photography'
            />
        </>
    )
}

export default BrowsePhotography;