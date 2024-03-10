import BrowseSubject from "../../../components/browseSubject/BrowseSubject.jsx";

function BrowsePlays() {

    return (
        <>
            <BrowseSubject
                endpoint={`https://openlibrary.org/subjects/plays.json`}
                subject={'plays'}
                subjectTitle='Plays'
            />
        </>
    )
}

export default BrowsePlays;