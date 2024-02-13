import BrowseSubject from "../../../components/browseSubject/BrowseSubject.jsx";


function BrowseLiterature() {

    return (
        <>
            <BrowseSubject
                endpoint={`https://openlibrary.org/subjects/literature.json`}
                subject={'literature'}
                subjectTitle='Literature'
            />
        </>
    )
}

export default BrowseLiterature;