import BrowseSubject from "../../../components/browseSubject/BrowseSubject.jsx";


function BrowseHistorical() {

    return (
        <>
            <BrowseSubject
                endpoint={`https://openlibrary.org/subjects/historical_fiction.json`}
                subject={'historical_fiction'}
                subjectTitle='Historical fiction'
            />
        </>
    )
}

export default BrowseHistorical;

