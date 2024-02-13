import BrowseSubject from "../../../components/browseSubject/BrowseSubject.jsx";


function BrowseMystery() {


    return (
        <>
            <BrowseSubject
                endpoint={`https://openlibrary.org/subjects/mystery.json`}
                subject={'mystery'}
                subjectTitle='Mystery'
            />
        </>
    )
}

export default BrowseMystery;


