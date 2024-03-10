import BrowseSubject from "../../../components/browseSubject/BrowseSubject.jsx";

function BrowseDesign() {

    return (
        <>
            <BrowseSubject
                endpoint={`https://openlibrary.org/subjects/design.json`}
                subject={'design'}
                subjectTitle='Design'
            />
        </>
    )
}

export default BrowseDesign;