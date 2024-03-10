import BrowseSubject from "../../../components/browseSubject/BrowseSubject.jsx";

function BrowseDance() {

    return (
        <>
            <BrowseSubject
                endpoint={`https://openlibrary.org/subjects/dance.json`}
                subject={'dance'}
                subjectTitle='Dance'
            />
        </>
    )
}

export default BrowseDance;