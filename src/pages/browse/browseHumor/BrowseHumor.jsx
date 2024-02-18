import BrowseSubject from "../../../components/browseSubject/BrowseSubject.jsx";

function BrowseHumor() {

    return (
        <>
            <BrowseSubject
                endpoint={`https://openlibrary.org/subjects/humor.json`}
                subject={'humor'}
                subjectTitle='Humor'
            />
        </>
    )
}

export default BrowseHumor;